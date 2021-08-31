import {useEffect, useState} from "react";

const UseAuth = (authFirebase) => {
  const [authentication, setAuthentication] = useState(null)

  const auth = authFirebase()
  const logOut = () => auth.signOut()
    .then()
    .catch(error => console.error())

  useEffect(() => {
    auth.onAuthStateChanged(user => {
        if(user){
          setAuthentication(user);
        } else {
          setAuthentication(null)
        }
    })
  }, [authentication, auth]);

  return {authentication, logOut}
}

export default UseAuth;