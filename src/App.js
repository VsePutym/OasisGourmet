import './App.scss';
import Wine from './components/Menu/Wine/Wine';
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Menu from './components/Menu/Menu';
import firebase from "firebase/app";
import 'firebase/auth';        // for authentication
import 'firebase/database';
import "firebase/firestore";
import {Route, Switch } from "react-router-dom";
import User from "./components/User/User";
import Cart from "./components/Cart/Cart";
import AboutUs from "./components/AboutUs/AboutUs";
import HotDish from "./components/Menu/HotDish/HotDish";
import ModalPhone from "./components/ModalsWindows/Phone/ModalPhone";
import {UseModalPhone} from "./hooks/NavBar/UseModalPhone";
import {UseOpenItem} from "./hooks/Menu/UseOpenItem";
import ModalFood from "./components/ModalsWindows/ModalFood/ModalFood";
import UseOrders from "./hooks/Orders/UseOrders";
import UseAuth from "./hooks/Auth/UseAuth";
import UseRegister from "./hooks/Auth/UseRegister";
import UseUsersDB from "./hooks/UsersDB/UseUsersDB";
import UserEnterEmailAndPassword from "./hooks/Auth/UserEnterEmailAndPassword";
import {Context} from './Functions/Context';
import ColdDish from "./components/Menu/ColdDish/ColdDish";
import Snacks from "./components/Menu/Snacks/Snacks";
import Desserts from "./components/Menu/Desserts/Desserts";
import Pizza from "./components/Menu/Pizza/Pizza";
import Panasia from "./components/Menu/Panasia/Panasia";
import Invents from "./components/Home/Invents/Invents";
import UserChange from "./hooks/Auth/UserChange";
import {UseOpenItemBar} from "./hooks/Menu/UseOpenItemBar";
import ModalBar from "./components/ModalsWindows/ModalBar/ModalBar";
import Cocktail from "./components/Menu/Cocktail/Cocktail";
import Tea from "./components/Menu/Tea/Tea";
import StrongAlcohol from "./components/Menu/StrongAlcohol/StrongAlcohol";
import Bear from "./components/Menu/Bear/Bear";
import SoftDrinks from "./components/Menu/SoftDrinks/SoftDrinks";
import Breakfast from "./components/Menu/Breakfast/Breakfast";
import Soups from "./components/Menu/Soups/Soups";



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

  const getHookModalPhone = UseModalPhone();
  const getHookOpenItem = UseOpenItem();
  const getHookOpenItemBar = UseOpenItemBar();
  const getOrders = UseOrders();
  const database = firebase.database();
  const fireStore = firebase.firestore();
  const getAuth = UseAuth(firebase.auth)
  const UsersDb = UseUsersDB(getAuth.authentication, fireStore);
  const getRegister = UseRegister(fireStore ,getAuth.authentication);
  const getAuthEmailAndPassword = UserEnterEmailAndPassword(firebase.auth);
  const getUserChange = UserChange(getAuth.authentication, fireStore)




  return (
    <Context.Provider value={{getHookOpenItemBar, getUserChange, getHookOpenItem, database, getOrders, getAuth, getRegister, UsersDb, getAuthEmailAndPassword}}>
    <div className="App">
      <Switch>
        <Route  path='/home' render={() => <Home />}/>
        <Route exact path='/menu'  render={() => <Menu />}/>
        <Route  path='/menu/hot' render={() => <HotDish />} />
        <Route  path='/menu/cold' render={() => <ColdDish />} />
        <Route  path='/menu/breakfast' render={() => <Breakfast />} />
        <Route  path='/menu/soup' render={() => <Soups />} />
        <Route  path='/menu/snacks' render={() => <Snacks />} />
        <Route  path='/menu/desserts' render={() => <Desserts />} />
        <Route  path='/menu/pizza' render={() => <Pizza />} />
        <Route  path='/menu/panasia' render={() => <Panasia />} />
        <Route  path='/menu/wine' render={() => <Wine />}/>
        <Route  path='/menu/cocktail' render={() => <Cocktail />}/>
        <Route  path='/menu/tea' render={() => <Tea />}/>
        <Route  path='/menu/noAlcohol' render={() => <SoftDrinks />}/>
        <Route  path='/menu/strongAlcohol' render={() => <StrongAlcohol />}/>
        <Route  path='/menu/lightAlcohol' render={() => <Bear />}/>
        <Route  exact path='/user'  render={() => <User />}/>
        <Route  path='/cart'  render={() => <Cart />}/>
        <Route  path='/aboutUs'  render={() => <AboutUs />}/>
        <Route  path='/Invents'  render={() => <Invents />}/>
        <Route render={() => <Home />}/>
      </Switch>
      <NavBar {...getHookModalPhone}/>
      {getHookModalPhone.hookModalPhone && <ModalPhone {...getHookModalPhone} />}
      {getHookOpenItem.hookOpenItem && <ModalFood {...getHookOpenItem} {...getOrders} />}
      {getHookOpenItemBar.hookOpenItemBar && <ModalBar {...getHookOpenItemBar} />}
    </div>
    </Context.Provider>
  );
}

export default App;
