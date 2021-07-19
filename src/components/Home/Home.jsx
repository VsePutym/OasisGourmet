import s from './Home.module.css';
import HomeSlider from "./HomeSlider";
import BackGround from '../../images/Home/8.jpg'
import styled from 'styled-components';


const clientHeight =  document.documentElement.clientHeight;
const MaineBG = styled.div`
  //background-image: url("${BackGround}");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-position: center;
  height: ${clientHeight}px ;
  overflow: hidden;
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