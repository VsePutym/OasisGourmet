import s from '../StrongAlcohol/StrongDrinks.module.scss';
import BGCoctels from '../../../images/MaineMenu/CocteileBG.jpg'
import styled, {keyframes} from "styled-components";
import {zoomIn} from "react-animations";
import {useContext} from "react";
import {Context} from "../../../Functions/Context";
import StrongDrinks from "../../../DataBase/Bar/StrongDrinks";
import CocktailsBD from "../../../DataBase/Bar/CocktailsBD";

const animateZoom = keyframes`${zoomIn}`;

const Zoom = styled.div`
  animation: 4s ${animateZoom};
  position: absolute;
  top: 25%;
  left: 0;
  right: 0;
`;

const cocktailsDB = CocktailsBD.items;

const Cocktail = () => {
  const {getHookOpenItemBar: {setHookOpenItemBar}} = useContext(Context);

  return (
    <div className={s.container}>
      <div className={s.BG} style={{backgroundImage: `url(${BGCoctels})`}}>
        <Zoom><h1>Cocktail List</h1></Zoom>
      </div>
      <div className={s.wrapperCoc}>
        <h2 className={s.Tipe}>Коктели</h2>
        {cocktailsDB.map(item =>
          <div className={s.items}>
            <div className={s.name}>{item.name}</div>
            <div className={s.weight}>{item.weight}ml</div>
            <div className={s.price}>{item.price}р</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cocktail;