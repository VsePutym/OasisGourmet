import s from "../Registration/Registration.module.scss";
import React from "react";
import EmailAndPassword from "./EmailAndPassword";
import Registration from "../Registration/Registration";


const Authorization = ({setUserEnter, setHookRegister, ErrorEnter}) => {
  return(
    <div className={s.wrapper}>
          <div>
            <Registration setHookRegister={setHookRegister} />
          </div>
            <div>
              <EmailAndPassword ErrorEnter={ErrorEnter} setUserEnter={setUserEnter} />
            </div>
    </div>
  )
}

export default Authorization;