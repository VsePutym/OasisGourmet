import s from './DryAged.module.scss';
import Dry from "../../images/aboutUs/bg-history.png";
import left from "../../images/aboutUs/right.svg";
import right from "../../images/aboutUs/left.svg";
import UseLine from "../../hooks/AboutUs/UseLine";
import {useRef} from "react";
import React from "react";

const SlideInfo = (props) => {

  const LineRef = useRef();
  const btnSlidePrev = useRef();
  const btnSlideNext = useRef();
  const moveLine = UseLine(LineRef, btnSlidePrev, btnSlideNext);

  return(
    <div className={s.maineDry}>
      <div className={s.maineLine}>
        <div ref={LineRef} className={s.line}>
          <div className={s.circle}><p>Во время Dry Aged выдержки из мяса уходит большая часть влаги и оно “высыхает” — отсюда и название процесса.</p></div>
          <div className={s.circle2}> <p>В камере мраморная говядина держится от 7 до 120 дней. Самой распространенной
            и востребованной является выдержка 30 дней. К этому моменту мясо теряет примерно 15 % от общего веса и становится уже достаточно ароматным и нежным.</p></div>
          <div className={s.circle3}> <p>Традиционные ореховые нотки во вкусе говядины сухой выдержки начинают проявляться примерно
            через 14 дней и далее постепенно усиливаются. Чем дольше выдержка, тем интенсивнее и сложнее становятся ароматы.</p></div>
          <div className={s.circle4}> <p>В России на сегодняшний день такое мясо можно приобрести в мясных ресторанах для
            гурманов. В нашем ресторане вы можете попробувать стейк Dry Age</p></div>
        </div>

        <div className={s.gradientDry} />
        <div ><h2>Dry Aged</h2></div>
        <div className={s.imgDry}><img src={Dry} alt=""/></div>
        <div className={s.btnsSlide}>
          <img className={s.btnSlideNext} onClick={() => moveLine.setHooLineNext(true)} src={right} alt=""/>
          <img className={s.btnSlidePrev} onClick={() => moveLine.setHooLinePrev(true)} src={left} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default SlideInfo;