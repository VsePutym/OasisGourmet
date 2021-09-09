import s from './Button.module.scss';
import cart from '../../images/MaineMenu/modal/cart.svg'


const ButtonCart = ({hookOrders, isEdit, setHookOrders, setHookOpenItem, hookOpenItem, order, btnAddOrder, btnEditOrder}) => {

  const addNewOrder = () => {
    if(hookOrders){
      setHookOrders([...hookOrders, order]);
      setTimeout(() => {
        setHookOpenItem(false);
      }, 500)
    }
  }
const editMode = () => {
  const newOrders = [...hookOrders];
  newOrders[hookOpenItem.index] = order;
  setHookOrders(newOrders);
  setHookOpenItem(null);
}

  return (
    <div className={s.maine} onClick={isEdit ? editMode : addNewOrder}>
      <button className={s.learnMore} >
    <span className={s.circle} />
        <div className={s.cart}>
          <img src={cart} alt=""/>
        </div>
        <span className={s.buttonText}>{isEdit ? btnEditOrder : btnAddOrder}</span>
      </button>
    </div>
  )
}

export default ButtonCart