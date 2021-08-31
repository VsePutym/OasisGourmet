import {NavLink} from 'react-router-dom';
import s from './MenuItem.module.css';

const MenuItem = (props) => {
  return(
    <div>
        <NavLink to={props.hrefs} activeClassName={s.active} className={s.menuItem}>
          <img src={props.img} alt=""/>
        </NavLink>
    </div>
  )
}

export default MenuItem;