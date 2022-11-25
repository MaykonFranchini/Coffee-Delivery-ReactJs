import styled from "styled-components";

export const CoffeeCardContainer = styled.div`

  background: ${(props) => props.theme.cardBackground};
  width: 256px;
  

  border-radius: 0 36px 0 36px;

  display: flex;
  flex-direction: column;
  align-items: center;

  img { 
    width: 120px;
    margin-top: -20px;
  }
`

export const TagsContainer = styled.div` 
  display: flex;
  gap: 8px;
`

export const CoffeeBadge = styled.span`
  background: ${(props) => props.theme['yellow-300']};
  color: ${(props) => props.theme['yellow-900']};
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 16px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 12px 0 16px 0;
`

export const CofeeDescription = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 33px;

  strong {
    font-family: 'Baloo 2', cursive;
    font-size: 20px;
    font-weight: bold;
  }

  span {
    padding: 0 20px;
    color: ${(props) => props.theme['gray-300']}
  }
`

export const PriceInfo = styled.div` 
  width: 100%;
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const Price = styled.span`
font-size: 14px;
strong {
  font-family: 'Baloo 2', cursive;
    font-size: 24px;
    font-weight: bold;
}

`

export const Amount = styled.div` 
  background: ${(props) => props.theme.baseButton};
  width: 72px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 8px;
  font-weight: bold;

  button {
    border: none;
    background: transparent;
    color: ${(props) => props.theme['purple-500']};
    cursor: pointer;
  }

`

export const CardActions = styled.div` 
  display: flex;
  gap: 8px;

`

export const AddToCartButton = styled.button` 

  color: ${(props) => props.theme.background};
  background: ${(props) => props.theme['purple-900']};
  border: none;
  width: 38px;
  border-radius: 8px;
  cursor: pointer;
`
