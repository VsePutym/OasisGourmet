import rice from '../../images/Kitchen/Breackfast/rice-min.jpg'
import krab from '../../images/Kitchen/Breackfast/omlet-min.jpg'
import krok from '../../images/Kitchen/Breackfast/krokMisie-min.jpg'
import grecha from '../../images/Kitchen/Breackfast/grecha-min.jpg'
import kruasun from '../../images/Kitchen/Breackfast/kruasun-min.jpg'
import kruasunLemon from '../../images/Kitchen/Breackfast/kruasunLemon-min.jpg'
import kruasunChokolate from '../../images/Kitchen/Breackfast/kruasunChokolate-min.jpg'


const BreakfastMenuDB = {
  items: [
    {name: 'Рисовая каша на кокосовом молоке с манго и голубикой', price: 490, weight: 400, id: 1, img: `${rice}`,
      description: 'Молоко коровье, молоко кокосовое, рис басмати, масло сливочное, манго, манго буарон'
    },
    {name: 'Омлет с крабом', price: 1190, weight: 330, id: 2, img: `${krab}`,
      description: 'Молоко, яйца куринные, сливочное масло, краб "Роза", маскарпоне.'
    },
    {name: 'Крок-месье', price: 590, weight: 290, id: 0, img: `${krok}`,
      description: 'Классический французский запечённый сендвич с сыром, ветчиной и томатоми и соусом айоли' +
        'внутри. Украшается свежей рукколой и зелёным маслом.'
    },
    {name: 'Яйцо пашот с гречей, пармезаном и авокадо', price: 380, weight: 300, id: 3, img: `${grecha}`,
      description: 'Греча с пармезаном, яйцо пашёт, авокадо, сливочное масло.'
    },
    {name: 'Круасан класический', price: 100, weight: 1, id: 4, img: `${kruasun}`,
      description: '.'
    },
    {name: 'Круасан с заварным кремом и лимоном', price: 120, weight: 1, id: 5, img: `${kruasunLemon}`,
      description: '.'
    },
    {name: 'Круасан с шоколадом', price: 150, weight: 1, id: 6, img: `${kruasunChokolate}`,
      description: '.'
    },
  ]
}

export default BreakfastMenuDB