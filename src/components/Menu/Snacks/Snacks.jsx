import s from '../CardsMenu.module.scss';
import SnacksMenuDB from '../../../DataBase/Kitchen/SnacksMenuDB';
import {useRef} from "react";
import {zoomIn} from 'react-animations';
import styled, {keyframes} from 'styled-components';
import {useContext} from "react";
import {Context} from "../../../Functions/Context";

const zoomInAnimation = keyframes`${zoomIn}`;

const InSnacks = styled.div`
  animation: 1s ${zoomInAnimation};
`;


const BG = styled.div`
  background-image: url(${({img}) => img});
  background-size: cover;
  background-position: center;
  width: 400px;
  height: 150px
}`

const Snacks = () => {
  const {getHookOpenItem: {setHookOpenItem}} = useContext(Context);

  const ref = useRef();
  const snacks = SnacksMenuDB.items;

  return (
    <div className={s.wrapper}>
      {/*<div>Горячие блюда</div>*/}
      <InSnacks className={s.items}>
        {snacks.map(dish =>
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
      </InSnacks>
    </div>
  )
}

export default Snacks;