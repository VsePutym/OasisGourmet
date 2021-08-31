import s from './ModalResetPassword.module.scss';
import {Formik} from "formik";
import ButtonEnter from "../../Buttons/ButtonEnter";
import imgBtnRegister from "../../../images/User/mail.svg";
import React from "react";
import UseResetPassword from "../../../hooks/Auth/UseResetPassword";
import * as yup from "yup";



const ModalResetPassword = ({setHookModalResetPassword}) => {

  const validEmailAndPassword = yup.object().shape({
    email: yup.string().email('Введите верный email').required('Обязательно')
  })
  const getResetPassword = UseResetPassword(setHookModalResetPassword);
  const buttonResetPassword = 'Отправить';

  return (
    <div>
      <div className={s.overlay} onClick={() => setHookModalResetPassword(false)} />
        <div className={s.modalResetPassword}>
          <div className={s.title}>
            <h3>Востановление Пароля</h3>
          <p>для Востановления пароля, введи свой email</p></div>

          <Formik
            initialValues={{
              email: ''
            }}
            validateOnBlur
            onSubmit={(values) => {
              getResetPassword.setHookNewPassword(values)
            }}
            validationSchema={validEmailAndPassword}
          >
            {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit}) => (
              <div>
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
                <ButtonEnter isValid={isValid} handleSubmit={handleSubmit} mail={imgBtnRegister} name={buttonResetPassword} />
              </div>
            )}
          </Formik>
          <button onClick={() => setHookModalResetPassword(false)}>Close</button>
        </div>
    </div>
  )
}

export default ModalResetPassword;