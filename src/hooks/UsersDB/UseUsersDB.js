import {useEffect, useState} from "react";

const UseUsersDB = (authentication, fireStore) => {
  const [hookDb, setHookDb] = useState(null);
  useEffect(() => {
    if(authentication !== null){
      fireStore.collection("Users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if(authentication.email === doc.data().email && authentication.uid === doc.data().UserUID){
            const userInfo = doc.data();
            setHookDb(() => userInfo)
          }
        });
      })
    }
  },[authentication])

  return {hookDb};
}
export default UseUsersDB;