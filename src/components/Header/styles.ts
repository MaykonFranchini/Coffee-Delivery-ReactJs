import styled from "styled-components";

export const HeaderContainer = styled.header`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 32px 0;


  img { 
    height: 40px;
    width: 86px;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`

export const LocationContainer = styled.div`

  display: flex;
  align-items: center;
  padding: 8px;
  gap: 4px;
  border-radius: 6px;
  
  background: ${(props) => props.theme['purple-300']};
  color: ${(props) => props.theme['purple-500']};

`
export const ShoppingCartButton = styled.span`
  position: relative;
  padding: 6px;
  border-radius: 6px;

  background: ${(props) => props.theme['yellow-300']};
  color: ${(props) => props.theme['yellow-900']};

  a {
    color: ${(props) => props.theme['yellow-900']};
  }
`

export const CartBadge = styled.span`
  position: absolute;
  top: -12px;
  right: -8px;
  padding: 2px 6px;
  background: ${(props) => props.theme['yellow-900']};
  color: white;
  font-weight: bold;
  border-radius: 50%;
`