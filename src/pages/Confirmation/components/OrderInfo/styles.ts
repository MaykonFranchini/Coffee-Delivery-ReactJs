import styled from "styled-components";

export const OrderInfoContainer = styled.div`

  width: 526px;
  position: relative;
  border: 1px solid  transparent;
  background: ${props => props.theme.background};
  border-radius: 0 50px;
  padding: 40px;
  background-clip: padding-box;

  &::after {
    position: absolute;
    top: -1px;
    bottom: -1px;
    left: -1px;
    right: -1px;
    background: linear-gradient(to right, #DBAC2C, #4B2995) ;
    content: '';
    z-index: -1;
    border-radius: 0 50px;
  }

`

export const OrderDetailsBox = styled.div` 
  display: flex;
  gap: 8px;
  &:nth-child(2) {
      margin: 32px 0;
    }
  img { 
    width: 32px;
    height: 32px;
  }

`