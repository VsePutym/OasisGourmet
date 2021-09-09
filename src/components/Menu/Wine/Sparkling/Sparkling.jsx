import s from '../Wine.module.scss';
import wineDB from "../../../../DataBase/Bar/WineDB";



const Sparkling = ({setHookOpenItem}) => {
  const sparklingDB = wineDB.sparkling;

  return(
    <div>
      <div className={s.title}>
        <h1>Champagne & sparkling wine /</h1>
        <span>Шампанское и игристое вино</span>
      </div>
      <div className={s.items}>
        {sparklingDB.map(item =>
          <div key={item.id} className={s.item} onClick={() => setHookOpenItem(item)}>
            <p className={s.Fonts}>{item.name}</p>
            <p className={s.rusName}>{item.nameRus}</p>
            <p className={s.weight}>{item.weight} <span>ml</span></p>
            <p className={s.price}>{item.price} <span>р</span></p>
          </div>
        )}
      </div>
      <div className={s.border} />
    </div>
  )
}

export default Sparkling;