import {useEffect, useState} from "react";
import firebase from "firebase/app";
import 'firebase/auth';

const UseResetPassword = (setHookModalResetPassword) => {
  const [hookNewPassword, setHookNewPassword] = useState(null);

  useEffect(() => {
  if(hookNewPassword !== null){
      firebase.auth().sendPasswordResetEmail(hookNewPassword.email)
        .then(() => {
          alert('на вашу почту пришло сообщение о смене пароля');
          setHookModalResetPassword(false)
        })
        .catch((error) => {
          console.log(error)
        });
    }

  }, [hookNewPassword])

  return {hookNewPassword, setHookNewPassword}
}

export default UseResetPassword