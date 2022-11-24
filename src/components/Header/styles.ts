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
  color: ${(props) => props.theme['purple-900']};

`
export const ShoppingCartButton = styled.a`

  padding: 6px;
  border-radius: 6px;

  background: ${(props) => props.theme['yellow-300']};
  color: ${(props) => props.theme['yellow-900']};

`