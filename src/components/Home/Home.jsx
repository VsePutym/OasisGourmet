import s from './Home.module.scss';
import BackGround from '../../images/Home/Background.jpg'
import styled, {keyframes} from 'styled-components';
import {bounceInDown, zoomIn} from 'react-animations';
import React, {useEffect} from "react";
import Oasis from '../../images/Home/noroot.png';
import Preloader from "../../Rpeloader/Preloader";
import UsePreloader from "../../hooks/Home/UsePreloader";
import insta from '../../images/Home/icon/instagram.svg'
import Facebook from '../../images/Home/icon/facebook.svg'
import {Link, NavLink} from "react-router-dom";


const animateZoom = keyframes`${zoomIn}`;
const Zoom = styled.div`
  animation: 5s ${animateZoom};
`;

const animationBounceInDown = keyframes`${bounceInDown}`;
const BounceInDown = styled.div`
  animation: 1s ${animationBounceInDown};
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

  const Preloders = UsePreloader();

  useEffect(() => {
    Preloders.setHookPreloader(BackGround)

  }, [])
  const iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

  return (
    <div>
      {Preloders.hookPreloader
        ? <BounceInDown>
          <MaineBG>
            <div className={s.mainInfo}>
              <div className={s.left}>Заказать банкет</div>
              <div className={s.left}>События и акции</div>
              <div className={s.left}>Оформить клубную карту</div>
            </div>
            <div className={s.social}>
              <a href='https://www.instagram.com/oasis_gourmet/' className={s.instagram}>
                <img src={insta} alt=""/>
                <p>Instagram</p>
              </a>

              <a href='https://www.facebook.com/italygroup/' className={s.facebook}>
                <img  src={Facebook} alt=""/>
                <p>Facebook</p>
              </a>

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
        </BounceInDown>
        : <Preloader/>}
    </div>
  )
};

export default Home;