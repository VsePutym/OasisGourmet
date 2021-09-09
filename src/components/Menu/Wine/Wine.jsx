import s from './Wine.module.scss';
import WineBG from '../../../images/MaineMenu/WineCart/WineBG.jpg'
import wine from '../../../images/MaineMenu/WineCart/wineCircle.png'
import Sparkling from "./Sparkling/Sparkling";
import White from "./White/White";
import styled, {keyframes} from "styled-components";
import {zoomIn} from "react-animations";
import {useContext} from "react";
import {Context} from "../../../Functions/Context";

const animateZoom = keyframes`${zoomIn}`;

const Zoom = styled.div`
  animation: 4s ${animateZoom};
  position: absolute;
  top: 25%;
  left: 0;
  right: 0;
`;

const Wine = () => {
  const {getHookOpenItem: {setHookOpenItem}} = useContext(Context);

  return (
    <div className={s.container}>
      <div className={s.BG} style={{backgroundImage: `url(${WineBG})`}}>
        <Zoom><h1>Wine list</h1></Zoom>
      </div>
      <Sparkling setHookOpenItem={setHookOpenItem} />
      <White setHookOpenItem={setHookOpenItem} />
      <div className={s.img}>
        <div className={s.name}> italy <span>&</span> co</div>
        <img src={wine} className={s.wineCircle} alt=""/>
      </div>
    </div>
  )
}

export default Wine;