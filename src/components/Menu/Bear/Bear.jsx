import s from '../StrongAlcohol/StrongDrinks.module.scss';
import BearBG from '../../../images/MaineMenu/BearBG.jpg'
import styled, {keyframes} from "styled-components";
import {zoomIn} from "react-animations";
import BearDB from "../../../DataBase/Bar/BearDB";

const animateZoom = keyframes`${zoomIn}`;

const Zoom = styled.div`
  animation: 4s ${animateZoom};
  position: absolute;
  top: 25%;
  left: 0;
  right: 0;
`;

const bearDB = BearDB;

const Bear = () => {

  return (
    <div className={s.container}>
      <div className={s.BG} style={{backgroundImage: `url(${BearBG})`}}>
        <Zoom><h1>Bear</h1></Zoom>
      </div>
      <div className={s.wrapper}>
        <h1 className={s.title}>Тёмное пиво</h1>
        {BearDB.Dark.map(item =>
          <div className={s.itemsBear}>
            <div className={s.name}>{item.name}</div>
            <div className={s.filter}>{item.filter}</div>
            <div className={s.alcohol}>{item.alcohol}</div>
            <div className={s.weight}>{item.weight}ml</div>
            <div className={s.price}>{item.price}р</div>
          </div>
        )}
      </div>

      <div className={s.wrapper}>
        <h1 className={s.title}>Светлое пиво</h1>
        {BearDB.light.map(item =>
          <div className={s.itemsBear}>
            <div className={s.name}>{item.name}</div>
            <div className={s.filter}>{item.filter}</div>
            <div className={s.alcohol}>{item.alcohol}</div>
            <div className={s.weight}>{item.weight}ml</div>
            <div className={s.price}>{item.price}р</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Bear;