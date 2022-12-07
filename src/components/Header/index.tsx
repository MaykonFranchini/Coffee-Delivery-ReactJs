import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { CartContext } from '../../contexts/CartContext'
import { CartBadge, HeaderContainer, LocationContainer, ShoppingCartButton } from './styles'


export function Header() {
  const {totalItems} = useContext(CartContext)

  
  
  return (
    <HeaderContainer>
      <NavLink to='/'>
        <img src={logo} alt="Coffee cup" />
      </NavLink>
      <nav>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          <span>London, UK</span>
        </LocationContainer>

        <ShoppingCartButton >
          <NavLink to='/checkout'>
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
          {totalItems ? <CartBadge>{totalItems}</CartBadge> : ''}
        </ShoppingCartButton>
      </nav>
    </HeaderContainer>
  )
}