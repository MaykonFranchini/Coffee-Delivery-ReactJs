import { BannerContainer, BannerDescription } from "./styles";
import coffeeImg from '../../../../assets/coffeeBanner.png'
import { BenefitsList } from "./styles";
import cartImg from '../../../../assets/cartIcon.png'
import timerImg from '../../../../assets/timerIcon.png'
import packageImg from '../../../../assets/packageIcon.png'
import coffeeIconImg from '../../../../assets/coffeeIcon.png'



export function Banner() {
  return (
    <BannerContainer>
      <BannerDescription>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>

        <BenefitsList>
          <span><img src={cartImg} alt="" />Compra simples e segura</span>
          <span><img src={timerImg} alt="" />Entrega rápida e rastreada</span>
          <span><img src={packageImg} alt="" />Embalagem mantém o café intacto</span>
          <span><img src={coffeeIconImg} alt="" />O café chega fresquinho até você</span>
        </BenefitsList>

      </BannerDescription>
      <img src={coffeeImg} alt="Big coofee cup" />
    </BannerContainer>
  )
}