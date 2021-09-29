import s from '../Wine.module.scss'
import wineDB from '../../../../DataBase/Bar/WineDB'



const White = () => {

  const sparklingDB = wineDB.white;

  return(
    <div>
      <div className={s.title}>
        <h1>White Wines/</h1>
        <span>Белые Вина</span>
      </div>
      <div className={s.items}>
        {sparklingDB.map(item =>
          <div key={item.id} className={s.item}>
            <p className={s.name}>{item.name}</p>
            <span className={s.openItem}>Подробнее</span>
            <p className={s.weight}>{item.weight} <span>ml</span></p>
            <p className={s.price}>{item.price} <span>p</span></p>
          </div>
        )}
      </div>
    </div>
  )
}

export default White;