import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { AddressContainer } from "./components/AddressContainer";
import { PaymentMethodContainer } from "./components/PaymentMethods";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { PageContainer } from "./styles";
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { redirect, useNavigate } from "react-router-dom";

const newOrderValidationSchema = zod.object({
  cep: zod.string().min(9, 'Informe seu cep corretamente no formato 27943-100'),
  bairro: zod.string().min(2, 'Informe seu bairro'),
  cidade: zod.string().min(2, 'Informe sue cidade'),
  numero: zod.string().min(1, 'Informe o numero'),
  rua: zod.string().min(2, 'Informe o nome da sua rua'),
  uf: zod.string().min(2, 'Informe UF'),
  paymentMethod: zod.string().min(1, 'Selecione o metodo de pagamento'),
})

interface FormDetails extends SubmitHandler<FieldValues>{
  cep: string;
  rua: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  uf: string;
  paymentMethod: string;
}

export function Checkout() {
  const {handleCreateOrder} = useContext(CartContext)
  const navigate = useNavigate()

  const deliveryDetails = useForm<FormDetails>({
    resolver: zodResolver(newOrderValidationSchema)
  })

  const { handleSubmit } = deliveryDetails

  function handlePlaceOrder({cep, rua, bairro, numero, complemento, cidade, uf, paymentMethod}: FormDetails) {
    handleCreateOrder({
      address: {
        cep, 
        rua,
        numero, 
        complemento,
        bairro,
        cidade,
        uf,
      },
       paymentMethod
    })
    
    navigate('/confirmation')
  } 

  return (
    <PageContainer>
      <form onSubmit={handleSubmit(handlePlaceOrder)}>
        <div>
        <h2>Complete seu pedido</h2>
        <FormProvider {...deliveryDetails}>
          <AddressContainer />
          <PaymentMethodContainer/>
        </FormProvider>
        </div>


        <div>
          <h2>Cafés selecionados</h2>
          <SelectedCoffees/>
        </div>

      </form>
    </PageContainer>
  )
}