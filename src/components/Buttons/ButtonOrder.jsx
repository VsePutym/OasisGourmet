import s from './Button.module.scss';
import cart from '../../images/MaineMenu/modal/cart.svg'
import {Context} from "../../Functions/Context";
import {useContext, useEffect} from "react";
import * as axios from "axios";

const token = '1937734446:AAGhOieZkA0dVqKBbqjwwk573dX00kriDQE';
const chat_id = '-545848917';

const ButtonOrder = ({commit, database, hookOrders, authentication}) => {
  const {UsersDb: {hookDb}} = useContext(Context);

  const sendOrders = (database, hookOrders, authentication) => {
    const promise = new Promise(function (resolve, reject) {
      database.ref('orders').push().set({
        email: authentication.email,
        order: hookOrders,
        name: hookDb.name,
        surname: hookDb.surname,
        phone: hookDb.phone,
        address: hookDb.address
      }).then(() => {
        let newCommit;
        if (commit.length > 0) {
          newCommit = commit;
        } else {
          newCommit = 'Пусто'
        }

        const OrderList = hookOrders.map(({name, count}) => (
          `\n ${name} - ${count}шт.`)).join(`\n`);
        const total = hookOrders.reduce((sum, item) => sum + (item.price * item.count), 0)

        const totalText = `Итого: ${total}рублей.`;
        const Address = `Адресс доставки: ${hookDb.address}`;
        const Man = `Заказчик: ${hookDb.name} ${hookDb.surname}`;
        const phone = `Номер телефона: ${hookDb.phone}`;
        const commitText = `Коментарий к заказу: ${newCommit}`
        const OrderText = `Заказ: ${OrderList}`

        const instance = axios.create({
          baseURL: `https://api.telegram.org/`
        });

        const getUsers = (token, chat_id) => {
          return instance.post(`bot${token}/sendMessage?chat_id=${chat_id}&parse_mode=html&text=
          **${OrderText}**
           \n${totalText}
           \n${Address} 
           \n ${Man} 
           \n ${phone} 
           \n ${commitText}`)
        }
        getUsers(token, chat_id);
      }).catch(error => {
        console.log(error)
      })
    })
  }

  return (
    <div className={s.maineOrders} onClick={() => sendOrders(database, hookOrders, authentication)}>
      <button className={s.learnMore}>
        <span className={s.circle}/>
        <div className={s.cart}>
          <img src={cart} alt=""/>
        </div>
        <span className={s.buttonText}>Заказать</span>
      </button>
    </div>
  )
}

export default ButtonOrder;