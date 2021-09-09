import s from './ModalFood.module.scss';
import ButtonCart from "../../Buttons/ButtonCart";
import CountItem from "../../CountItem/CountItem";
import {UseCountItem} from "../../../hooks/countItem/UseCountItem";
import {totalPriceItem} from "../../../Functions/Functions";

const ModalFood = ({hookOpenItem, setHookOpenItem, hookOrders, setHookOrders}) => {
  const getHookCounter = UseCountItem(hookOpenItem.count);
  const isEdit = hookOpenItem.index > -1;

  const btnAddOrder = 'Заказать';
  const btnEditOrder = 'Изменить';

  const order = {
    ...hookOpenItem,
    count: getHookCounter.hookCountItem
  }

  return (
    <div>
      <div className={s.overlay} onClick={() => setHookOpenItem(false)}/>
      <div className={s.modalHotDish}>
        <img className={s.cover} src={hookOpenItem.img} alt=""/>
        <h3 className={s.title}>{hookOpenItem.name}</h3>
        <p>{hookOpenItem.description}</p>
        <div className={s.wrapper}>
          <div>Цена<span>{hookOpenItem.price}P</span></div>
          <div className={s.weight}>{hookOpenItem.weight}г</div>
          <div className={s.totalPriceItem}>Итог<span>{totalPriceItem(order)}</span>Р</div>
        </div>
          <CountItem {...getHookCounter}/>
        <ButtonCart isEdit={isEdit} hookOrders={hookOrders} setHookOrders={setHookOrders}
                    btnAddOrder={btnAddOrder} btnEditOrder={btnEditOrder}
                    hookOpenItem={hookOpenItem}
                     setHookOpenItem={setHookOpenItem} order={order} />
      </div>
    </div>
  )
}

export default ModalFood;