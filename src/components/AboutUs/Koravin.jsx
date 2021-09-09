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
  height: 50vh;
  overflow: hidden;
  color: white;
  background-attachment: fixed ;
  will-change: transform;
  padding-top: 30px;
  ::before{
    content: "";
    width: 100%;
    height: 50vh;
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
  
  @media(max-width: 500px){
    height: 60vh;
    ::before{
      height: 60vh;
    }
    h1{
      padding-left: 15px;
      font-size: 40px;
    }
    p{
      width: 100%;
      padding-left: 15px;
      padding-right: 15px;
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
  height: 40vh;
  overflow: hidden;
  color: white;
  background-attachment: scroll ;
  will-change: transform;
  padding-top: 30px;
  ::before{
    content: "";
    width: 100%;
    height: 40vh;
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
  
  @media(max-width: 500px){
    height: 60vh;
    ::before{
      height: 60vh;
    }
    h1{
      padding-left: 15px;
      font-size: 40px;
    }
    p{
      width: 100%;
      padding-left: 15px;
      padding-right: 15px;
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