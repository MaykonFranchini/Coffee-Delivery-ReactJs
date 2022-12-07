import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: self-start;
  width: 100%;

  img { 
    width: 64px;
    height: 64px;
  }
  
  padding-bottom: 24px;
    border-bottom: 2px solid ${(props) => props.theme.baseButton};
`

export const ActionBox = styled.div` 
  display: flex;
  gap: 20px;
`

export const Price = styled.span`
  font-size: 18px;
  font-family: 'Baloo 2', cursive;
  font-weight: bold;
`

export const Amount = styled.div` 
  display: flex;
  background: ${(props) => props.theme.baseButton};
  width: 72px;
  height: 34px;
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
export const ActionWrapper = styled.div`
display: flex;
gap: 8px;
margin-top: 8px;
`


export const RemoveButton = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  background: ${(props) => props.theme.baseButton};
  border: none;
  height: 34px;
  border-radius: 8px;
  font-size: 14px;
  color: ${(props) => props.theme['gray-500']};
  cursor: pointer;
  text-transform: uppercase;
  svg {
    color: ${(props) => props.theme['purple-500']};
  }

  &:hover {
    background: ${(props) =>  props.theme.baseHover};
  }
`