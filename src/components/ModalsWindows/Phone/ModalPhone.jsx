import s from '../Phone/ModalPhone.module.scss';

const ModalPhone = ({setHookModalPhone}) => {

  return (
    <div>
      <div className={s.wrapper} onClick={() => setHookModalPhone(false)} />
        <div className={s.modalPhone}>
          <h1>Контакты</h1>
          <div>Наш телефон <span>+79633265671</span></div>
          <div>Хотите заказать банкет? <span>+7964327976</span></div>
          <button onClick={() => setHookModalPhone(false)}>Close</button>
        </div>
    </div>
  )
}

export default ModalPhone;