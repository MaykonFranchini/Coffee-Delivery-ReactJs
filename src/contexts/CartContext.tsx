import { createContext, ReactNode, useState } from "react";

interface Item {
  id: number,
  amount: number
}

interface CartContextType {
  cart: Item[];
  addItemToCart: ({id, amount}: Item) => void;
  totalItems: number;
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

  return (
    <CartContext.Provider value={{cart, addItemToCart, totalItems}}>
      {children}
    </CartContext.Provider>
  )
}