import s from './CountItem.module.scss';

const CountItem = ({hookCountItem, setHookCountItem, onChange}) => {

  const plusCount = () => {
    setHookCountItem(hookCountItem + 1)
  }

  const minusCount = () => {
    setHookCountItem(hookCountItem - 1)
  }

  return(
    <div className={s.totalCount}>
      <p className={s.titleCount}>Колличество</p>
      <div>
        <button disabled={hookCountItem <= 1} className={s.btnCountMinus} onClick={minusCount}>-</button>
        <input type="number" min='1' max='10' className={s.inputCount} value={hookCountItem < 1 ? 1 : hookCountItem} onChange={onChange}/>
        <button className={s.btnCountPlus} onClick={plusCount}>+</button>
      </div>
    </div>
    )
}

export default CountItem;