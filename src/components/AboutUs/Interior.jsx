import s from './Interior.module.scss'
import {useRef} from "react";
import UseSlider from '../../hooks/AboutUs/UseSlider';
import slide1 from '../../images/aboutUs/1.jpg'
import slide2 from '../../images/aboutUs/2.jpg'
import slide3 from '../../images/aboutUs/3.webp'
import right from '../../images/aboutUs/left.svg'
import left from '../../images/aboutUs/right.svg'



const Interior = () => {

  const startSlide = useRef();
  const moveSlide = UseSlider(startSlide);
  // const name = 'Вперёд'

  return (
    <div className={s.sliderInterior}>
      <h2>Интерьер</h2>
      <div className={s.maineSlider}>
        <div className={s.slides} ref={startSlide}>
          <img src={slide1} alt=""/>
          <img src={slide2} alt=""/>
          <img src={slide3} alt=""/>
        </div>
        {/*<ButtonEnter/>*/}
        <img src={left} className={s.arrowNext} onClick={() => moveSlide.setHookNext(true)} alt=""/>
        <img src={right} className={s.arrowPrev} onClick={() => moveSlide.setHookPrev(true)} alt=""/>
      </div>
    </div>
  )
}

export default Interior;