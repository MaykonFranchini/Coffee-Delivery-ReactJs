import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  
  gap: 16px;
  flex-wrap: wrap;
  padding: 40px;
  
  background: ${(props) => props.theme.cardBackground};
  margin: 12px 0;
  border-radius: 8px 48px 8px 8px;
  
`

export const PriceDetails = styled.div` 
width: 100%;
margin-top: 12px;
`

export const PriceDescription = styled.div` 
display: flex;
justify-content: space-between;
margin-top: 12px;
`

export const Total = styled(PriceDescription)`
  font-weight: bold;
  font-size: 18px;

`

export const CheckoutButton = styled.button` 
  width: 100%;
  padding: 12px;
  color: white;
  background: ${(props) => props.theme['yellow-500']};
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 24px;

  &:hover {
    background: ${(props) =>  props.theme['yellow-900']};
  }
`

export const EmptyCartMessage = styled.div` 
  font-family: 'Baloo 2', cursive;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
    color: ${(props) => props.theme['purple-900']};
    cursor: pointer;
    padding: 4px;
    background: ${(props) => props.theme.baseButton};
    text-align: center;
    border-radius: 8px;
    margin-top: 8px;

    &:hover {
      background: ${(props) =>  props.theme.baseHover};
    }
  }
`