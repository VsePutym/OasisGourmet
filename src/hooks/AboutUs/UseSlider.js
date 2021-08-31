import {useEffect, useState} from "react";

const UseSlider = (startSlide) => {
  const [hookNext, setHookNext] = useState(null);
  const [hookPrev, setHookPrev] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const arr = startSlide.current.childNodes;
    const getOpacity = () => {
      arr.forEach(item => {
        item.style.opacity = '0';
      })
    }
    getOpacity();
    if (hookNext === true) {
      setCount(count+1);
      getOpacity();
      setHookNext(false);
    }

    if (hookPrev === true) {
      setCount(count-1);
      getOpacity();
      setHookPrev(false);
    }
    if(count > 2){
      setCount(0);
      arr[count].style.opacity = '1'
    } else if(count < 0){
      setCount(2);
      arr[count].style.opacity = '1'
    }
    arr[count].style.opacity = '1'


  }, [hookPrev, hookNext]);

  return {hookPrev, setHookPrev, hookNext, setHookNext, count}
}

export default UseSlider;