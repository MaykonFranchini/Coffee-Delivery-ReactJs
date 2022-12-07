import { Minus, Plus, Trash } from 'phosphor-react'
import coffeeImg from '../../../../assets/coffees/arabe.png'

import { ActionBox, ActionWrapper, Amount, CardContainer, Price, RemoveButton} from './styles'

export function SelectedCoffeeCard() {
  return (
    <CardContainer>
      <ActionBox>
        <img src={coffeeImg} alt="Coffee image" />
        <div> 
          <span>Expresso Tradicional</span>
          <ActionWrapper>
            <Amount>
              <button><Minus size={16} weight="fill" /></button>
              <span>2</span>
              <button><Plus size={16} weight="fill" /></button>
            </Amount>
            <RemoveButton><Trash size={16} /> Remove</RemoveButton>
          </ActionWrapper>
        </div>
      </ActionBox>
      <Price>R$9,00</Price>
    </CardContainer>
  )
}