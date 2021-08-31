import {useState} from "react";

export const UseModalResetPassword = (ref) => {
  const [hookModalResetPassword, setHookModalResetPassword] = useState(null);

  return {hookModalResetPassword, setHookModalResetPassword};
}
