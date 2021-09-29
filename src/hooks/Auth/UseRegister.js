import {useEffect, useState} from "react";
import firebase from "firebase";

const UseRegister = (firestore) => {

  const [hookRegister, setHookRegister] = useState(null);

   useEffect(() => {

     if(hookRegister !== null){
       const promise = new Promise(function (resolve, reject) {
         hookRegister.email = hookRegister.email.toLowerCase();
         const RegisterUser = firebase.auth().createUserWithEmailAndPassword(hookRegister.email, hookRegister.password)
            resolve(RegisterUser)
       }).then((RegisterUser) => {
         let userUID;
         if(RegisterUser){
           userUID = RegisterUser.user.uid
         }

         firestore.collection('Users').doc(userUID).set({
           email: hookRegister.email,
           name: hookRegister.name,
           surname: hookRegister.surname,
           password: hookRegister.password,
           phone: hookRegister.phone,
           address: hookRegister.address,
           UserUID: userUID
         });
       }).catch(error => {
         alert(error);
       })
     }

   },[hookRegister])
  return {setHookRegister, hookRegister}
}

export default UseRegister;