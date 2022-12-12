import { createContext, ReactNode, useEffect, useState } from "react";
import { NonUndefined } from "react-hook-form";
import { coffees } from "../coffees";

interface Item {
  id: number,
  amount: number
}

interface CartContextType {
  cart: Item[];
  addItemToCart: ({id, amount}: Item) => void;
  totalItems: number;
  totalPrice: number;
  orderInfo: OrderInfoData;
  handleCreateOrder: (deliveryDetails: DeliveryDetails) => void;
  decreeseAmount: (id: number) => void;
  increeseAmount: (id: number) => void;
  removeItem: (id: number) => void;
}

interface CartContextProviderType {
  children:  ReactNode;
}

interface DeliveryDetails {
  address: {
    cep: string;
    rua: string;
    numero: string;
    complemento?: string;
    bairro: string;
    cidade: string;
    uf: string;
  }
  paymentMethod: string;
}

interface OrderInfoData {
  items: Item[];
  deliveryDetails: DeliveryDetails
}




export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({children }: CartContextProviderType) {
  const storedItems = localStorage.getItem('@coffee-delivery: cart-1.0.0')
  let initialValue = []
  if(storedItems) {
    initialValue = JSON.parse(storedItems)
  }
  const [cart, setCart] = useState<Item[]>(initialValue)
  const [orderInfo, setOrderInfo] = useState<OrderInfoData>({} as OrderInfoData)

  useEffect(()=> {
    const stateJSON = JSON.stringify(cart)
    localStorage.setItem('@coffee-delivery: cart-1.0.0', stateJSON)
  },[cart])



  function handleCreateOrder(deliveryDetails: DeliveryDetails) {
    setOrderInfo({
      items: cart, 
      deliveryDetails
    })
    setCart([])
  }

  function addItemToCart(item : Item) {
    
    setCart(state => {
      if(state.find(coffee => coffee.id === item.id) ==null) {
        return [...state, item]
      } else {
        return state.map(it => {
          if(it.id === item.id) {
            return {...it, amount: item.amount}
          } else {
            return it
          }
        })
      }
    })
       
  }

  const totalItems = cart.reduce((acc,item) => {
    return acc + item.amount
  }, 0)

  const totalPrice = cart.reduce((acc, item) => {
    const coffee = coffees.find(it => it.id === item.id)
    return acc + item.amount * (coffee?.price || 0)
  },0)

  function increeseAmount(id: number) {
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        return { 
          ...item,
          amount: item.amount +1
        } 
      } else {
        return item
      }
    })

    if(updatedCart.length > 0) {
      setCart(updatedCart)
    }
  }

  function decreeseAmount(id: number) {
    const updatedCart = cart.map(item => {
      if (item.id === id && item.amount > 1) {
        return { 
          ...item,
          amount: item.amount -1
        } 
      } else {
        return item
      }
    })

    if(updatedCart.length > 0) {
      setCart(updatedCart)
    }
  }

  function removeItem(id: number) {
    const updatedCart = cart.filter(item => item.id !== id)
    setCart(updatedCart)
  }

  return (
    <CartContext.Provider value={{orderInfo, handleCreateOrder, cart, totalPrice, addItemToCart, totalItems, increeseAmount, decreeseAmount, removeItem}}>
      {children}
    </CartContext.Provider>
  )
}