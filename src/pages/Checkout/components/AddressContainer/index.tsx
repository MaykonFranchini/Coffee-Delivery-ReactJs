import { MapPinLine } from "phosphor-react";
import { FormContainer } from "../../styles";
import { Input } from "../Input";
import { FormHeading } from "../PaymentMethods/styles";


export function AddressContainer() {
  
const inputsData = [
  {
    placeholder: 'CEP',
    inputId: 'cep'
  },
  {
    placeholder: 'Rua',
    size: '500px',
    inputId: 'rua'
  },
  {
    placeholder: 'Numero',
    size: '192px',
    inputId: 'numero'
  },
  {
    placeholder: 'Complemento',
    size: '292px',
    inputId: 'complemento'
  },
  {
    placeholder: 'Bairro',
    size: '192px' ,
    inputId: 'bairro'
  },
  {
    placeholder: 'Cidade',
    size: '226px',
    inputId: 'cidade'
  },
  {
    placeholder: 'UF',
    size: '50px',
    inputId: 'uf'
  },

]
  
  return (
    <FormContainer>
      <FormHeading>
        <MapPinLine size={22} />
        <div>
          <span>Endereço de Entrega</span>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </FormHeading>

      {inputsData.map( input => {
        return (
          <Input key={input.inputId} placeholder={input.placeholder} inputId={input.inputId} size={input.size} />
        )
      })}

      

    </FormContainer>
  )
}