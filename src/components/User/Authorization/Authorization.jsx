import s from "../Registration/Registration.module.scss";
import React from "react";
import EmailAndPassword from "./EmailAndPassword";
import Registration from "../Registration/Registration";


const Authorization = ({setUserEnter, setHookRegister}) => {
  return(
    <div className={s.wrapper}>
          <div>
            <Registration setHookRegister={setHookRegister} />
          </div>
            <div>
              <EmailAndPassword setUserEnter={setUserEnter} />
            </div>
    </div>
  )
}

export default Authorization;