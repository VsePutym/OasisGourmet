import s from '../CardsMenu.module.scss'
import PanasiaDB from '../../../DataBase/Kitchen/PanasiaDB';
import {useRef} from "react";
import {zoomIn} from 'react-animations';
import styled, {keyframes} from 'styled-components';
import {useContext} from "react";
import {Context} from "../../../Functions/Context";

const zoomInAnimation = keyframes`${zoomIn}`;

const InPanasia = styled.div`
  animation: 1s ${zoomInAnimation};
`;


const BG = styled.div`
  background-image: url(${({img}) => img});
  background-size: cover;
  background-position: center;
  width: 400px;
  height: 150px
}`

const Panasia = () => {
  const {getHookOpenItem: {setHookOpenItem}} = useContext(Context);

  const ref = useRef();
  const panasiaDB = PanasiaDB.items

  return (
    <div className={s.wrapper}>
      {/*<div>Горячие блюда</div>*/}
      <InPanasia className={s.items}>
        {panasiaDB.map(dish =>
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
      </InPanasia>
    </div>
  )
}

export default Panasia;