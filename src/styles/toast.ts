import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const StyledToastContainer = styled(ToastContainer)`
  // https://styled-components.com/docs/faqs#how-can-i-override-styles-with-higher-specificity
  /* &&&.Toastify__toast-container {
    
  } */
  .Toastify__toast {
    background: ${(props) =>  props.theme['purple-300']};
  }
  .Toastify__toast-body {
    color: ${(props) =>  props.theme['purple-900']};
    font-family: 'Baloo 2', cursive;
    font-size: 18px;
    font-weight: bold;
  }
  .Toastify__progress-bar {
    background: linear-gradient( to right, #EBE5F9,#4B2995)
  }
`;