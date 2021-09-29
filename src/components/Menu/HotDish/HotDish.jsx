import s from '../CardsMenu.module.scss'
import HotMenuDB from '../../../DataBase/Kitchen/HotMenuDB'
import {useEffect, useRef} from "react";
import {zoomIn} from 'react-animations';
import styled, {keyframes} from 'styled-components';
import {useContext} from "react";
import {Context} from "../../../Functions/Context";
import UsePreloader from "../../../hooks/Home/UsePreloader";
import Preloader from "../../../Rpeloader/Preloader";

const zoomInAnimation = keyframes`${zoomIn}`;

const In = styled.div`
  animation: 1s ${zoomInAnimation};
`;


const HotDish = () => {
  const {getHookOpenItem: {setHookOpenItem}} = useContext(Context);

  const Preloders = UsePreloader();

  useEffect(() => {
    Preloders.setHookPreloader(hotDish)
  }, [])

  const ref = useRef();
  const hotDish = HotMenuDB.items;

  return (
    <div>
      {Preloders.hookPreloader ?
        <div className={s.wrapper}>
          <h2 className={s.maneTitle}>Горячие блюда</h2>
          <In className={s.items}>
            {hotDish.map(dish =>
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
          </In>
        </div>
        : <Preloader/>}
    </div>
  )
}

export default HotDish;