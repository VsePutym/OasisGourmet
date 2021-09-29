import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";

const UserChange = (authentication, fireStore) => {
  const history = useHistory()
  const [hookChangeUser, setHookChangeUser] = useState(null);

  useEffect(() => {
    if (authentication !== null) {
      fireStore.collection("Users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const password = doc.data().password;
            const UserUID = doc.data().UserUID;
            const email = doc.data().email;

            fireStore.collection('Users').doc(authentication.uid).set({
              name: hookChangeUser.name,
              surname: hookChangeUser.surname,
              phone: hookChangeUser.phone,
              address: hookChangeUser.address,
              password: password,
              UserUID: UserUID,
              email: email,
            }).catch(error =>{
              console.log(error)
            })

          history.go(0);
        });
      })
    }
  }, [hookChangeUser])


  return {hookChangeUser, setHookChangeUser};
}

export default UserChange;