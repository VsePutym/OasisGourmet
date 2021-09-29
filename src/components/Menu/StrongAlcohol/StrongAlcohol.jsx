import s from './StrongDrinks.module.scss';
import StrongBG from '../../../images/MaineMenu/StrongBG.jpg'
import styled, {keyframes} from "styled-components";
import {zoomIn} from "react-animations";
import {useContext} from "react";
import {Context} from "../../../Functions/Context";
import StrongDrinks from "../../../DataBase/Bar/StrongDrinks";
import WhiskeyDB from "../../../DataBase/Bar/WhiskeyDB";

const animateZoom = keyframes`${zoomIn}`;

const Zoom = styled.div`
  animation: 4s ${animateZoom};
  position: absolute;
  top: 25%;
  left: 0;
  right: 0;
`;
const StrongDrinksDB = StrongDrinks;
const whiskeyDB = WhiskeyDB;

const StrongAlcohol = () => {

  return (
    <div className={s.container}>
      <div className={s.BG} style={{backgroundImage: `url(${StrongBG})`}}>
        <Zoom><h1>Strong Alcohol</h1></Zoom>
      </div>

      <div className={s.wrapper}>
        <h1 className={s.title}>Виски</h1>
        <h2 className={s.Tipe}>Шотландия</h2>
        {whiskeyDB.Scotland.map(item =>
          <div className={s.items}>
            <div className={s.name}>{item.name}</div>
            <div className={s.weight}>{item.weight}ml</div>
            <div className={s.price}>{item.price}р</div>
          </div>
        )}
      </div>

      <div className={s.wrapper}>
        <h2 className={s.Tipe}>Односолодовый виски</h2>
        {whiskeyDB.SingleMalt.map(item =>
          <div className={s.items}>
            <div className={s.name}>{item.name}</div>
            <div className={s.weight}>{item.weight}ml</div>
            <div className={s.price}>{item.price}р</div>
          </div>
        )}
      </div>

      <div className={s.wrapper}>
        <h2 className={s.Tipe}>Ирландия</h2>
        {whiskeyDB.Ireland.map(item =>
          <div className={s.items}>
            <div className={s.name}>{item.name}</div>
            <div className={s.weight}>{item.weight}ml</div>
            <div className={s.price}>{item.price}р</div>
          </div>
        )}
      </div>

      <div className={s.wrapper}>
        <h2 className={s.Tipe}>Япония</h2>
        {whiskeyDB.Japan.map(item =>
          <div className={s.items}>
            <div className={s.name}>{item.name}</div>
            <div className={s.weight}>{item.weight}ml</div>
            <div className={s.price}>{item.price}р</div>
          </div>
        )}
      </div>


      <div className={s.wrapper}>
        <h2 className={s.Tipe}>Америка</h2>
        {whiskeyDB.America.map(item =>
          <div className={s.items}>
            <div className={s.name}>{item.name}</div>
            <div className={s.weight}>{item.weight}ml</div>
            <div className={s.price}>{item.price}р</div>
          </div>
        )}
      </div>

      <div className={s.wrapper}>
        <h1 className={s.title}>Джин</h1>
        {StrongDrinks.Jin.map(item =>
          <div className={s.items}>
            <div className={s.name}>{item.name}</div>
            <div className={s.weight}>{item.weight}ml</div>
            <div className={s.price}>{item.price}р</div>
          </div>
        )}
      </div>

      <div className={s.wrapper}>
        <h1 className={s.title}>Ром</h1>
        {StrongDrinks.Rom.map(item =>
          <div className={s.items}>
            <div className={s.name}>{item.name}</div>
            <div className={s.weight}>{item.weight}ml</div>
            <div className={s.price}>{item.price}р</div>
          </div>
        )}
      </div>
      <div className={s.wrapper}>
        <h1 className={s.title}>Граппа</h1>
        {StrongDrinks.Grappa.map(item =>
          <div className={s.items}>
            <div className={s.name}>{item.name}</div>
            <div className={s.weight}>{item.weight}ml</div>
            <div className={s.price}>{item.price}р</div>
          </div>
        )}
      </div>
      <div className={s.wrapper}>
        <h1 className={s.title}>Ликеры и Биттеры</h1>
        {StrongDrinks.Bitters.map(item =>
          <div className={s.items}>
            <div className={s.name}>{item.name}</div>
            <div className={s.weight}>{item.weight}ml</div>
            <div className={s.price}>{item.price}р</div>
          </div>
        )}
      </div>
      <div className={s.wrapper}>
        <h1 className={s.title}>Портвейны и Хересы</h1>
        {StrongDrinks.Porto.map(item =>
          <div className={s.items}>
            <div className={s.name}>{item.name}</div>
            <div className={s.weight}>{item.weight}ml</div>
            <div className={s.price}>{item.price}р</div>
          </div>
        )}
      </div>
      <div className={s.wrapper}>
        <h1 className={s.title}>Бренди и Коньяк</h1>
        {StrongDrinks.Cognac.map(item =>
          <div className={s.items}>
            <div className={s.name}>{item.name}</div>
            <div className={s.weight}>{item.weight}ml</div>
            <div className={s.price}>{item.price}р</div>
          </div>
        )}
      </div>
      <div className={s.wrapper}>
        <h1 className={s.title}>Водка</h1>
        {StrongDrinks.Vodka.map(item =>
          <div className={s.items}>
            <div className={s.name}>{item.name}</div>
            <div className={s.weight}>{item.weight}ml</div>
            <div className={s.price}>{item.price}р</div>
          </div>
        )}
      </div>
      <div className={s.wrapper}>
        <h1 className={s.title}>Вермуты</h1>
        {StrongDrinks.Vermut.map(item =>
          <div className={s.items}>
            <div className={s.name}>{item.name}</div>
            <div className={s.weight}>{item.weight}ml</div>
            <div className={s.price}>{item.price}р</div>
          </div>
        )}
      </div>
      <div className={s.wrapper}>
        <h1 className={s.title}>Текила</h1>
        {StrongDrinks.Tekila.map(item =>
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

export default StrongAlcohol;