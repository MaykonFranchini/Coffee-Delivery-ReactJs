import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react"
import { FormContainer } from "../../styles"
import { FormHeading, Label, PaymentMethodBox } from "./styles"

export function PaymentMethodContainer() {
  
  const paymentOptions = [
    { 
      id: "cartao-credito",
      label: "cartão de crédito",
      icon: <CreditCard size={22} />
    },
    { 
      id: "cartao-debito",
      label: "cartão de débito",
      icon: <Bank size={22} />
    },
    { 
      id: "dinheiro",
      label: "dinheiro",
      icon: <Money size={22} />
    },
  ]
  
  return (
    <FormContainer>
      <FormHeading>
        <CurrencyDollar size={22} color="#4B2995" />
        <div>
          <span>Pagamento</span>
          <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        </div>
      </FormHeading>
      
      {paymentOptions.map(payment => ( 
        <PaymentMethodBox>
          <input type="radio" id={payment.id} name="payment-method" value={payment.id} />
          <Label htmlFor={payment.id}>
            {payment.icon}
            {payment.label}
          </Label>
        </PaymentMethodBox>
      ))}
    </FormContainer>
  )
}