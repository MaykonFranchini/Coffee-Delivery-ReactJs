import styled from "styled-components";

export const InputField = styled.input.attrs(props => ({
  type:  props.type || "text",
  size: props.size || "100px",
}))`
 
  width: ${(props) => props.size};
  background: ${(props) => props.theme.baseInput};
  border: none;
  border-radius: 8px;
  height: 40px;
  padding: 8px;
  color: ${(props) =>  props.theme['gray-500']};
  outline-color: ${(props) => props.theme['yellow-900']};

  &::placeholder {
    color: ${(props) =>  props.theme['gray-300']};
  }

`;