import s from '../Phone/ModalPhone.module.css';

const ModalPhone = ({setHookModalPhone}) => {

  return (
    <div>
      <div className={s.wrapper} onClick={() => setHookModalPhone(false)} ></div>
        <div className={s.modalPhone}>
          <button onClick={() => setHookModalPhone(false)}>Close</button>
        </div>
    </div>
  )
}

export default ModalPhone;