import {NavLink} from 'react-router-dom';
import s from './MenuItem.module.css';
import {useContext} from "react";
import {Context} from "../../../Functions/Context";

const MenuItem = (props) => {
  const {getOrders: {hookOrders, setHookOrders}} = useContext(Context)

  return(
    <div>
        <NavLink to={props.hrefs} activeClassName={s.active} className={s.menuItem}>
          <img src={props.img} alt=""/>
          <p className={s.menuText}>{props.name}</p>
        </NavLink>
      {hookOrders.length > 0 && <span className={s.countCart}>{hookOrders.length}</span>}
    </div>
  )
}

export default MenuItem;