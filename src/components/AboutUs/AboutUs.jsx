import s from './AboutUs.module.scss';
import sit from '../../images/aboutUs/sit.svg'
import sitDown from '../../images/aboutUs/sitDown.svg'
import Sheff from '../../images/aboutUs/Sheff.jpg'
import BarMan from '../../images/aboutUs/Barman.jpg'
import Solaia from '../../images/aboutUs/solaia.png'
import DryAged from "./DryAged";
import Interior from "./Interior";
import styled, {keyframes} from "styled-components";
import {bounceInRight, bounceInLeft} from "react-animations";
import BGItaly from "./BGItaly";
import BigGreenEgg from "./BigGreenEgg";
import Koravin from "./Koravin";
import logoOasis from '../../images/aboutUs/info/noroot.webp';
import logoRepino from '../../images/aboutUs/info/LogoRepino.png';
import visa from '../../images/aboutUs/info/visa.svg'
import jcb from '../../images/aboutUs/info/jcb.svg'
import mir from '../../images/aboutUs/info/mir.svg'
import mastercard from '../../images/aboutUs/info/mastercard.svg'


const animateZoom = keyframes`${bounceInRight}`;
const Zoom = styled.div`
  animation: 1s ${animateZoom};
`;

const animateBounceLeft = keyframes`${bounceInLeft}`;
const BL = styled.div`
  animation: 1s ${animateBounceLeft};
`;


const AboutUs = () => {
  return (
    <div className={s.container}>
      <div className={s.title}>
        <h1>OASIS Gourmet</h1>
        <h2>новый загородный проект от ITALY & CO.</h2>
        <p>
          Высокие стандарты качества и сервиса, чистый воздух и свежие фермерские продукты
          локального производства, поэтому вкус овощей, фруктов, ягод становится невероятно
          насыщенным – всё это часть нашей идеологии, чтобы ваш отдых за городом стал по-настоящему
          неповторимым.
        </p>
      </div>

      <Zoom>
        <BGItaly />
      </Zoom>

      <BL>
        <div className={s.Sheff}>
          <div>
            <p className={s.SheffTitle}>Любимые блюда мировой кухни в классическом и авторском исполнении шефа Тимура
              Киясова
              найдут отклик в сердцах настоящих гурманов. </p>
            <p> "Мы используем самые современные методы и лучшие продукты,
              отборного качества для приготовления шедевров, что-бы вы по настоящиму почувствовали наслаждение"</p>
          </div>
          <img src={Sheff} alt=""/>
        </div>
      </BL>

      <DryAged/>
      <BigGreenEgg />

      <div className={s.Bar}>
        <img src={BarMan} alt=""/>
        <p>
          Сомелье и бармены подготовили винную и барную карты, в которой представлены коллекции напитков со всего
          мира. Также, стоит обратить внимание на авторскую
          коктейльную карту, специально разработанную ведущим бар-менеджером ресторанов ITALY Романом
          Илларионовым.
        </p>
      </div>

      <div className={s.solaia}>
        <h1>SOLAIA</h1>
        <div className={s.solaiaDescription}>
          <img src={Solaia} alt=""/>
          <p>Одно из известнейших вин от компании Антинори, относящееся к так называемым элитным
            "супертосканцам" — винам из бордосских сортов винограда, выращенных в условиях солнечной Тосканы. Солайя —
            название виноградника, расположенного в юго-западной части области, на высоте 350-400 метров над уровнем
            моря
            на каменистой-известняковой скале в Тенута Тиньянелло. Антинори произвел это вино в первый раз в 1978 году,
            изначально оно состояло из 80% Каберне Совиньон и 20% Каберне Фран. С 1980 года в состав вина было введено
            20%
            Санджовезе, а также произведены корректировки в соотношении между Каберне Совиньон и Каберне Фран. Сбор
            урожая
            проходит с конца сентября по начало октября. Винификация включает в себя ферментацию на кожице в дубовых
            чанах
            конической формы. Каждый сорт проходит мацерацию, ферментацию и яблочно-молочное брожение по отдельности.
            Выдерживается вино из разных сортов винограда также в отдельных бочках из французского дуба. Непосредственно
            перед бутилированием все сорта ассемблируются, чтобы получилось великолепное вино с прекрасным балансом,
            богатым вкусом и ароматом, а также способностью долгое время развиваться в бутылке.</p>
        </div>
      </div>

      <Koravin />
      <Interior/>

      <div className={s.mapInfo}>
        <div className={s.mapDescription}>
          <p>Адрес: Ленинградская область, коттеджный посёлок Репинское, 42 км</p>
          <p>Номер Телефона: <a href='tel:89214333231'>89214333231</a></p>
          <p>Режим работы: ежедневно с 10:00 до 23:00</p>
          <p>Режим доставки: c 12:00 до 22:30</p>
          <p>Минимальный заказ на доставку 1000р</p>
          <div className={s.logos}>
            <img className={s.logoRepino} src={logoRepino} alt=""/>
            <img className={s.logoOasis} src={logoOasis} alt=""/>
          </div>
          <div className={s.payEat}>
            <img src={mastercard} alt=""/>
            <img className={s.visa} src={visa} alt=""/>
            <img src={mir} alt=""/>
            <img className={s.jcb} src={jcb} alt=""/>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2774210763237!2d29.916988214543828!3d60.194987300000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4697ad26ca4d9f25%3A0x6d90be2055d1a6b!2z0KDQtdC_0LjQvdGB0LrQvtC1!5e0!3m2!1sru!2sru!4v1630947580236!5m2!1sru!2sru"
          allowFullScreen="" loading="lazy"></iframe>
      </div>
    </div>
  )
}

export default AboutUs