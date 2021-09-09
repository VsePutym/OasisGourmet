import s from './Preloader.module.css';
import styled from 'styled-components';

const ItemPreloader = styled.div`
  background-color: #282936;
  height: 100vh;
`

const Preloader = () => {

 const height =  document.documentElement.clientHeight

  return (
    <ItemPreloader height={height}>
    <div className={s.banterLoader}>
      <div className={s.banterLoaderBox}></div>
      <div className={s.banterLoaderBox}></div>
      <div className={s.banterLoaderBox}></div>
      <div className={s.banterLoaderBox}></div>
      <div className={s.banterLoaderBox}></div>
      <div className={s.banterLoaderBox}></div>
      <div className={s.banterLoaderBox}></div>
      <div className={s.banterLoaderBox}></div>
      <div className={s.banterLoaderBox}></div>
    </div>
    </ItemPreloader>
  )
}

export default Preloader;