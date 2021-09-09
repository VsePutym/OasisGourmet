import styled from "styled-components";
import BigGreenEgG from "../../images/aboutUs/biggreenegg2.jpg";

const BGAboutUs = styled.div`
  background-image: url("${BigGreenEgG}");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-position: center;
  height: 40vh;
  overflow: hidden;
  color: white;
  background-attachment: fixed;
  will-change: transform;
  ::before{
    content: "";
    width: 100%;
    height: 40vh;
    background-color: black;
    position: absolute;
    top: 0;
    opacity: 0.5;
  }
  h1{
    left: 5%;
    top: 30%;
    position: absolute;
    color: white;
    font-size: 70px;
  }
  p{
    width: 80%;
    left: 5%;
    bottom: 30px;
    position: absolute;
    color: white;
    font-size: 16px;
  }
`
export default BGAboutUs;