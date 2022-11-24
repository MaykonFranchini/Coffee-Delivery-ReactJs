import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/logo.png'
import { HeaderContainer, LocationContainer, ShoppingCartButton } from './styles'


export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Coffee cup" />

      <nav>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          <span>London, UK</span>
        </LocationContainer>

        <ShoppingCartButton href='/'>
          <ShoppingCart size={22} weight="fill" />
        </ShoppingCartButton>
      </nav>
    </HeaderContainer>
  )
}