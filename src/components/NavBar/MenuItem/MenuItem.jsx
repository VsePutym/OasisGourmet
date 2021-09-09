import {NavLink} from 'react-router-dom';
import s from './MenuItem.module.css';

const MenuItem = (props) => {
  return(
    <div>
        <NavLink to={props.hrefs} activeClassName={s.active} className={s.menuItem}>
          <img src={props.img} alt=""/>
          <p className={s.menuText}>{props.name}</p>
        </NavLink>

    </div>
  )
}

export default MenuItem;