import './App.css';
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import firebase from "firebase/app";
import 'firebase/auth';        // for authentication
import 'firebase/database';
import {Route} from "react-router-dom";



const firebaseConfig = {
  apiKey: "AIzaSyD_tPBXETGo3GR-51MQqns25Ku1IWNZRfg",
  authDomain: "oasis-gourment.firebaseapp.com",
  databaseURL: "https://oasis-gourment-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "oasis-gourment",
  storageBucket: "oasis-gourment.appspot.com",
  messagingSenderId: "758564933985",
  appId: "1:758564933985:web:b1616d7024346952e83520",
  measurementId: "G-WQWHWJ0S52"
};

firebase.initializeApp(firebaseConfig)

const App = () => {

  return (
    <div className="App">
      <Route path='/home' render={() => <Home />}/>
      {/*<Route path='/menu' render={() => <Menu />}/>*/}
      <NavBar />
    </div>
  );
}

export default App;
