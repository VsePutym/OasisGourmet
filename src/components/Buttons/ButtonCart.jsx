import s from './Button.module.scss';
import cart from '../../images/MaineMenu/modal/cart.svg'


const ButtonCart = ({hookOrders, setHookOrders, setHookOpenItem, order}) => {

  const addNewOrder = () => {
    if(hookOrders){
      setHookOrders([...hookOrders, order]);
      setTimeout(() => {
        setHookOpenItem(false);
      }, 500)
    }
  }


  return (
    <div className={s.maine} onClick={addNewOrder}>
      <button className={s.learnMore} >
    <span className={s.circle} />
        <div className={s.cart}>
          <img src={cart} alt=""/>
        </div>
        <span className={s.buttonText}>Заказать</span>
      </button>
    </div>
  )
}

export default ButtonCart