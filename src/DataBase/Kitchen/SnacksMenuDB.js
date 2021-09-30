import krab from '../../images/Kitchen/snacks/krab-min.jpg';
import losos from '../../images/Kitchen/snacks/losos-min.jpg';
import bruscetaHamon from '../../images/Kitchen/snacks/bruscetaHamon-min.jpg';
import sevichyLosos from '../../images/Kitchen/snacks/sevichyLosos-min.jpg';
import sevichyTunec from '../../images/Kitchen/snacks/sevichyTunec-min.jpg';
import sevichiSibas from '../../images/Kitchen/snacks/sevichiSibas-min.jpg';
import vitella from '../../images/Kitchen/snacks/vitella-min.jpg';
import bigSet from '../../images/Kitchen/snacks/bigSet-min.jpg';
import photo from '../../images/Kitchen/snacks/photo-min.jpg';
import olivki from '../../images/Kitchen/snacks/olivki-min.jpg';
import hamon from '../../images/Kitchen/snacks/hamon-min.jpg';
import lomo from '../../images/Kitchen/snacks/lomo-min.jpg';
import milano from '../../images/Kitchen/snacks/milano-min.jpg';
import salyami from '../../images/Kitchen/snacks/salyami-min.jpg';
// import losos from '../../images/Kitchen/snacks/';
// import losos from '../../images/Kitchen/snacks/';

const SnacksMenuDB = {
  items: [
    {
      name: 'Брускета с крабом', price: 1290, weight: 236, id: 0, img: `${krab}`,
      description: 'Серый ремесленный хлеб, соус Глуакамоле(авокадо, лайм), краб Роза, страчателла.'
    },
    {
      name: 'Брускета с лососем и сливочным кремом', price: 790, weight: 220, id: 1, img: `${losos}`,
      description: 'Белый ремесленный хлеб, крем из сыра филадельфия (сыр филадельфия, сливки), лосось' +
        ' гравлакс(лосось маринованный в цитрусовых и свёкле), дроблённые маслины.'
    },
    {
      name: 'Брускета с хамоном, клубникой и горгонзолой', price: 890, weight: 190, id: 2, img: `${bruscetaHamon}`,
      description: 'Белый ремесленный хлеб, крем из сыра горгонзола (горгонзола, сливки, маскарпоне), хамон, клубника.'
    },
    {
      name: 'Севиче из лосося с манго и малиной', price: 1190, weight: 190, id: 3, img: `${sevichyLosos}`,
      description: 'Лосось манго, малина, авокадо, огурец, перец чили, соус из пюреманго, соус унаги.'
    },
    {
      name: 'Севиче из тунца с томатами и соусом кимчи', price: 890, weight: 255, id: 4, img: `${sevichyTunec}`,
      description: 'Свежий тунец, авокадо, сегменты лайма и апельсина, томаты черри, кинза, заправленные томатным кимчи соусом.'
    },
    {
      name: 'Севиче из сибаса с лаймом', price: 1190, weight: 177, id: 5, img: `${sevichiSibas}`,
      description: 'Сибас филе, сигменты лайма, масло из лимонного тимьяна.'
    },
    {
      name: 'Вителло тонато', price: 550, weight: 155, id: 6, img: `${vitella}`,
      description: 'Филе говядины су-вид, нарезанное тонкими ломтиками. Соус на основе тунца и домашнего айоли с' +
        'добавлением каперсов. Украшается оливковым маслом, каперсами, чёрным перцем и базеликом.'
    },
    {
      name: 'Большой сет антипасти', price: 7900, weight: 2226, id: 7, img: `${bigSet}`,
      description: 'Тарелка с выдержанными сырами (камамбер, горгонзола, пармезан, пекарино) и вялеными мясными деликатесами' +
        '(пармская ветчина. салями, чоризо, милано). Сервируется гриссини, свежим базеликом, кедровым орехом, томаты ' +
        'черри маринованные в соусе песто и оливки тонде.'
    },
    {
      name: 'Вяленные томаты', price: 390, weight: 100, id: 8, img: `${photo}`,
      description: '.'
    },
    {
      name: 'Оливки', price: 390, weight: 100, id: 9, img: `${olivki}`,
      description: '.'
    },
    {
      name: 'Артишоки', price: 460, weight: 100, id: 10, img: `${photo}`,
      description: '.'
    },
    {
      name: 'Хамон', price: 690, weight: 50, id: 11, img: `${hamon}`,
      description: '.'
    },
    {
      name: 'Имбирский ломо', price: 590, weight: 50, id: 12, img: `${lomo}`,
      description: '.'
    },
    {
      name: 'Милано', price: 490, weight: 50, id: 13, img: `${milano}`,
      description: '.'
    },
    {
      name: 'Салями', price: 490, weight: 50, id: 14, img: `${salyami}`,
      description: '.'
    },
    // {
    //   name: 'Грана Падано', price: 390, weight: 50, id: 15, img: `${}`,
    //   description: '.'
    // },
    // {
    //   name: 'Манчего', price: 690, weight: 50, id: 16, img: `${}`,
    //   description: '.'
    // },
    // {
    //   name: 'Камамбер', price: 390, weight: 50, id: 17, img: `${}`,
    //   description: '.'
    // },
    // {
    //   name: 'Горгонзола', price: 390, weight: 50, id: 18, img: `${}`,
    //   description: '.'
    // },
    // {
    //   name: 'Мед с кедровым орехом', price: 90, weight: 60, id: 19, img: `${}`,
    //   description: '.'
    // },
    // {
    //   name: 'Хлеб ремесленный с копчёным маслом', price: 290, weight: 251, id: 20, img: `${}`,
    //   description: '.'
    // },
    // {
    //   name: 'Фокачча с Розмарином', price: 190, weight: 205, id: 21, img: "../../images/HotDishes/1.jpg",
    //   description: 'Тесто: (вода питьевая, соль морская, масло оливковое, итальянская пшеничная мука В/С, семула, дрожжи' +
    //     'сухие), размарин свежий, пармезан, оливковое масло.'
    // },
    // {
    //   name: 'Фокачча с песто', price: 250, weight: 215, id: 22, img: "../../images/HotDishes/1.jpg",
    //   description: 'Тесто: (вода питьевая, соль морская, масло оливковое, итальянская пшеничная мука В/С, семула, дрожжи' +
    //     'сухие), соус песто-базелик, пармез, оливковое масло.'
    // },
    // {
    //   name: 'Ржаная фокачча с горгонзолой и семечками', price: 290, weight: 235, id: 23, img: "../../images/HotDishes/1.jpg",
    //   description: 'Тесто: (мука ржаная, итальянская пшеничная мука В/С, масло оливковое, вода питьевая, соль морская, масло оливковое, семула, дрожжи' +
    //     'сухие), горгонзола, пармезан, семечки подсолнечника.'
    // }
  ]
}

export default SnacksMenuDB;