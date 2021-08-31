import s from './ButtonEnter.module.scss';
import React from "react";

const ButtonEnter = (props) => {
  return(
      <button className={s.learnMore} disabled={!props.isValid} onClick={props.handleSubmit} type={'submit'}>
    <span className={s.circle}>
      <span className={s.iconArrow} />
    </span>
        <span className={s.buttonText}>{props.name}</span>
      </button>
  )
}

export default ButtonEnter;