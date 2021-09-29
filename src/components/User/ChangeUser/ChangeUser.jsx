import s from '../Registration/Registration.module.scss';
import {Formik} from "formik";
import React, {useContext} from "react";
import * as yup from "yup";
import ButtonForm from "../../Buttons/ButtonForm";
import imgBtnRegister from '../../../images/User/mail.svg';
import {Context} from "../../../Functions/Context";

const ChangeUser = () => {
  const {getUserChange: {setHookChangeUser}} = useContext(Context);

  const phoneValid = /8[-(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/gm;

  const fullRegistration = yup.object().shape({
    name: yup.string().typeError('Должно быть числом').required('Обязательное поле'),
    surname: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
    address: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
    phone: yup.string().matches(phoneValid, 'Введите верный формат телефона:  89633265671 или \n' +
      '8(962)326-56-71 или \n' +
      '8-962-326-56-71 или \n' +
      '8(962)3265671').required('Обязательное поле')
  })

  const buttonRegister = 'Редактировать';

  return (
    <div className={s.wrapperChangeUser}>
      <div className={s.container}>
        <div className={s.formRegister}>
          <h2 className={s.title}>Редактировать учётную запись пользователя</h2>
          <p className={s.titleInfo}>Пожалуйста, заполните следующие поля соответствующей информацией, чтобы
            редактировать существующую учетную запись в Italy & co</p>
          <Formik
            initialValues={{
              name: '',
              surname: '',
              phone: '',
              address: ''
            }}
            validateOnBlur
            onSubmit={(values) => {
              setHookChangeUser(values)
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
                    name={'surname'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.surname}
                  />
                </p>{touched.surname && errors.surname && <p className={s.error}>{errors.surname}</p>}

                <p className={s.inputForm}>
                  <label className={s.inputTitle}>Номер телефона</label>
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
                  <label className={s.inputTitle}>Адресс доставки</label>
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

export default ChangeUser;