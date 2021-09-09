import {useState} from "react";

const UsePreloader = () => {
  const [hookPreloader, setHookPreloader] = useState(false);

return {hookPreloader, setHookPreloader}
}

export default UsePreloader;