import merenga from '../../images/Kitchen/deserts/mirenga-min.jpg'
import napalion from '../../images/Kitchen/deserts/napalion-min.jpg'
import teramisu from '../../images/Kitchen/deserts/teramisu-min.jpg'
import brauny from '../../images/Kitchen/deserts/brauny-min.jpg'
import medovik from '../../images/Kitchen/deserts/dedovik-min.jpg'

const DessertsMenuDB = {
  items: [
    {
      name: 'Ломаная меренга с ягодами и мидалём', price: 590, weight: 235, id: 0, img: `${merenga}`,
      description: 'Меренга, клубника, малина, голубика, слайсы мендаля.'
    },
    {
      name: 'Наполеон', price: 420, weight: 178, id: 1, img: `${napalion}`,
      description: 'Слоёное тесто (мука, соль, сахар, вода, яйцо), крем (сахарный песок, яйцо куриное, крахмал, масло' +
        'сливочное, ванильная эссенция, сливки 35%). При подаче посыпается сахарной пудрой.'
    },
    {
      name: 'Классический тирамису', price: 460, weight: 161, id: 2, img: `${teramisu}`,
      description: 'Савоярди, кофе чёрный, амаретто крем (маскарпоне, яйцо куриное, сахар, сливки 35%, ликёр Амаретто).'
    },
    {
      name: 'Медовик', price: 590, weight: 235, id: 4, img: `${medovik}`,
      description: 'Меренга, клубника, малина, голубика, слайсы мендаля.'
    },
    {
      name: 'Брауни', price: 590, weight: 235, id: 4, img: `${brauny}`,
      description: 'Меренга, клубника, малина, голубика, слайсы мендаля.'
    },
  ]
}

export default DessertsMenuDB;