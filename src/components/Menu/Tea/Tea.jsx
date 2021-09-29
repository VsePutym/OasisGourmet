import s from './Tea.module.scss';
import TeaBG from '../../../images/MaineMenu/maineTeaBG.jpg'
import styled, {keyframes} from "styled-components";
import {zoomIn} from "react-animations";
import TeaDB from "../../../DataBase/Bar/TeaDB";
import WhiteAndGrenTea from '../../../images/Bar/TeaMap/Green.jpg'
import Ulun from '../../../images/Bar/TeaMap/Ulun.jpg'
import Red from '../../../images/Bar/TeaMap/Red.jpg'
import TeaCostom from '../../../images/Bar/TeaMap/TeaCostom.jpg'
import grass from '../../../images/Bar/TeaMap/grass.jpg'
import Coctels from '../../../images/Bar/TeaMap/Coctels.jpg'
import {Context} from "../../../Functions/Context";
import {useContext} from "react";


const animateZoom = keyframes`${zoomIn}`;

const Zoom = styled.div`
  animation: 4s ${animateZoom};
  position: absolute;
  top: 25%;
  left: 0;
  right: 0;
`;

const teaDB = TeaDB;

const Tea = () => {
  const {getHookOpenItem: {setHookOpenItem}} = useContext(Context);
  return (
    <div className={s.container}>
      <div className={s.BG} style={{backgroundImage: `url(${TeaBG})`}}>
        <Zoom><h1>Tea list</h1></Zoom>
      </div>
      <h2 className={s.title}>Чай, который вдохновляет</h2>
      <div className={s.descriptions}>Чайный лист подобен человеку — уникален и неповторим.
        Чтобы он сумел полностью раскрыться, к нему нужен
        особый подход.
        Заваривание чая – искусство, где важны все детали
        и нюансы, которые определяют вкус и аромат напитка.
        Все наши напитки создаются из натуральных ингредиентов
        на основе талой ледниковой воды.
        Мы всегда будем рады помочь вам подобрать сорт чая,
        учитывая ваш вкус, настроение, дальнейшие планы
        и погоду за окном.</div>
      <div className={s.items}>

        <div className={s.item}>
          <img src={WhiteAndGrenTea} alt=""/>
          <div>
            <h2>Зелёный и белыи чаи</h2>
            <p>Подходят для дневного чаепития,
              бодрят. Имеют уникальный набор
              минеральных веществ, аминокислот
              и витаминов, содержащихся
              в свежих листьях</p>
            {teaDB.GreanWhite.map(item =>
            <div onClick={() => setHookOpenItem(item)} className={s.product}>{item.name} <span className={s.btnTea}>Подробнее</span></div>
          )}
          </div>
        </div>

        <div className={s.item}>
          <img src={Ulun} alt=""/>
          <div>
            <h2>Улуны</h2>
            <p>Тайваньские улуны, представленные в нашей карте, обладают более выраженным ароматом
              зелёных чаёв с присущей им свежестью и имеют характерный цветочно-медовый вкус</p>
            {teaDB.Uluns.map(item =>
              <div onClick={() => setHookOpenItem(item)} className={s.product}>{item.name} <span className={s.btnTea}>Подробнее</span></div>
            )}
          </div>
        </div>

        <div className={s.item}>
          <img src={Red} alt=""/>
          <div>
            <h2>Красные и чёрные</h2>
            <p>расные и чёрные сорта китайского чая отлично подходят для завершения трапезы.
              Прекрасный выбор для продолжения застольных бесед и приятного времяпрепровождения</p>
            {teaDB.RedAndBlack.map(item =>
              <div onClick={() => setHookOpenItem(item)} className={s.product}>{item.name} <span className={s.btnTea}>Подробнее</span></div>
            )}
          </div>
        </div>

        <div className={s.item}>
          <img src={grass} alt=""/>
          <div>
            <h2>Травяные чаи</h2>
            <p>Напитки, в основе которых листья, цветы или кора других растений</p>
            {teaDB.HerbalTea.map(item =>
              <div onClick={() => setHookOpenItem(item)} className={s.product}>{item.name} <span className={s.btnTea}>Подробнее</span></div>
            )}
          </div>
        </div>

        <div className={s.item}>
          <img src={Coctels} alt=""/>
          <div>
            <h2>Чайные коктейли</h2>
            <p>Все напитки готовятся из высокосортных чаев с добавлением натуральных ингредиентов на основе талой артезианской воды.
              На ваш выбор коктейли могут быть приготовлены как с сахаром, так и без него.</p>
            {teaDB.TeaCocktails.map(item =>
              <div onClick={() => setHookOpenItem(item)} className={s.product}>{item.name} <span className={s.btnTea}>Подробнее</span></div>
            )}
          </div>
        </div>

        <div className={s.item}>
          <img src={TeaCostom} alt=""/>
          <div>
            <h2>Чай с добавками</h2>
            <p>Натуральные добавки тонко оттеняют естественный вкус и аромат чая. В основе их изготовления
              лежит способность чайного листа удерживать вторичные запахи</p>
            {teaDB.TeaAdditives.map(item =>
              <div onClick={() => setHookOpenItem(item)} className={s.product}>{item.name} <span className={s.btnTea}>Подробнее</span></div>
            )}
          </div>
        </div>

      </div>

    </div>
  )
}

export default Tea;