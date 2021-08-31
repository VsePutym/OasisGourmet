import React, {useContext} from 'react';
import Authorization from "./Authorization/Authorization";
import AuthSuccess from "./AuthSuccess";
import {Context} from "../../Functions/Context";

const User = React.memo(() => {
  const {
    getAuth: {authentication, logOut},
    getRegister: {setHookRegister},
    UsersDb: {hookDb},
    getAuthEmailAndPassword: {setUserEnter}
  } = useContext(Context);

  return (
    <div>
      {authentication && hookDb
        ? <AuthSuccess hookDb={hookDb} logOut={logOut}/>
        : <Authorization setHookRegister={setHookRegister} setUserEnter={setUserEnter}/>
      }
    </div>
  )
});

export default User;