import { MapPinLine } from "phosphor-react";
import { FormContainer } from "../../styles";
import { FormHeading } from "../PaymentMethods/styles";
import { InputField } from "./styles";

export function AddressContainer() {
  return (
    <FormContainer>
      <FormHeading>
        <MapPinLine size={22} />
        <div>
          <span>Endereço de Entrega</span>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </FormHeading>

      <InputField placeholder='CEP'/>
      <InputField placeholder='Rua' size='500px'/>
      <InputField placeholder='Numero' size='192px'/>
      <InputField placeholder='Complemento' size='292px'/>
      <InputField placeholder='Bairro' size='192px'/>
      <InputField placeholder='Cidade' size='226px'/>
      <InputField placeholder='UF' size='50px'/>
    </FormContainer>
  )
}