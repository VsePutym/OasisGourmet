import {useState} from "react";

export const UseCommit = () => {
  const [hookcommit, setHookCommit] = useState('');

  const onChange = e => {
    setHookCommit(e.target.value)
  }

  return {onChange, hookcommit};
}