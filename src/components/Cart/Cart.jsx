import s from './Cart.module.scss';
import {totalPriceItem} from "../../Functions/Functions";
import {useContext, useState} from "react";
import {Context} from "../../Functions/Context";
import styled, {keyframes} from "styled-components";
import {slideInDown} from "react-animations";
import BG from '../../images/Cart/mainImg.jpg';
import ButtonOrder from "../Buttons/ButtonOrder";
import OrderListItems from "./OrderListItems";
import User from "../User/User";
import UserChange from "../../hooks/Auth/UserChange";
import {UseCommit} from "../../hooks/Orders/UseCommit";

const animationBounceInDown = keyframes`${slideInDown}`;
const BounceInDown = styled.div`
  animation: 1s ${animationBounceInDown};
`;



const Cart = () => {
  const {getOrders: {hookOrders, setHookOrders}, database , getAuth: {authentication}, UsersDb: {hookDb}} = useContext(Context);

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
 const getChange = UseCommit('');


  return (
    <div>
      {hookDb
        ? <BounceInDown className={s.container}>
            {hookOrders.length > 0
              ? <div>
                <div className={s.imgBG}>
                  <h1>Ваш заказ</h1>
                </div>
                <div className={s.wrapper}>
                  <div className={s.info}>
                    {hookOrders.map((item, index) =>
                      <OrderListItems item={item} key={index} deleteOrder={deleteOrder} index={index}/>)}
                  </div>

                  <div className={s.total}>
                    <div>Позиций <span>{positions}шт</span></div>
                    <div>Итог<span>{total}p</span></div>
                    <textarea {...getChange} value={getChange.hookcommit} style={{border: '1px solid #282936', borderRadius: '20px'}} name="comentOrder" id="" cols="40" rows="10" placeholder='Коментарий к заказу...' />
                  </div>

                  <ButtonOrder commit={getChange.hookcommit} hookOrders={hookOrders} database={database} authentication={authentication}/>
                </div>

              </div>
              : <div>
                <div className={s.imgBG}>
                  <h1>Корзина пока-что пуста, заполните её товарами</h1>
                </div>
              </div>}
        </BounceInDown>
        : <User />}
    </div>
  )
};

export default Cart