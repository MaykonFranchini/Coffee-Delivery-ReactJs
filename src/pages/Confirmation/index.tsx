import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import confirmationImg from '../../assets/confirmation.png'
import { CartContext } from '../../contexts/CartContext'
import { OrderInfo } from './components/OrderInfo'
import { ConfirmationContainer, HeadingContainer } from './styles'

export function Confirmation() {
  const { orderInfo } = useContext(CartContext)
    
  if(orderInfo.deliveryDetails !== undefined) {
    return (
      <>
        <HeadingContainer>
          <h3>Uhu! Pedido confirmado</h3>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </HeadingContainer>
  
        <ConfirmationContainer>
          <OrderInfo/>
          <img src={confirmationImg} alt="Delivery rider" />
        </ConfirmationContainer>
      </>
    )
  } else {
    return <div></div>
  }
  
}