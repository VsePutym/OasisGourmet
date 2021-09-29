import {useState} from "react";

export const UseOpenItemBar = () => {
  const [hookOpenItemBar, setHookOpenItemBar] = useState(false);

  return{hookOpenItemBar, setHookOpenItemBar}
}