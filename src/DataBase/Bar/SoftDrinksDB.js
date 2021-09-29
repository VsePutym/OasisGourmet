import coffe from '../../images/Bar/coffe/5.jpg';
import milkshakes from '../../images/Bar/milkshakes/2.jpg'
import Smoothies from '../../images/Bar/Smoothies/Smoothies.jpg'


const SoftDrinksDB = {
  coffee : [
    {name: 'Эспрессо', price: 190, weight: 30, id: 0, img: `${coffe}`},
    {name: 'Двойной эспрессо', price: 310, weight: 60, id: 1, img: `${coffe}` },
    {name: 'Американо', price: 190, weight: 120, id: 2, img: `${coffe}` },
    {name: 'Капучино', price: 250, weight: 180, id: 3, img: `${coffe}` },
    {name: 'Капучино Гранде', price: 320, weight: 300, id: 4, img: `${coffe}`},
    {name: 'Латте', price: 280, weight: 300, id: 5, img: `${coffe}`},
    {name: 'Флэе Уайт', price: 320, weight: 180, id: 6, img: `${coffe}`},
    {name: 'Раф', price: 290, weight: 180, id: 7,img: `${coffe}` },
    {name: 'Какао', price: 260, weight: 180, id: 8, img: `${coffe}`},
    {name: 'Сироп в ассортименте', price: 50, weight: 30, id: 9,img: `${coffe}` },
  ],
  milkshakes : [
    {name: 'Ванильный', price: 450, weight: 250, id: 0, img: `${milkshakes}`},
    {name: 'Шоколадный', price: 450, weight: 250, id: 1, img: `${milkshakes}`},
    {name: 'Малина-базелик', price: 550, weight: 250, id: 2, img: `${milkshakes}`},
  ],
  Smoothies : [
    {name: 'Джунгли', price: 420, weight: 250, id: 0, img: `${Smoothies}`},
    {name: 'Кокосовая гранолла', price: 420, weight: 250, id: 1, img: `${Smoothies}`},
    {name: 'Зелёная сила', price: 420, weight: 250, id: 2, img: `${Smoothies}`},
  ],
  FruitDrinks: [
    {name: 'Облепиховый морс', choices: ['500ml', '1000ml'], price500: 160, price1000:800, price: 160, weight: 200, id: 0, img: `${milkshakes}`},
    {name: 'Малиновый морс', choices: ['500ml', '1000ml'], price500: 160, price1000:800, price: 160, weight: 200, id: 1, img: `${milkshakes}`},
  ],
  FreshDrinks: [
    {name: 'Лимонады Пепси', price: 160, price500: 160, price1000:800, weight: 250, id: 0, choices: ['200ml', '1000ml'], img: `${milkshakes}`},
    {name: 'Сок йога', price: 190, weight: 200, id: 0, img: `${milkshakes}`},
    {name: 'лимонады Сан Пеллегрино', price: 160, weight: 200, id: 0,img: `${milkshakes}` },
    {name: 'Минеральная вода Санпеллегрино', price: 160, weight: 200, id: 0,img: `${milkshakes}` },
    {name: 'Минеральная вода Аква Панна', price: 160, weight: 200, id: 0, img: `${milkshakes}`}
  ]
}

export default SoftDrinksDB;