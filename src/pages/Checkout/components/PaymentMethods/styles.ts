import styled from "styled-components";

export const Label = styled.label`
  text-transform: uppercase;
  display: flex;
  gap: 4px;
  font-size: 14px;
  align-items: center;
  background: ${(props) => props.theme.baseButton};
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;

  svg { 
    color: ${(props) =>  props.theme['purple-500']};
  }

  `

export const PaymentMethodBox = styled.div`

input[type='radio'] {
  opacity: 0;
  position: fixed;
  width: 0;
}
input[type='radio'] + label {
  border: 1px solid  transparent;
}

input[type='radio']:checked + label {
  appearance: none;
  background: ${(props) =>  props.theme['purple-300']};
  border: 1px solid  ${(props) =>  props.theme['purple-500']};
}

input[type='radio']:hover + label {
  background: ${(props) =>  props.theme.baseHover};
}

`

export const FormHeading = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 14px;

  span {
    color: ${(props) =>  props.theme['gray-700']};
    font-size: 18px;
  }

  svg { 
    color: ${(props) =>  props.theme['yellow-500']};
  }

`