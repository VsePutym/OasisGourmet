import s from './DryAged.module.scss';
import Dry from "../../images/aboutUs/bg-history.png";
import left from "../../images/aboutUs/right.svg";
import right from "../../images/aboutUs/left.svg";
import UseLine from "../../hooks/AboutUs/UseLine";
import {useRef} from "react";
import styled, { keyframes } from 'styled-components';
import { bounceInLeft, bounceInRight } from 'react-animations';
import React from "react";

const animateZoom = keyframes`${bounceInLeft}`;

const Zoom = styled.div`
  animation: 3s ${animateZoom};
`;
const bounceRight = keyframes`${bounceInRight}`;

const Right = styled.div`
  animation: 3s ${bounceRight};
`;

const DryAged = () => {

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
        <Right ><h2>Dry Aged</h2></Right>
        <Zoom className={s.imgDry}><img src={Dry} alt=""/></Zoom>
        <img className={s.btnSlidePrev} onClick={() => moveLine.setHooLinePrev(true)} src={left} alt=""/>
        <img className={s.btnSlideNext} onClick={() => moveLine.setHooLineNext(true)} src={right} alt=""/>
      </div>
    </div>
  )
}

export default DryAged;