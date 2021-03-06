import {useEffect, useState} from "react";

const UseSlider = (startSlide) => {
  const [hookNext, setHookNext] = useState(false);
  const [hookPrev, setHookPrev] = useState(false);
  const [count, setCount] = useState(1);

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
    if(count > 3){
      setCount(1);
    } else if(count < 1){
      setCount(3);
    }
    arr[count].style.opacity = '1'

  }, [hookPrev, hookNext, setCount, count]);

  return {hookPrev, setHookPrev, hookNext, setHookNext, count}
}

export default UseSlider;