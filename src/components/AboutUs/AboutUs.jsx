import s from './AboutUs.module.scss';
import Sheff from '../../images/aboutUs/Sheff.jpg'
import DryAged from "./DryAged";
import Interior from "./Interior";

const AboutUs = () => {
  return (
    <div className={s.container}>
      <div className={s.title}>
        <h1>OASIS Gourmet – новый загородный проект от ITALY & CO.</h1>
        <p> Высокие стандарты качества и сервиса, чистый воздух и свежие фермерские продукты
          локального производства – всё это часть нашей идеологии, чтобы ваш отдых за городом стал по-настоящему
          неповторимым.</p>
      </div>

      <DryAged />
       <div className={s.Sheff}>
        <img src={Sheff} alt=""/>
      <p>Любимые блюда мировой кухни в классическом и авторском исполнении шефа Тимура Киясова
        найдут отклик в сердцах настоящих гурманов.
      </p>
       </div>
      <Interior />
    </div>
  )
}

export default AboutUs