import {useEffect, useState} from "react";

const UseMenuBar = (ref, item, title) => {

  const [hookMenuBar, setMenuBar] = useState(false);

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
      if(countPlus > 0){
        cancelAnimationFrame(menuIntervalPlus);
      }
    };

    const showMenuMinus = function() {
      menuIntervalMinus = requestAnimationFrame(showMenuMinus);
      countMinus--;
      itemValue.style.transform = `translateY(${countMinus * 3}%)`;
      changeTitle.style.color = '#ffff';
      if(countMinus < -25){
        cancelAnimationFrame(menuIntervalMinus);
      }
    };

    const on = () => {
      setMenuBar(true);
      menuIntervalPlus = requestAnimationFrame(showMenuPlus);
    };
    const off = () => {
      setMenuBar(false);
      menuIntervalMinus = requestAnimationFrame(showMenuMinus);
    };

    const node = ref.current;
    node.addEventListener('mouseenter', on);
    node.addEventListener('mouseleave', off);

    return function (){
      node.removeEventListener('mouseenter', on);
      node.removeEventListener('mouseleave', off);
    }

  }, [hookMenuBar, setMenuBar, ref, item, title])
  return hookMenuBar;
}

export default UseMenuBar;