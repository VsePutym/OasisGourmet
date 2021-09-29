import s from './Invents.module.scss';
import img from '../../../images/MaineMenu/HotDishes/1.jpg';
import take from '../../../images/invent/take.webp';
import newCart from '../../../images/invent/newCart.webp';
import summer from '../../../images/invent/summer.webp';
import breacfast from '../../../images/invent/breacfast.webp';

const InventsItems = {
  items: [
    {
      title: 'Скидка на самовывоз',
      info: 'Для любимых гостей приятный бонус в дорогу -10% скидка на заказы, которые вы забираете из ресторана самостельно или с собой.',
      img: `${take}`
    },
    {
      title: 'Обновленная барная карта',
      info: 'Бокал вина или авторский коктейль - лучшее начало вечера. Представляем вам обновленную винную и барную карту в загородном ресторане Oasis Gourmet.',
      img: `${newCart}`
    },
    {
      title: 'Завтраки',
      info: 'Для проснувшихся на свежем воздухе пораньше предлагаем меню завтраков: нежные сырники, ароматные круассаны, каши, блюда из яиц и король вашего утра - омлет с крабом.',
      img: `${breacfast}`
    },
    {
      title: 'Обновленное меню',
      info: 'Яркое летнее обновлённое меню с нотками лесной малины, тропического манго, авторские блюда и итальянская классика.  Мы подготовили для вас микс фантазии шефа, где каждый сможет найти свой непревзойдённый вкус. Брускетта с хамоном или легкий севиче из глубоководного алого тунца к бокалу вина. Домашняя паста, настоящая римская пинца, стейки и рыба, а также наши хиты - большая тарелка антипасти, осьминог по-итальянский и бургер от шефа.',
      img: `${summer}`
    },
  ]
}

const Invents = () => {
  return (
    <div className={s.container}>
      <h1>Акции и события</h1>
      <div className={s.items}>
          {InventsItems.items.map(item =>
            <div className={s.item}>
              <img src={item.img} alt=""/>
              <div className={s.itemInfo}>
                <h3>{item.title}</h3>
                <p>{item.info}</p>
              </div>
            </div>
          )}
        </div>
    </div>
  )
}

export default Invents;