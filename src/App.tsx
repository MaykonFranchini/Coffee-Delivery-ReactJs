import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Header } from './components/Header'
import { Router } from "./components/Router";
import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./contexts/CartContext";

export function App() {
 return (
   
   <ThemeProvider theme={defaultTheme}>
    <BrowserRouter>
      <CartContextProvider>
        <Router />
      </CartContextProvider>
    </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
 )
}
