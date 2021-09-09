import s from './Menu.module.css';
import {Link} from 'react-router-dom';
import MenuDB from '../../DataBase/MenuDB'
import {useRef} from "react";
import UseMenuBar from "../../hooks/Menu/UseMenuBar";
import UseMenuKitchen from "../../hooks/Menu/UseMenuKitchen";
import Kitchen from "./Kitchen";
import Bar from "./Bar";
import styled, {keyframes} from "styled-components";
import {slideInDown} from "react-animations";

const animationBounceInDown = keyframes`${slideInDown}`;
const BounceInDown = styled.div`
  animation: 1s ${animationBounceInDown};
`;

const Menu = () => {

  const menuKitchen = MenuDB.menuKitchen;
  const menuBar = MenuDB.menuBar;

  const refKitchen = useRef();
  const refBar = useRef();
  const showMenuKitchen = useRef();
  const showMenuBar = useRef();
  const titleKitchen = useRef();
  const titleBar = useRef();


  UseMenuKitchen(refKitchen, showMenuKitchen, titleKitchen);
  UseMenuBar(refBar, showMenuBar, titleBar);


  return (
    <BounceInDown className={s.wrapper}>

    <Kitchen ref={refKitchen} >
        <div ref={showMenuKitchen} className={s.itemsK}>
          {menuKitchen.map(item =>
            <div key={item.id} className={s.items}>
              <Link to={item.href} className={s.item}>{item.name}</Link>
            </div>
          )}
          <h1 ref={titleKitchen} className={s.titleChildrenMenu}>Меню</h1>
        </div>
      </Kitchen>

      <Bar ref={refBar}>
        <div ref={showMenuBar} className={s.itemsB}>
          {menuBar.map(item =>
            <div key={item.id} className={s.items}>
              <Link to={item.href} className={s.item}>{item.name}</Link>
            </div>
          )}
          <h1 ref={titleBar} className={s.titleChildrenMenu}>Бар</h1>
        </div>
      </Bar>

    </BounceInDown>
  )
}

export default Menu