import s from '../CardsMenu.module.scss'
import PizzaMenuDB from '../../../DataBase/Kitchen/PizzaDB'
import {useRef} from "react";
import {zoomIn} from 'react-animations';
import styled, {keyframes} from 'styled-components';
import {useContext} from "react";
import {Context} from "../../../Functions/Context";

const zoomInAnimation = keyframes`${zoomIn}`;

const InPizza = styled.div`
  animation: 1s ${zoomInAnimation};
`;

const HotDish = () => {
  const {getHookOpenItem: {setHookOpenItem}} = useContext(Context);

  const ref = useRef();
  const pizza = PizzaMenuDB.items;

  return (
    <div className={s.wrapper}>
      <h2 className={s.maneTitle}>Пиццы</h2>
      <InPizza className={s.items}>
        {pizza.map(dish =>
          <div key={dish.id} className={s.item} ref={ref} onClick={() => setHookOpenItem(dish)}>
            <div className={s.img} style={{backgroundImage: `url(${dish.img})`}} />
            <h4 className={s.title}>{dish.name}</h4>
            <div className={s.description}>
              <div><span className={s.cost}>Цена</span>{dish.price}р</div>
              <span>{dish.weight}гр</span>
              <span>Подробнее</span>
            </div>
          </div>
        )}
      </InPizza>
    </div>
  )
}

export default HotDish;