import styled from "styled-components";
import BigGreenEgG from "../../images/aboutUs/biggreenegg2.jpg";
import s from "./AboutUs.module.scss";

const iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

let BigGreenEggStyle;

if (iOS === false) {
  BigGreenEggStyle = styled.div`
    background-image: url("${BigGreenEgG}");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    background-position: center;
    height: 400px;
    overflow: hidden;
    color: white;
    background-attachment: fixed;
    will-change: transform;
    padding-top: 30px;

    ::before {
      content: "";
      width: 100%;
      height: 400px;
      background-color: black;
      position: absolute;
      top: 0;
      opacity: 0.5;
    }

    h1 {
      padding-top: 30px;
      font-size: 60px;
    }

    p {
      width: 80%;
      font-size: 16px;
    }

    .EggTitle {
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
  BigGreenEggStyle = styled.div`
    background-image: url("${BigGreenEgG}");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    background-position: center;
    height: 400px;
    overflow: hidden;
    color: white;
    background-attachment: scroll;
    will-change: transform;
    padding-top: 30px;

    ::before {
      content: "";
      width: 100%;
      height: 400px;
      background-color: black;
      position: absolute;
      top: 0;
      opacity: 0.5;
    }

    h1 {
      padding-top: 30px;
      font-size: 60px;
    }

    p {
      width: 80%;
      font-size: 16px;
    }

    .EggTitle {
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


const BigGreenEgg = () => {
  return (
    <BigGreenEggStyle>
      <div className={s.EggInfo}>
        <h1 className={s.EggTitle}>Попробуйте у нас</h1>
        <p>
          Нынешнее поколение грилей Big Green Egg является результатом сочетания древней мудрости и инновационных
          технологий.
          Отчасти благодаря керамике, специально разработанной НАСА, эти древние традиционные глиняные печи были в
          значительной
          степени усовершенствованы и превратились
          в оригинальные полнофункциональные печи для приготовления различных блюд на свежем воздухе.
          Особенностью керамики Big Green Egg является ее способность отражать тепло и создавать воздушный поток,
          который делает отдельные ингредиенты и блюда нежными.
        </p>
      </div>
    </BigGreenEggStyle>
  )
};
export default BigGreenEgg;