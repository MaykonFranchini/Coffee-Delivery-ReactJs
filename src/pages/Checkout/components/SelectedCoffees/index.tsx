import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../../../contexts/CartContext";
import { SelectedCoffeeCard } from "../SelectedCoffeeCard";
import { CheckoutButton, EmptyCartMessage, FormContainer, PriceDescription, PriceDetails, Total } from "./styles";

export function SelectedCoffees() {
  const {cart, totalPrice} = useContext(CartContext)
  const priceFormatted = (totalPrice/100).toFixed(2)
  const deliveryFee = (3.50).toFixed(2)
  const total = (Number(priceFormatted) + Number(deliveryFee)).toFixed(2)

  if (cart.length > 0 ) {
    return (
      <FormContainer>
        {cart.map(coffee => (
          <SelectedCoffeeCard  id={coffee.id} amount={coffee.amount}/>
        ))}
        
        <PriceDetails>
          <PriceDescription>
            <span>Total de itens</span>
            <span>R$ {priceFormatted}</span>
          </PriceDescription>
          <PriceDescription>
            <span>Entrega</span>
            <span>R$ {deliveryFee}</span>
          </PriceDescription>
          <Total>
            <span>Total</span>
            <span>R$ {total}</span>
          </Total>
        </PriceDetails>
        <CheckoutButton>confirmar pedido</CheckoutButton>
      </FormContainer>
    )
  } else {
    return (
      <FormContainer>
        <EmptyCartMessage>
          <strong>Voce ainda nao selecionou seu cafe.</strong>
          <NavLink to='/'>Ver lista de cafés</NavLink>
        </EmptyCartMessage>

      </FormContainer>
    )
  }
}