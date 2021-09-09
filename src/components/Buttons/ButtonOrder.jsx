import s from './Button.module.scss';
import cart from '../../images/MaineMenu/modal/cart.svg'


const ButtonOrder = ({database, hookOrders, authentication}) => {

  const sendOrders = (database, newOrder, authentication) => {
    database.ref('orders').push().set({
      nameClient: authentication.displayName,
      email: authentication.email,
      order: hookOrders
    })
  }

  return (
    <div className={s.maineOrders} onClick={() => sendOrders(database, hookOrders, authentication)}>
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

export default ButtonOrder;