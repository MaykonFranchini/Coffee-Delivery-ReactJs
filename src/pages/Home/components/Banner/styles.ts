import styled from "styled-components";

export const BannerContainer = styled.div`

  width: 100%;
  display: flex;
  align-items: center;

  img {
    width: 480px;
  }
`

export const BannerDescription = styled.div`
flex: 1;
margin: 6rem 0;
h1 { 
    color: ${(props) =>  props.theme['gray-900']};
    font-family: 'Baloo 2', cursive;
    font-weight: bold;
    font-size: 3rem;
    line-height: 3rem;
    margin-bottom: 16px;
  }
  
  span {
    
    color: ${(props) =>  props.theme['gray-700']};
    font-size: 1.25rem;
  }

`

export const BenefitsList = styled.div`
  margin-top: 66px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;

  span {
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${(props) =>  props.theme['gray-300']};
    font-size: 12px;
    img {
      height: 28px;
      width: 28px;
    }
  }

`