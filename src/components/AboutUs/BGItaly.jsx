import styled from "styled-components";
import BackGround from "../../images/aboutUs/test2.jpeg";
const iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

let BGItalyStyle;

if(iOS === false){
  BGItalyStyle = styled.div`
  background-image: url("${BackGround}");
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
    right: 40%;
    top: 30%;
    margin: 0 auto;
    position: absolute;
    color: white;
    font-size: 70px;
  }
  @media(max-width: 500px){
    height: 60vh;
    ::before{
      height: 60vh;
    }
    h1{
      padding-left: 15px;
      font-size: 40px;
    }
  }
`
} else {
  BGItalyStyle = styled.div`
  background-image: url("${BackGround}");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-position: center;
  height: 40vh;
  overflow: hidden;
  color: white;
  background-attachment: scroll;
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
    right: 40%;
    top: 30%;
    margin: 0 auto;
    position: absolute;
    color: white;
    font-size: 70px;
  }
  @media(max-width: 500px){
    height: 60vh;
    ::before{
      height: 60vh;
    }
    h1{
      padding-left: 15px;
      font-size: 40px;
    }
  }
`
}

const BGItaly = () => {
  return (
    <BGItalyStyle>
      <h1>Italy & CO</h1>
    </BGItalyStyle>
  )
}

export default BGItaly;