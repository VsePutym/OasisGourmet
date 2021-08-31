import s from './Home.module.css';
import BackGround from '../../images/Home/Background.jpg'
import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';
import React from "react";
import Oasis from '../../images/Home/noroot.png';

const animateZoom = keyframes`${zoomIn}`;

const Zoom = styled.div`
  animation: 4s ${animateZoom};
`;
const MaineBG = styled.div`
  background-image: url("${BackGround}");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-position: center;
  height: 100vh;
  overflow: hidden;
`

const Home = () => {

  return (
    <div>
      <MaineBG >
        <div className={s.Wrapper}>
          {/*<HomeSlider/>*/}
        </div>
        <Zoom>
          <div className={s.titleOasis}>
            <img src={Oasis} alt=""/>
          </div>
        </Zoom>
          <div className={s.titlesItaly}>
            <div className={s.groupsTitle}><span>I</span>taly <span>G</span>roup</div>
            <div className={s.madeTitle}>Made with love</div>
            <div className={s.madeTitle}><span>For you</span></div>
          </div>
      </MaineBG>
    </div>
  )
}

export default Home;