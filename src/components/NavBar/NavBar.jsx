import User from '../../images/NavBar/user.svg'
import Home from '../../images/NavBar/home.svg'
import s from './NavBar.module.css';

const NavBar = () => {
  return (
      <div className={s.containerHeader}>
            <div className={s.item}>
              <div className={s.menuItem}>
                <img src={Home} alt=""/>
                <div className={s.menuText}>
                  Home
                </div>
              </div>
          </div>
     <div className={s.item}>
        <div className={s.menuItem}>
          <img src={User} alt=""/>
          <div className={s.menuText}>
            User
          </div>
        </div>
      </div>

      </div>
  )
}

export default NavBar;