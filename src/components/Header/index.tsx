import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import logo from '../../assets/logo.png'
import { CartContext } from '../../contexts/CartContext'
import { CartBadge, HeaderContainer, LocationContainer, ShoppingCartButton } from './styles'


export function Header() {
  const {totalItems} = useContext(CartContext)

  
  
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
          {totalItems ? <CartBadge>{totalItems}</CartBadge> : ''}
        </ShoppingCartButton>
      </nav>
    </HeaderContainer>
  )
}