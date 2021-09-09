import s from '../CardsMenu.module.scss';
import DessertsMenuDB from '../../../DataBase/Kitchen/DessertsMenuDB';
import {useRef} from "react";
import {zoomIn} from 'react-animations';
import styled, {keyframes} from 'styled-components';
import {useContext} from "react";
import {Context} from "../../../Functions/Context";

const zoomInAnimation = keyframes`${zoomIn}`;

const InDesserts = styled.div`
  animation: 1s ${zoomInAnimation};
`;


const BG = styled.div`
  background-image: url(${({img}) => img});
  background-size: cover;
  background-position: center;
  width: 400px;
  height: 150px
}`

const Desserts = () => {
  const {getHookOpenItem: {setHookOpenItem}} = useContext(Context);

  const ref = useRef();
  const desserts = DessertsMenuDB.items;

  return (
    <div className={s.wrapper}>
      {/*<div>Горячие блюда</div>*/}
      <InDesserts className={s.items}>
        {desserts.map(dish =>
          <div key={dish.id} className={s.item} ref={ref} onClick={() => setHookOpenItem(dish)}>
            <BG img={dish.img}/>
            <h4 className={s.title}>{dish.name}</h4>
            <div className={s.description}>
              <div><span className={s.cost}>Цена</span>{dish.price}р</div>
              <span>{dish.weight}гр</span>
              <span>Подробнее</span>
            </div>
          </div>
        )}
      </InDesserts>
    </div>
  )
}

export default Desserts;