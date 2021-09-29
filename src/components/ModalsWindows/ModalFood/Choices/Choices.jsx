import s from './Choices.module.css';
import {useEffect} from "react";

const Choices = ({hookOpenItem, hookChoice, changeChoice, setChoice}) => {


  useEffect(() => {
    console.log(hookChoice)
    if (hookOpenItem.price > hookOpenItem.price500) {
      setChoice('1000ml')
    } else if (hookOpenItem.price < hookOpenItem.price500){
      setChoice('500ml')
    }
    if (hookChoice === '1000ml') {
      hookOpenItem.price = hookOpenItem.price500
    } else if (hookChoice === '500ml') {
      hookOpenItem.price = hookOpenItem.price1000;
    }
  }, [changeChoice, hookChoice]);

  return (
    <div>
      <div className={s.ToppingWrapper}>
        {hookOpenItem.choices.map((item, i) => (
          <label key={i} className={s.ToppingLabel} >
            <input name='choices' checked={hookChoice === item} type='radio' className={s.radioInput} value={item} onChange={changeChoice}/>{item}
            <span className={s.CustomRadio} />
          </label>
        ))}
      </div>
    </div>
  )
}

export default Choices;