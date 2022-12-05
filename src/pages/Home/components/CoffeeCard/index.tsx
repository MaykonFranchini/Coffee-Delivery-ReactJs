import { AddToCartButton, Amount, CardActions, CofeeDescription, CoffeeBadge, CoffeeCardContainer, Price, PriceInfo, TagsContainer } from "./styles";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { CartContext } from "../../../../contexts/CartContext";



interface CoffeProps {
 details : {
  id: number;
  name: string;
  tags: string[],
  description: string,
  price: number,
  img_url?: string
 }
}

export function CoffeeCard( {details} : CoffeProps) {
  const [amount, setAmount] = useState(0)

  const { cart, addItemToCart} = useContext(CartContext)

  function incrementAmount() {
    setAmount(state => state + 1)
  }
  function decrementAmount() {
    if(amount == 0) {
      return
    }

    setAmount(state => state - 1)
  }

  function handleAddItemToCart() {
    const item = {id: details.id, amount}
    addItemToCart(item)
    
  }

  return (
    
    <CoffeeCardContainer>
      <img src={details.img_url} alt="expresso coffee" />
      
      {/* <TagsContainer>
      {details.tags.map((tag) => (
        <CoffeeBadge>{tag}</CoffeeBadge>
      ))}
      </TagsContainer> */}
     
      <CofeeDescription>
        <strong>{details.name}</strong>
        <span>{details.description}</span>
      </CofeeDescription>

      <PriceInfo>
        <Price>R$ <strong>{details.price / 100}</strong></Price>
        <CardActions>
          <Amount>
            <button onClick={decrementAmount}><Minus size={16} weight="fill" /></button>
            <span>{amount}</span>
            <button onClick={incrementAmount}><Plus size={16} weight="fill" /></button>
          </Amount>
          <AddToCartButton onClick={handleAddItemToCart}><ShoppingCart size={22} weight="fill" /></AddToCartButton>
        </CardActions>
      </PriceInfo>
    </CoffeeCardContainer>
  )
}