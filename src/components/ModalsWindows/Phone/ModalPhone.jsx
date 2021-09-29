import s from '../Phone/ModalPhone.module.scss';

const ModalPhone = ({setHookModalPhone}) => {

  return (
    <div>
      <div className={s.wrapper} onClick={() => setHookModalPhone(false)} />
        <div className={s.modalPhone}>
          <h1>Контакты</h1>
          <div className={s.info}>
            <p>Номер Телефона: <a href='tel:89214333231'>89214333231</a></p>
            <p>Режим работы: ежедневно с 10:00 до 23:00</p>
            <p>Режим доставки: c 12:00 до 22:30</p>
            <p>Минимальный заказ на доставку 1000р</p>
            <p>Адрес: Ленинградская область, коттеджный посёлок Репинское, 42 км</p>
          </div>
          <button onClick={() => setHookModalPhone(false)}>Закрыть</button>
        </div>
    </div>
  )
}

export default ModalPhone;