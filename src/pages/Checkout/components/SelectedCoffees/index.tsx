import { SelectedCoffeeCard } from "../SelectedCoffeeCard";
import { CheckoutButton, FormContainer, PriceDescription, PriceDetails, Total } from "./styles";

export function SelectedCoffees() {
  return(
    <FormContainer>
      <SelectedCoffeeCard/>
      <SelectedCoffeeCard/>

      <PriceDetails>
        <PriceDescription>
          <span>Total items</span>
          <span>R$ 29,70</span>
        </PriceDescription>
        <PriceDescription>
          <span>Entrega</span>
          <span>R$ 3,50</span>
        </PriceDescription>
        <Total>
          <span>Total</span>
          <span>R$ 33,20</span>
        </Total>
      </PriceDetails>
      <CheckoutButton>confirmar pedido</CheckoutButton>
    </FormContainer>
  )
}