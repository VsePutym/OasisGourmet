import s from "../Registration/Registration.module.scss";
import {Formik} from "formik";
import React, {useRef} from "react";
import * as yup from "yup";
import ButtonEnter from "../../Buttons/ButtonEnter";
import imgBtnRegister from "../../../images/User/mail.svg";
import {UseModalResetPassword} from "../../../hooks/Auth/UseModalResetPassword";
import ModalResetPassword from "../../ModalsWindows/ResetPassword/ModalRestPassword";



const EmailAndPassword = ({setUserEnter, ErrorEnter}) => {

  const validEmailAndPassword = yup.object().shape({
    password: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    email: yup.string().email('Введите верный email').required('Обязательно')
  })
  const getNewPassword = UseModalResetPassword();
  const buttonRegister = 'Войти';
  const resetPassword = useRef();


  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.formRegister}>
          <h2 className={s.title}>Войти</h2>
          <p className={s.titleInfo}>Если вы ранее зарегистрировались, вы можите тут авторизоваться</p>

          <Formik
            initialValues={{
              password: '',
              email: ''
            }}
            validateOnBlur
            onSubmit={(values) => {
              setUserEnter(values)
            }}
            validationSchema={validEmailAndPassword}
          >
            {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit}) => (
              <div>
                <p className={s.inputForm}>
                  <label className={s.inputTitle}>Пароль</label>
                  <input
                    className={'input'}
                    type={'password'}
                    name={'password'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                </p>
                {touched.password && errors.password && <p className={'error'}>{errors.password}</p>}

                <p className={s.inputForm}>
                  <label className={s.inputTitle}>Email</label>
                  <input
                    className={'input'}
                    type={'email'}
                    name={'email'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </p>
                {touched.email && errors.email && <p className={'error'}>{errors.email}</p>}
                {ErrorEnter && <p className={s.ErrorEnter}>Неверный логин или пароль</p>}
                <ButtonEnter isValid={isValid} handleSubmit={handleSubmit} mail={imgBtnRegister} name={buttonRegister} />
              </div>
            )}
          </Formik>
          <button ref={resetPassword} onClick={() => getNewPassword.setHookModalResetPassword(resetPassword)} className={s.resetPassword}>Забыли пароль?</button>
        </div>
      </div>
      {getNewPassword.hookModalResetPassword && <ModalResetPassword setHookModalResetPassword={getNewPassword.setHookModalResetPassword}/>}
    </div>
  )
}

export default EmailAndPassword;