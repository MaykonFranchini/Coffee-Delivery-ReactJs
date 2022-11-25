import { AddToCartButton, Amount, CardActions, CofeeDescription, CoffeeBadge, CoffeeCardContainer, Price, PriceInfo, TagsContainer } from "./styles";
import { Minus, Plus, ShoppingCart } from "phosphor-react";



interface CoffeProps {
 details : {
  name: string;
  tags: string[],
  description: string,
  price: number,
  img_url?: string
 }
}

export function CoffeeCard( {details} : CoffeProps) {
  return (
    <CoffeeCardContainer>
      <img src={details.img_url} alt="expresso coffee" />
      
      <TagsContainer>
      {details.tags.map((tag) => (
        <CoffeeBadge key={new Date().getSeconds()}>{tag}</CoffeeBadge>
      ))}
      </TagsContainer>
     
      <CofeeDescription>
        <strong>{details.name}</strong>
        <span>{details.description}</span>
      </CofeeDescription>

      <PriceInfo>
        <Price>R$ <strong>{details.price / 100}</strong></Price>
        <CardActions>
          <Amount>
            <button><Minus size={16} weight="fill" /></button>
            <span>1</span>
            <button><Plus size={16} weight="fill" /></button>
          </Amount>
          <AddToCartButton><ShoppingCart size={22} weight="fill" /></AddToCartButton>
        </CardActions>
      </PriceInfo>
    </CoffeeCardContainer>
  )
}