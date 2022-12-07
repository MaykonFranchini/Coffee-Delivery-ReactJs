import { AddressContainer } from "./components/AddressContainer";
import { PaymentMethodContainer } from "./components/PaymentMethods";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { PageContainer } from "./styles";

export function Checkout() {
  return (
    <PageContainer>
      <form>
        <div>
        <h2>Complete seu pedido</h2>
          <AddressContainer />
          <PaymentMethodContainer/>
        </div>


        <div>
          <h2>Cafés selecionados</h2>
          <SelectedCoffees/>
        </div>

      </form>
    </PageContainer>
  )
}