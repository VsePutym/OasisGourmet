import s from "./Registration.module.scss";
import {Formik} from "formik";
import React from "react";
import * as yup from "yup";
import ButtonForm from "../../Buttons/ButtonForm";
import imgBtnRegister from '../../../images/User/mail.svg';

const Registration = ({setHookRegister}) => {

const phoneValid = /8[-(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/gm;
  const fullRegistration = yup.object().shape({
    name: yup.string().typeError('Должно быть числом').required('Обязательное поле'),
    secondName: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
    password: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
    address: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Обязательное поле'),
    email: yup.string().email('Введите верный email, пример: italy@mail.ru').required('Обязательное поле'),
    phone: yup.string().matches(phoneValid, 'Введите верный формат телефона:  89633265671 или \n' +
      '8(962)326-56-71 или \n' +
      '8-962-326-56-71 или \n' +
      '8(962)3265671').required('Обязательное поле')
  })

  const buttonRegister = 'Зарегестрироваться';

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.formRegister}>
          <h2 className={s.title}>Создать учетную запись</h2>
          <p className={s.titleInfo}>Пожалуйста, заполните следующие поля соответствующей информацией, чтобы
            зарегистрировать новую учетную запись в Italy & co</p>
          <Formik
            initialValues={{
              name: '',
              secondName: '',
              password: '',
              confirmPassword: '',
              email: '',
              confirmEmail: '',
              phone: '',
              address: ''
            }}
            validateOnBlur
            onSubmit={(values) => {
              setHookRegister(values)
            }}
            validationSchema={fullRegistration}
          >
            {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit}) => (
              <div className={s.form}>
                <p className={s.inputForm}>
                  <label className={s.inputTitle}>Имя</label>
                  <input
                    className={'input'}
                    type={'text'}
                    name={'name'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                </p>
                {touched.name && errors.name && <p className={s.error}>{errors.name}</p>}
                <p className={s.inputForm}>
                  <label className={s.inputTitle}>Фамилия</label>
                  <input
                    className={'input'}
                    type={'text'}
                    name={'secondName'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.secondName}
                  />
                </p>{touched.secondName && errors.secondName && <p className={s.error}>{errors.secondName}</p>}
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
                {touched.password && errors.password && <p className={s.error}>{errors.password}</p>}
                <p className={s.inputForm}>
                  <label className={s.inputTitle}>Подтвердите пароль</label>
                  <input
                    className={'input'}
                    type={'password'}
                    name={'confirmPassword'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                  />
                </p>
                {touched.confirmPassword && errors.confirmPassword && <p className={s.error}>{errors.confirmPassword}</p>}
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
                {touched.email && errors.email && <p className={s.error}>{errors.email}</p>}
                <p className={s.inputForm}>
                  <label className={s.inputTitle}>Phone</label>
                  <input
                    className={'input'}
                    type={'tel'}
                    name={'phone'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                  />
                </p>
                {touched.phone && errors.phone && <p className={s.error}>{errors.phone}</p>}
                <p className={s.inputForm}>
                <label className={s.inputTitle}>Адресс</label>
                <input
                  className={'input'}
                  type={'text'}
                  name={'address'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                />
              </p>
            {touched.address && errors.address && <p className={s.error}>{errors.address}</p>}
                <ButtonForm isValid={isValid} handleSubmit={handleSubmit} mail={imgBtnRegister} name={buttonRegister}/>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default Registration;