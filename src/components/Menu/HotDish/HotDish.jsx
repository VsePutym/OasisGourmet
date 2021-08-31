import s from './HotDish.module.css';
import HotMenuDB from '../../../DataBase/Kitchen/HotMenuDB'
import {useRef} from "react";
import {zoomIn} from 'react-animations';
import styled, {keyframes} from 'styled-components';
import {useContext} from "react";
import {Context} from "../../../Functions/Context";

const zoomInAnimation = keyframes`${zoomIn}`;

const In = styled.div`
  animation: 2s ${zoomInAnimation};
`;


const BG = styled.div`
  background-image: url(${({img}) => img});
  background-size: cover;
  background-position: center;
  width: 400px;
  height: 150px
}`

const HotDish = () => {
  const {getHookOpenItem: {setHookOpenItem}} = useContext(Context);

  const ref = useRef();
  const hotDish = HotMenuDB.items;

  return (
    <div className={s.wrapper}>
      {/*<div>Горячие блюда</div>*/}
      <In className={s.items}>
        {hotDish.map(dish =>
          <div key={dish.id} className={s.item} ref={ref} onClick={() => setHookOpenItem(dish)}>
            <BG img={dish.img}/>
            <h3 className={s.title}>{dish.name}</h3>
            <div className={s.description}>
              <span>Цена{dish.prise}</span>
              <span>{dish.weight}гр</span>
              <span>Подробнее</span>
            </div>
          </div>
        )}
      </In>
    </div>
  )
}

export default HotDish;