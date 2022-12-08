import { createContext, ReactNode, useState } from "react";
import { coffees } from "../coffees";

interface Item {
  id: number,
  amount: number
}

interface CartContextType {
  cart: Item[];
  addItemToCart: ({id, amount}: Item) => void;
  totalItems: number;
  decreeseAmount: (id: number) => void;
  increeseAmount: (id: number) => void;
  removeItem: (id: number) => void;
  totalPrice: number;
}

interface CartContextProviderType {
  children:  ReactNode;
}


export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({children }: CartContextProviderType) {
  const [cart, setCart] = useState<Item[]>([])

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
    <CartContext.Provider value={{cart, totalPrice, addItemToCart, totalItems, increeseAmount, decreeseAmount, removeItem}}>
      {children}
    </CartContext.Provider>
  )
}