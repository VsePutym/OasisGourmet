import {useState} from "react";

export const UseModalPhone = (ref) => {
  const [hookModalPhone, setHookModalPhone] = useState(null);

  return {hookModalPhone, setHookModalPhone};
}
