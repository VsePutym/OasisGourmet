import s from './Cart.module.scss';
import {totalPriceItem} from "../../Functions/Functions";
import ButtonCart from "../Buttons/ButtonCart";
import {useContext} from "react";
import {Context} from "../../Functions/Context";

const Cart = () => {
  const {getOrders : {hookOrders}} = useContext(Context);

  const total = hookOrders.reduce((result, hookOrders) =>{
return totalPriceItem(hookOrders) + result
  },0)

  // const countTotal = totalPriceItem(hookOrders);

  const positions = hookOrders.reduce((result, hookOrders) =>{
    return result + hookOrders.count
  },0)

  return (
    <div className={s.container}>
      <div className={s.imgBG} />
      <div className={s.info}>
        {hookOrders.length > 0
          ? hookOrders.map(item =>
            <div key={item.id}>{item.name}
              <span className={s.price}>{item.price}р</span><span>{item.count}шт</span>
            </div>)
          : <h1>Пока тут ничего нету</h1>}
        <div>Позиций <span>{positions}шт</span></div>
        <div className={s.total}>Итог <span>{total}p</span></div>
      </div>
      <ButtonCart />
    </div>
  )
}

export default Cart