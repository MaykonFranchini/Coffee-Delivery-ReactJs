import styled from "styled-components";

export const CoffeeListContainer = styled.div`

  h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 40px;
  }

`

export const CoffeeGrid = styled.div` 
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px 32px;

`