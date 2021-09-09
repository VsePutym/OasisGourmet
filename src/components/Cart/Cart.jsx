import s from './Cart.module.scss';
import {totalPriceItem} from "../../Functions/Functions";
import ButtonCart from "../Buttons/ButtonCart";
import {useContext} from "react";
import {Context} from "../../Functions/Context";
import styled, {keyframes} from "styled-components";
import {slideInDown} from "react-animations";
import BG from '../../images/Cart/mainImg.jpg';
import ButtonOrder from "../Buttons/ButtonOrder";
import OrderListItems from "./OrderListItems";

const animationBounceInDown = keyframes`${slideInDown}`;
const BounceInDown = styled.div`
  animation: 1s ${animationBounceInDown};
`;



const Cart = () => {
  const {getOrders: {hookOrders, setHookOrders}, database , getAuth: {authentication}} = useContext(Context);

  const total = hookOrders.reduce((result, hookOrders) => {
    return totalPriceItem(hookOrders) + result
  }, 0)

  const positions = hookOrders.reduce((result, hookOrders) => {
    return result + hookOrders.count
  }, 0)

  const deleteOrder = (index) => {
    const newOrder = hookOrders.filter((item, i) => {
        return  index !== i;
    });
    setHookOrders(newOrder);
  }
  return (
    <BounceInDown className={s.container}>
      <div className={s.wrapper}>
        {hookOrders.length > 0
          ? <div>
            <div className={s.imgBG}/>
            <h1>Ваш заказ</h1>
            <div className={s.info}>
              {hookOrders.map((item, index) =>
                <OrderListItems item={item} key={index} deleteOrder={deleteOrder} index={index}/>)}
            </div>
            <div className={s.total}>
              <div>Позиций <span>{positions}шт</span></div>
              <div>Итог<span>{total}p</span></div>
            </div>
            <ButtonOrder hookOrders={hookOrders} database={database} authentication={authentication}/>
          </div>
          : <div>
            <div className={s.imgBG}/>
            <h1>Пока тут ничего нету</h1>
          </div>}
      </div>
      <img src={BG} alt=""/>
    </BounceInDown>
  )
};

export default Cart