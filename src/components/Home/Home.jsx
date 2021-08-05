import s from './Home.module.css';
import HomeSlider from "./HomeSlider";
import BackGround from '../../images/Home/8.jpg'
import styled, { keyframes } from 'styled-components';
import { rollIn } from 'react-animations';
import React from "react";

const shakeAnimation = keyframes`${rollIn}`;

const Shake = styled.div`
  animation: 4s ${shakeAnimation};
`;


const clientHeight = document.documentElement.clientHeight;
const MaineBG = styled.div`
  background-image: url("${BackGround}");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-position: center;
  height: ${clientHeight}px;
  overflow: hidden;
`

const Home = () => {
  return (
    <MaineBG>
      <div className={s.Wrapper}>
        <HomeSlider/>
      </div>
      <Shake>
      <div className={s.titleOasis}>
        <h1>Oasis</h1>
        <h1 className={s.titleGourmet}><span>Gourmet</span></h1>
      </div>
      </Shake>
      <div className={s.titlesItaly}>
        <h1 className={s.groupsTitle}><span>I</span>taly <span>G</span>roups</h1>
        <h1 className={s.madeTitle}>Made with love</h1>
        <h1 className={s.loveTitle}>for you</h1>
      </div>
    </MaineBG>
  )
}

export default Home;