import {useState} from "react";

export const UseOpenItem = () => {
  const [hookOpenItem, setHookOpenItem] = useState(false);

  return{hookOpenItem, setHookOpenItem}
}