import { FormProvider, useForm } from "react-hook-form";
import { AddressContainer } from "./components/AddressContainer";
import { PaymentMethodContainer } from "./components/PaymentMethods";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { PageContainer } from "./styles";
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const newOrderValidationSchema = zod.object({
  cep: zod.string().min(9, 'Informe seu cep corretamente no formato 27943-100'),
  bairro: zod.string().min(2, 'Informe seu bairro'),
  cidade: zod.string().min(2, 'Informe sue cidade'),
  numero: zod.string().min(1, 'Informe o numero'),
  rua: zod.string().min(2, 'Informe o nome da sua rua'),
  uf: zod.string().min(2, 'Informe UF'),
  paymentMethod: zod.string().min(1, 'Selecione o metodo de pagamento'),
})

export function Checkout() {

  const deliveryDetails = useForm({
    resolver: zodResolver(newOrderValidationSchema),
  })

  const { handleSubmit } = deliveryDetails

  function handlePlaceOrder(data: any) {
    console.log(data)
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