import {useEffect, useState} from "react";

const UserEnterEmailAndPassword = (authFirebase) => {

  const [hookUserEnter, setUserEnter] = useState(null);

  const auth = authFirebase()

  useEffect(() => {
    if(hookUserEnter !== null){
      auth.signInWithEmailAndPassword(hookUserEnter.email, hookUserEnter.password)
          .catch(error => console.log(error))
    }

  },[hookUserEnter])

  return {hookUserEnter, setUserEnter}
}

export default UserEnterEmailAndPassword;