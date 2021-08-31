import styled from "styled-components";
import kitchen from "../../images/MaineMenu/kitchen.png";


const Kitchen = styled.div`
  background-image: url("${kitchen}");
  background-repeat: no-repeat;
  background-size: cover;
  width: 50%;
  background-position: center;
  height: 100vh;
  overflow: hidden;
  border-right: 2px solid  #d97c67;
  &:after {
    width: 50%;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: black;
    opacity: 0;
    z-index: 1;
    transition: all 2s;
  }
  &:hover {
    border-right: 2px solid #282936;
    &:after {
      opacity: 70%;
    }
  }`

export default Kitchen;