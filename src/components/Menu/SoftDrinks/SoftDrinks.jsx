import s from './SoftDrinks.module.scss';
import BGCoctels from '../../../images/MaineMenu/SoftDrinksBG.jpg'
import styled, {keyframes} from "styled-components";
import {zoomIn} from "react-animations";
import {useContext} from "react";
import {Context} from "../../../Functions/Context";
import SoftDrinksDB from "../../../DataBase/Bar/SoftDrinksDB";

const animateZoom = keyframes`${zoomIn}`;

const Zoom = styled.div`
  animation: 4s ${animateZoom};
  position: absolute;
  top: 25%;
  left: 0;
  right: 0;
`;

const Coffe = SoftDrinksDB.coffee;
const Milkshakes = SoftDrinksDB.milkshakes;
const Smoothies = SoftDrinksDB.Smoothies;
const FruitDrinks = SoftDrinksDB.FruitDrinks;
const FreshDrinks = SoftDrinksDB.FreshDrinks;

const SoftDrinks = () => {
  const {getHookOpenItem: {setHookOpenItem}} = useContext(Context);

  return (
    <div className={s.container}>
      <div className={s.BG} style={{backgroundImage: `url(${BGCoctels})`}}>
        <Zoom><h1>soft drinks</h1></Zoom>
      </div>
      <div className={s.wrapper}>
        <h1 className={s.title}>Кофе</h1>
        {Coffe.map(item =>
          <div className={s.items}>
            <div className={s.name}>{item.name}</div>
            <div className={s.weight}>{item.weight}ml</div>
            <div className={s.price}>{item.price}р</div>
            <span className={s.openItem} onClick={() => setHookOpenItem(item)}>Подробнее</span>
          </div>
        )}
      </div>

      <div className={s.wrapper}>
        <h1 className={s.title}>Молочные коктелли</h1>
        {Milkshakes.map(item =>
          <div className={s.items}>
            <div className={s.name}>{item.name}</div>
            <div className={s.weight}>{item.weight}ml</div>
            <div className={s.price}>{item.price}р</div>
            <span className={s.openItem} onClick={() => setHookOpenItem(item)}>Подробнее</span>
          </div>
        )}
      </div>

      <div className={s.wrapper}>
        <h1 className={s.title}>Смузи</h1>
        {Smoothies.map(item =>
          <div className={s.items}>
            <div className={s.name}>{item.name}</div>
            <div className={s.weight}>{item.weight}ml</div>
            <div className={s.price}>{item.price}р</div>
            <span className={s.openItem} onClick={() => setHookOpenItem(item)}>Подробнее</span>
          </div>
        )}
      </div>

      <div className={s.wrapper}>
        <h1 className={s.title}>Морсы</h1>
        {FruitDrinks.map(item =>
          <div className={s.items}>
            <div className={s.name}>{item.name}</div>
            <div className={s.weight}>{item.weight}ml</div>
            <div className={s.price}>{item.price}р</div>
            <span className={s.openItem} onClick={() => setHookOpenItem(item)}>Подробнее</span>
          </div>
        )}
      </div>


      <div className={s.wrapper}>
        <h1 className={s.title}>Освежающие напитки</h1>
        {FreshDrinks.map(item =>
          <div className={s.items}>
            <div className={s.name}>{item.name}</div>
            <div className={s.weight}>{item.weight}ml</div>
            <div className={s.price}>{item.price}р</div>
            <span className={s.openItem} onClick={() => setHookOpenItem(item)}>Подробнее</span>
          </div>
        )}
      </div>
    </div>

  )
}

export default SoftDrinks;