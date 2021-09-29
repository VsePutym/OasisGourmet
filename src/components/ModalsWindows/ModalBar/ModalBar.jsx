import s from '../ModalBar/ModalBar.module.scss';

const ModalBar = ({hookOpenItemBar, setHookOpenItemBar}) => {

  return (
    <div>
      <div className={s.overlay} onClick={() => setHookOpenItemBar(false)}/>
      <div className={s.modalHotDish} >
        <div className={s.close} onClick={() => setHookOpenItemBar(false)}>X</div>
        <div className={s.img} style={{ backgroundImage: `url(${hookOpenItemBar.img})`}} />
        <div className={s.description}>
          <h2 className={s.title}>{hookOpenItemBar.nameRus}</h2>
          <p>{hookOpenItemBar.description}</p>
          <div className={s.wrapper}>
            <div>Цена<span>{hookOpenItemBar.price}p</span></div>
            <div className={s.weight}>{hookOpenItemBar.weight}ml</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalBar;