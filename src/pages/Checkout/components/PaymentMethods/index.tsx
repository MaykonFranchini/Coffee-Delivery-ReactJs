import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react"
import { useFormContext } from "react-hook-form"
import { FormContainer } from "../../styles"
import { ErrorMessage } from '../Input/styles'
import { FormHeading, Label, PaymentMethodBox } from "./styles"

export function PaymentMethodContainer() {
  const {register, formState: { errors}} = useFormContext()
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
        <PaymentMethodBox key={payment.id}>
          <input type="radio" id={payment.id} value={payment.id} {...register('paymentMethod')} />
          <Label htmlFor={payment.id}>
            {payment.icon}
            {payment.label}
          </Label>
        </PaymentMethodBox>
      ))}
      {errors.paymentMethod && <ErrorMessage>* Selecione um metodo de pagamento</ErrorMessage>}
    </FormContainer>
  )
}