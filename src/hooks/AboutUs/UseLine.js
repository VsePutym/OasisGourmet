 import {useEffect, useState} from "react";

const UseLine = (startLine) => {
  const [hookLinePrev, setHooLinePrev] = useState(null);
  const [hookLineNext, setHooLineNext] = useState(null);

  let initialCount;
  const screenWidth = window.screen.width
  if(screenWidth < 500){
    initialCount = -700
  }else if(screenWidth > 500){
    initialCount = -500
  }
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    if (hookLineNext === true) {
      setCount(count - 200);
      setHooLineNext(false)
    }
    if (hookLinePrev === true) {
      setCount(count + 200);
      setHooLinePrev(false)
    }
        if(count > 0){
          setCount(-100)
    } else if( count < initialCount){
      setCount(initialCount)
    }
    startLine.current.style.marginRight = `${count}px`;
  }, [hookLinePrev, hookLineNext, setCount, count]);

  return {hookLinePrev, setHooLinePrev, hookLineNext, setHooLineNext}
}

export default UseLine;