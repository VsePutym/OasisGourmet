import styled from "styled-components";
import bar from "../../images/MaineMenu/bar.jpg";



const Bar = styled.div`
  background-image: url("${bar}");
  background-repeat: no-repeat;
  background-size: cover;
  width: 50%;
  max-width: 100%;
  background-position: center;
  height: 100vh;
  overflow: hidden;
  border-left: 2px solid #d97c67;
  &:after {
    width: 50%;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    opacity: 0;
    z-index: 0;
    transition: all 2s;
  }
  &:hover {
    border-left: 2px solid #282936;
    &:after {
      opacity: 70%;
    }
  }`

export default Bar;