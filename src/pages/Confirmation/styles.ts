import styled from "styled-components";

export const HeadingContainer = styled.div` 
  h3 {
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['yellow-900']};
    font-size: 32px;
  }
  p { 
    color: ${(props) =>  props.theme['gray-700']};
  }
  margin-bottom: 40px;
` 
export const ConfirmationContainer = styled.div`
display: flex;
gap: 100px;
`