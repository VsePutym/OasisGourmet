import React, {useContext} from 'react';
import Authorization from "./Authorization/Authorization";
import AuthSuccess from "./AuthSuccess";
import {Context} from "../../Functions/Context";
import styled, {keyframes} from "styled-components";
import {slideInDown} from "react-animations";

const animationBounceInDown = keyframes`${slideInDown}`;
const BounceInDown = styled.div`
  animation: 1s ${animationBounceInDown};
`;

const User = React.memo(() => {
  const {
    getAuth: {authentication, logOut},
    getRegister: {setHookRegister},
    UsersDb: {hookDb},
    getAuthEmailAndPassword: {setUserEnter, ErrorEnter}
  } = useContext(Context);

  return (
    <BounceInDown>
      {authentication && hookDb
        ? <AuthSuccess hookDb={hookDb} logOut={logOut}/>
        : <Authorization ErrorEnter={ErrorEnter} setHookRegister={setHookRegister} setUserEnter={setUserEnter}/>
      }
    </BounceInDown>
  )
});

export default User;