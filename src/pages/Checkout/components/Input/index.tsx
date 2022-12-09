import { useFormContext } from "react-hook-form";
import { ErrorMessage, InputField, InputWrapper } from "./styles";

interface InputProps {
  placeholder: string;
  size?: string;
  inputId: string;
}

export function Input({placeholder, size, inputId}: InputProps) {
  const { register, formState: { errors } } = useFormContext()
  return (
    <InputWrapper>
        <InputField placeholder={placeholder} size={size} {...register(inputId)}/>
        <ErrorMessage>{errors[inputId]?.message?.toString()}</ErrorMessage>
      </InputWrapper>
  )
}