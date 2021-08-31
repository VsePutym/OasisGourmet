import s from './MenuItem/MenuItem.module.css'
import navBar from "../../DataBase/navBar";
import MenuItem from "./MenuItem/MenuItem";
import PhoneImg from '../../images/NavBar/phone.svg'
import {useRef} from "react";

const NavBar = ({setHookModalPhone}) => {

  const itemsBar =  navBar.items;
const modalPhoneRef = useRef();

  return (
      <div className={s.containerHeader}>
        {itemsBar.map(item =>
          <MenuItem key={item.id} name={item.name} img={item.img} hrefs={item.href}  />
        )}
        <div className={s.menuItem} ref={modalPhoneRef} onClick={() => setHookModalPhone(modalPhoneRef)}>
          <img src={PhoneImg} alt=""/>
        </div>
     </div>
  )
}

export default NavBar;