import { CoffeeCard } from "../CoffeeCard";
import { CoffeeGrid, CoffeeListContainer } from "./styles";
import {coffees} from '../../../../coffees'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      <CoffeeGrid>
        {coffees.map((coffee) => (
          <CoffeeCard details={coffee}/>
        ))}
      </CoffeeGrid>
    </CoffeeListContainer>
  )
}