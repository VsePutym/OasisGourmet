import s from './HomeSlider.module.css'
import slidePlate1 from '../../images/Home/slidePlate1.png';
import slidePlate2 from '../../images/Home/slidePlate2.png';
import slidePlate3 from '../../images/Home/slidePlate3.png';
import slidePlate4 from '../../images/Home/slidePlate4.png';
import React from "react";


const HomeSlider = () => {

  return (
    <div  className={s.maine}>
      <div className={s.wrapper}>
          <div className={s.centerSpinner}>
            <div className={s.slide1}><img  src={slidePlate1} alt=""/></div>
            <div className={s.slide2}><img  src={slidePlate2} alt=""/></div>
            <div className={s.slide3}><img  src={slidePlate3} alt=""/></div>
            <div className={s.slide4}><img  src={slidePlate4} alt=""/></div>
          </div>
      </div>
    </div>
  )
}

export default HomeSlider;