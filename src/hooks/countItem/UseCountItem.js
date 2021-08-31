import {useState} from "react";

export const UseCountItem = (initialState) => {
  const [hookCountItem, setHookCountItem] = useState(initialState || 1);
  const onChange = (e) => setHookCountItem(e.target.value);
  return {hookCountItem, setHookCountItem, onChange}
}
