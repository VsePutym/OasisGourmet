import React, {useState} from "react";
import backgroundUser from './../../images/User/UserBG.webp'
import s from './AuthSuccess.module.scss'
import styled from "styled-components";
import Oasis from '../../images/Home/noroot.png';
import ChangeUser from "./ChangeUser/ChangeUser";

const MaineBG = styled.div`
  background-image: url("${backgroundUser}");
  background-position: center;
  background-size: cover;
  height: 100vh;
  background-repeat: no-repeat;
  width: 100%;
`

const AuthSuccess = ({hookDb, logOut}) => {

  const [hookChangeUser, setHookChangeUser] = useState(false)

  return (
    <div>
      {hookChangeUser
        ? <ChangeUser setHookChangeUser={setHookChangeUser} />
        : <div className={s.container}>
          <div className={s.UserInfo}>
            <div className={s.title}><p>Данные пользователя</p></div>
            <div className={s.bg}>
              <div className={s.user}>Имя: <span>{hookDb.name}</span></div>
              <div className={s.user}>Фамилия: <span>{hookDb.surname}</span></div>
              <div className={s.user}>Адресс: <span>{hookDb.address}</span></div>
              <div className={s.user}>Телефон: <span>{hookDb.phone}</span></div>
              <div className={s.logOutAndChange}>
                <button className={s.btnLogOut} onClick={logOut} title='выйт'>Разлогинеться</button>
                <button  onClick={() => setHookChangeUser(true)}>Изменить</button>
              </div>
            </div>
          </div>
          <img src={Oasis} alt=""/>
          <MaineBG/>
        </div>}
    </div>


  )
}

export default AuthSuccess;