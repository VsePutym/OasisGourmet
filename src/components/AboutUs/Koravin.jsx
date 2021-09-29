import styled from "styled-components";
import KoravinBG from '../../images/aboutUs/Koravin.webp'
import s from "./AboutUs.module.scss";

const iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

let KoravinStyle;

if(iOS === false){
  KoravinStyle = styled.div`
  background-image: url("${KoravinBG}");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-position: center;
    height: 500px;
  overflow: hidden;
  color: white;
  background-attachment: fixed ;
  will-change: transform;
  padding-top: 30px;
  ::before{
    content: "";
    width: 100%;
    height: 500px;
    background-color: black;
    position: absolute;
    top: 0;
    opacity: 0.5;
  }
  h1{
    padding-top: 30px;
    font-size: 60px;
  }
  p{
    width: 80%;
    font-size: 16px;
  }
  .EggTitle{
    padding-bottom: 130px;
  }

    @media (max-width: 990px) {
      p {
        width: 95%;
        font-size: 14px;
      }
    }
    @media (max-width: 660px) {
      h1 {
        font-size: 40px;
      }

    }
    @media (max-width: 500px) {
      h1 {
        padding-top: 0;
        font-size: 35px;
      }

      p {
        font-size: 14px;
      }
    }
`
} else {
  KoravinStyle = styled.div`
  background-image: url("${KoravinBG}");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-position: center;
  height: 500px;
  overflow: hidden;
  color: white;
  background-attachment: scroll ;
  will-change: transform;
  padding-top: 30px;
  ::before{
    content: "";
    width: 100%;
    height: 500px;
    background-color: black;
    position: absolute;
    top: 0;
    opacity: 0.5;
  }
  h1{
    padding-top: 30px;
    font-size: 60px;
  }
  p{
    width: 80%;
    font-size: 16px;
  }
  .EggTitle{
    padding-bottom: 130px;
  }

    @media (max-width: 990px) {
      p {
        width: 95%;
        font-size: 14px;
      }
    }
    @media (max-width: 660px) {
      h1 {
        font-size: 40px;
      }

    }
    @media (max-width: 500px) {
      h1 {
        padding-top: 0;
        font-size: 35px;
      }

      p {
        font-size: 14px;
      }
    }
`
}



const Koravin =() =>{
  return(
    <KoravinStyle>
      <div className={s.KoravinInfo}>
        <h1 className={s.KoravinTitle}>Попробуй любое вино</h1>
        <p>Coravin – это устройство (чаще его называют системой), позволяющее добывать вино из закрытой бутылки, не
          повреждая пробку и сохраняя
          вино в первозданном виде с неизменными вкусовыми характеристиками. Ключевой элемент устройства – капсулы с
          аргоном (инертным газом без цвета, вкуса и запаха), который
          создает в бутылке давление и «выталкивает» таким образом вино прямиком в бокал через тончайшую полую иглу с
          тефлоновым покрытием. И все это – легким
          движением руки, а точнее – легким нажатием на спусковой механизм. Пробка после этого естественным путем
          затягивается и герметизируется. </p>
      </div>
    </KoravinStyle>
  )
};
export default Koravin;