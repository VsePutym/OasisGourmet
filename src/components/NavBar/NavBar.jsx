import s from './NavBar.module.css';
import navBar from "../../DataBase/navBar";
import MenuItem from "./MenuItem/MenuItem";

const NavBar = () => {

  const itemsBar =  navBar.items;

  return (
      <div className={s.containerHeader}>
        {itemsBar.map(item =>
          <MenuItem key={item.id} name={item.name} img={item.img} hrefs={item.href}  />
        )}
     </div>
  )
}

export default NavBar;