import s from './Home.module.css';
import HomeSlider from "./HomeSlider";
import BackGround from '../../images/Home/2.jpg'
import styled from 'styled-components';


const clientHeight =  document.documentElement.clientHeight;
console.log(clientHeight)
const MaineBG = styled.div`
  background-image: url("${BackGround}");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-position: center;
  //height: ${clientHeight}px ;
  overflow: hidden;
  height: 700px;
`

const Home = () => {
  return (
    <MaineBG>
      <div className={s.Wrapper}>
        <HomeSlider />
      </div>
    </MaineBG>
  )
}

export default Home;