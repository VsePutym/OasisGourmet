import {useEffect, useState} from "react";

const UserEnterEmailAndPassword = (authFirebase) => {

  const [hookUserEnter, setUserEnter] = useState(null);
  const [ErrorEnter, setErrorEnter] = useState(null)

  const auth = authFirebase()

  useEffect(() => {
    if(hookUserEnter !== null){
      auth.signInWithEmailAndPassword(hookUserEnter.email, hookUserEnter.password)
          .catch(error => setErrorEnter(error))
    }

  },[hookUserEnter])

  return {hookUserEnter, setUserEnter, ErrorEnter}
}

export default UserEnterEmailAndPassword;