import s from './ButtonForm.module.scss';
import React from 'react';

const ButtonForm = React.memo((props) => {

  return (
    <button className={s.maine} disabled={!props.isValid} onClick={props.handleSubmit} type={'submit'} >
      <div className={s.learnMore} >
    <span className={s.circle} />
        <div className={s.cart}>
          <img src={props.mail} alt=""/>
        </div>
        <span className={s.buttonText}>{props.name}</span>
      </div>
    </button>
  )
})

export default ButtonForm;