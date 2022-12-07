import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  
  gap: 16px;
  flex-wrap: wrap;
  padding: 40px;
  
  background: ${(props) => props.theme.cardBackground};
  margin: 12px 0;
  border-radius: 8px;
`
export const PageContainer = styled.div`
h2 {
  font-family: 'Baloo 2', cursive;
}
form {
  display: grid;
  grid-template-columns: 580px 440px;
  gap: 32px;
}

`
