import {useEffect, useState} from "react";

const UseMenuKitchen = (ref, item, title) => {
  const [hookMenu, setMenu] = useState(false);

  useEffect(() => {
    const itemValue = item.current;
    const changeTitle = title.current;

    let countPlus = -20;
    let countMinus = 0;
    let menuIntervalPlus;
    let menuIntervalMinus;

    const showMenuPlus = function() {
      menuIntervalPlus = requestAnimationFrame(showMenuPlus);
      countPlus++;
      itemValue.style.transform = `translateY(${countPlus * 3}%)`;
      changeTitle.style.color = '#d97c67';
      if(countPlus > -3){
        cancelAnimationFrame(menuIntervalPlus);
      }
    };

    const showMenuMinus = function() {
      menuIntervalMinus = requestAnimationFrame(showMenuMinus);
      countMinus--;
      itemValue.style.transform = `translateY(${countMinus * 3}%)`;
      changeTitle.style.color = '#ffff';
      if(countMinus < -30){
        cancelAnimationFrame(menuIntervalMinus);
      }
    };

    const on = () => {
      setMenu(true);
      menuIntervalPlus = requestAnimationFrame(showMenuPlus);
    };
    const off = () => {
      setMenu(false);
      menuIntervalMinus = requestAnimationFrame(showMenuMinus);
    };

    const node = ref.current;
    node.addEventListener('mouseenter', on);
    node.addEventListener('mouseleave', off);

    return function (){
      node.removeEventListener('mouseenter', on);
      node.removeEventListener('mouseleave', off);
    }

  }, [hookMenu, setMenu, ref, item, title])
  return hookMenu;
}

export default UseMenuKitchen;