import { Minus, Plus, Trash } from 'phosphor-react'
import { MouseEventHandler, useContext } from 'react';
import { coffees } from '../../../../coffees'  
import { CartContext } from '../../../../contexts/CartContext';
import { ActionBox, ActionWrapper, Amount, CardContainer, Price, RemoveButton} from './styles'

interface CoffeeCardProps {
  id: number;
  amount: number;
}

// interface Coffee {
//   id: number;
//   name: string;
//   tags: string[];
//   description: string;
//   price: number;
//   img_url: string;
// }


export function SelectedCoffeeCard({ id, amount}: CoffeeCardProps) {
  const coffee = coffees.find((coffee: { id: number; }) => coffee.id === id)
const {increeseAmount, decreeseAmount, removeItem} = useContext(CartContext)

  function incrementAmount(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault()
    increeseAmount(id)
  }

  function decrementAmount(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault()
    decreeseAmount(id)
  }

  function removeCoffeeFromCart(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault()
    removeItem(id)
  }


  if ( coffee ) {
    return (
      <CardContainer>
        <ActionBox>
          <img src={coffee.img_url} alt="Coffee image" />
          <div> 
            <span>{coffee.name}</span>
            <ActionWrapper>
              <Amount>
                <button onClick={decrementAmount}><Minus size={16} weight="fill" /></button>
                <span>{amount}</span>
                <button onClick={incrementAmount}><Plus size={16} weight="fill" /></button>
              </Amount>
              <RemoveButton onClick={removeCoffeeFromCart}><Trash size={16} /> Remove</RemoveButton>
            </ActionWrapper>
          </div>
        </ActionBox>
        <Price>R$ {(coffee.price / 100 * amount).toFixed(2)}</Price>
      </CardContainer>
    )
  } else {
    return ( 
      <div></div>
    )
  }
}