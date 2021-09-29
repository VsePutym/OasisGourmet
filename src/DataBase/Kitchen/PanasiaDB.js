import sushimiLosos from '../../images/Kitchen/panasia/sahimiLosos-min.jpg'
import suhimiTuna from '../../images/Kitchen/panasia/sahimiTuna-min.jpg'
import suhimiUgor from '../../images/Kitchen/panasia/sahimiUgor-min.jpg'
import sushi from '../../images/Kitchen/panasia/sushi-min.jpg'
import rollTunaFire from '../../images/Kitchen/panasia/rollTunaFire-min.jpg'
import rollLososFire from '../../images/Kitchen/panasia/rollLososFire-min.jpg'
import ranbow from '../../images/Kitchen/panasia/ranbow-min.jpg'
import rollKalifornia from '../../images/Kitchen/panasia/rollKalifornia-min.jpg'
import rollFila from '../../images/Kitchen/panasia/rollFila-min.jpg'
import rollUgor from '../../images/Kitchen/panasia/rollUgor-min.jpg'
import rollFilaKrab from '../../images/Kitchen/panasia/rollFilaKrab-min.jpg'
import pechFila from '../../images/Kitchen/panasia/pechFila-min.jpg'
import rollAvocado from '../../images/Kitchen/panasia/rollAvocado-min.jpg'
import rollOgurez from '../../images/Kitchen/panasia/rollOgurez-min.jpg'
import rollLosos from '../../images/Kitchen/panasia/rollLosos-min.jpg'


const PanasiaDB = {
  items: [
    {
      name: 'Сашами с лососем', price: 590, weight: 60, id: 0, img: `${sushimiLosos}`,
      description: 'Лосось свежий.'
    },
    {
      name: 'Сашими с тугцом', price: 690, weight: 60, id: 1, img: `${suhimiTuna}`,
      description: 'Тунец свежий.'
    },
    {
      name: 'Сашими с угрём', price: 790, weight: 60, id: 2, img: `${suhimiUgor}`,
      description: 'Угорь свежий.'
    },
    {
      name: 'Суши с лососем', price: 310, weight: 150, id: 3, img: `${sushi}`,
      description: 'Лосось, рис отварной (рисовый уксус, соль поваренная, сахар), крем трюфельный.'
    },
    {
      name: 'Суши с тунцом', price: 350, weight: 150, id: 4, img: `${sushi}`,
      description: 'Тунец, рис отварной (рисовый уксус, соль поваренная, сахар), крем трюфельный.'
    },
    {
      name: 'Суши с угрём', price: 490, weight: 150, id: 5, img: `${sushi}`,
      description: 'Угорь, рис отварной (рисовый уксус, соль поваренная, сахар), крем трюфельный.'
    },
    {
      name: 'Ролл с опалённым тунцом', price: 1150, weight: 405, id: 6, img: `${rollTunaFire}`,
      description: 'Рис отварной (рисовый уксус, соль поваренная, сахар), краб, спаржа, шпинат, майонез 67%' +
        'водоросли нори, соус глуакомоле (авокадо, лайм, оливковое масло, соль), икра тобика.'
    },
    {
      name: 'Ролл с опалённым лососем, креветкой и манго', price: 1290, weight: 300, id: 7, img: `${rollLososFire}`,
      description: 'Рис отварной (рисовый уксус, соль поваренная, сахар), креветки, манго, авокадо, лосось, водоросли нори, ' +
        'соус манго, соус унаги, соус ширачи, слайсы миндаля.'
    },
    {
      name: 'Ролл радуга', price: 890, weight: 310, id: 8, img: `${ranbow}`,
      description: 'Рис отварной (рисовый уксус, соль поваренная, сахар), крабовая масса (крабовые палочки, краб роза,' +
        'майонез), креветки, угорь, лосось филе, тунец, огурец, икра тобико, водоросли нори, кунжут, соус мирин.'
    },
    {
      name: 'Ролл калифорния с камчатским крабом', price: 790, weight: 295, id: 9, img: `${rollKalifornia}`,
      description: 'Рис отварной (рисовый уксус, соль поваренная, сахар), крабовая масса (крабовые палочки, краб роза, майонез' +
        '67%), авокадо, огурец, икра тобико, водоросли нори.'
    },
    {
      name: 'Филадельфия с лососем', price: 570, weight: 310, id: 10, img: `${rollFila}`,
      description: 'Рис отварной (рисовый уксус, соль поваренная, сахар), лосось, сыр сливочный, авокадо, огурец, водоросли' +
        'нори.'
    },
    {
      name: 'Ролл филадельфия с угрём', price: 890, weight: 310, id: 11, img:`${rollUgor}`,
      description: 'Рис отварной (рисовый уксус, соль поваренная, сахар), сыр сливочный, авокадо, огурец, водоросли нори, икра' +
        'тобико, угорь, соус унаги, кунжут.'
    },
    {
      name: 'Филадельфия с трюфелем и камчатским крабом', price: 990, weight: 310, id: 12, img: `${rollFilaKrab}`,
      description: 'Рис отварной (рисовый уксус, соль поваренная, сахар), краб, лосось, водоросли нори, майонез 67%, трюфельный крем.'
    },
    {
      name: 'Запечённый ролл Филадельфия с лососем', price: 590, weight: 310, id: 13, img: `${sushi}`,
      description: 'Рис отварной (рисовый уксус, соль поваренная, сахар), водоросли нори, сливочный сыр, лосось филе, майонез 67%,' +
        'икра масаго, соус унаги, кунжут.'
    },
    {
      name: 'Запечённый ролл с камчатским крабом', price: 790, weight: 315, id: 14, img: `${pechFila}`,
      description: 'Рис отварной (рисовый уксус, соль поваренная, сахар), водоросли нори, сливочный сыр, краб, майонез 67%,' +
        'икра масаго, соус унаги, кунжут.'
    },
    {
      name: 'Запечённый ролл Филадельфия с креветкой', price: 550, weight: 315, id: 15, img: `${pechFila}`,
      description: 'Рис отварной (рисовый уксус, соль поваренная, сахар), водоросли нори, сливочный сыр, креветки, майонез 67%, ' +
        'икра масаго, соус унаги, кунжут.'
    },
    {
      name: 'Запечённый ролл Филадельфия с угрём', price: 690, weight: 320, id: 16, img: `${pechFila}`,
      description: 'Рис отварной (рисовый уксус, соль поваренная, сахар), водоросли нори, сливочный сыр, угорь, майонез 67%, ' +
        'икра масаго, соус унаги, кунжут.'
    },
    {
      name: 'Ролл с огурцом', price: 160, weight: 190, id: 17, img: `${rollOgurez}`,
      description: 'Рис отварной (рисовый уксус, соль поваренная, сахар), водоросли нори, огурец.'
    },
    {
      name: 'Ролл с авокадо', price: 160, weight: 190, id: 18, img: `${rollAvocado}`,
      description: 'Рис отварной (рисовый уксус, соль поваренная, сахар), водоросли нори, авокадо.'
    },
    {
      name: 'Ролл с лососем', price: 290, weight: 200, id: 19, img: `${rollLosos}`,
      description: 'Рис отварной (рисовый уксус, соль поваренная, сахар), водоросли нори, лосось.'
    }
  ]
}

export default PanasiaDB;