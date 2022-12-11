import timerIcon from '../../../../assets/timerIcon.png'
import locationIcon from '../../../../assets/locationIcon.png'
import cashIcon from '../../../../assets/cashIcon.png'
import { OrderDetailsBox, OrderInfoContainer } from './styles'
import { CartContext } from '../../../../contexts/CartContext'
import { useContext } from 'react'

export function OrderInfo() {
const { orderInfo } = useContext(CartContext)

const {deliveryDetails :{address, paymentMethod} } = orderInfo

  return (
    <OrderInfoContainer>
      <OrderDetailsBox>
        <img src={locationIcon} alt="Map pin icon" />
        <p>Entrega em <strong>{address?.rua}, {address?.numero}</strong><br/>{address?.bairro} - {address?.cidade}, {address?.uf}</p>
      </OrderDetailsBox>
      <OrderDetailsBox>
        <img src={timerIcon} alt="Timer icon" />
        <p>Previsão de entrega<br/><strong>20 min - 30 min</strong></p>
      </OrderDetailsBox>
      <OrderDetailsBox>
        <img src={cashIcon} alt="Cash icon" />
        <p>Pagamento na entrega<br/><strong>{paymentMethod}</strong></p>
      </OrderDetailsBox>
    </OrderInfoContainer>
  )
}