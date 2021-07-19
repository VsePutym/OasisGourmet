import User from '../../images/NavBar/user.svg';
import Home from '../../images/NavBar/home.svg';
import Cart from '../../images/NavBar/cart.svg';
import aboutUs from '../../images/NavBar/aboutUs.svg';
import Phone from '../../images/NavBar/phone.svg';
// import Enter from '../../images/NavBar/enter.svg';
import Exit from '../../images/NavBar/exit.svg';
import Menu from '../../images/NavBar/menu.svg';
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
        <div className={s.item}>
          <div className={s.menuItem}>
            <img src={Cart} alt=""/>
            <div className={s.menuText}>
              cart
            </div>
          </div>
        </div>
        <div className={s.item}>
          <div className={s.menuItem}>
            <img src={aboutUs} alt=""/>
            <div className={s.menuText}>
              aboutUs
            </div>
          </div>
        </div>
        <div className={s.item}>
          <div className={s.menuItem}>
            <img src={Phone} alt=""/>
            <div className={s.menuText}>
              Phone
            </div>
          </div>
        </div>
        <div className={s.item}>
          <div className={s.menuItem}>
            <img src={Menu} alt=""/>
            <div className={s.menuText}>
              Menu
            </div>
          </div>
        </div>
        <div className={s.item}>
          <div className={s.menuItem}>
            <img src={Exit} alt=""/>
            <div className={s.menuText}>
              Exit
            </div>
          </div>
        </div>

      </div>
  )
}

export default NavBar;