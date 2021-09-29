import pechen from '../../images/Kitchen/coldDish/pechen-min.jpg';
import watermelon from '../../images/Kitchen/coldDish/watermelon-min.jpg';
import krab from '../../images/Kitchen/coldDish/krab-min.jpg';
import avocados from '../../images/Kitchen/coldDish/avocados-min.jpg';
import orangeLosos from '../../images/Kitchen/coldDish/orangeLosos-min.jpg';
import tomatos from '../../images/Kitchen/coldDish/tomatos-min.jpg';
import fresh from '../../images/Kitchen/coldDish/fresh-min.jpg';
import shrimpCezar from '../../images/Kitchen/coldDish/shrimpCezar-min.jpg';
import chickenCezar from '../../images/Kitchen/coldDish/chickenCezar-min.jpg';

const ColdMenuDB = {
  items: [
    {name: 'Салат с куриной печенью, портвейном и свежим манго', price : 790, weight: 219, id: 0, img: `${pechen}`,
      description: 'Куриная печень, шпинат, руккола, манго, соусманго, соус с портвейном и мёдом.'
    },
    {name: 'Зелёный салат с маринованным арбузом и томатами', price : 650, weight: 244, id: 1, img: `${watermelon}`,
      description: 'Арбуз маринованный (арбуз, сок лимона, цедра лимона, перец чёрный молотый), томаты, руккола, шпинат, зелёное масло'
    },
    {name: 'Салат с камчатским крабом, страчетеллой и клубникой', price : 1590, weight: 259, id: 2, img: `${krab}`,
      description: 'Свежий авокадо и розовый томат, листья шпината. Сверху камчатский краб с сыром страчателла и клубникой.' +
        'Заправка - оливковое масло, чёрный перец и соль'
    },
    {name: 'Салат с креветками и авокадо', price : 790, weight: 290, id: 3, img: `${avocados}`,
      description: 'Авокадо и обжаренные цукини, свежий розовый томат, листья салата ромейн, тигровые креветки-гриль. Заправлен из томатного айоли.'
    },
    {name: 'Салат с копчёным лососем и апельсиновым айоли', price : 890, weight: 322, id: 4, img: `${orangeLosos}`,
      description: 'Печёный картофель, томаты черри, лосось горячего копчения, стручковый горошек, салат ромейн, пикантный соус.'
    },
    {name: 'Розовые томаты со сметаной и ялтинским луком', price : 590, weight: 274, id: 5, img: `${tomatos}`,
      description: 'Томаты розовые, ялтинский лук, шнит лук, сметана.'
    },
    {name: 'Салат из свежих овощей с прованскими травами', price : 390, weight: 233, id: 6, img: `${fresh}`,
      description: 'Розовые томаты, огурец, свежий базелик. Заправка - оливковое масло с тимьяном, разморином и орегано.'
    },
    {name: '"Цезарь" с креветками', price : 790, weight: 277, id: 7, img: `${shrimpCezar}`,
      description: 'Листья салата ромейн, заправленный соусом цезарь, сыром пармезан, каперсами и анчоусами. Гарнир -сухарики из подпеченной чиабаты' +
        'и креветки-гриль'
    },
    {name: '"Цезарь" с цыплёнком', price : 690, weight: 282, id: 8, img: `${chickenCezar}`,
      description: 'Листья салата ромейн, заправленный соусом цезарь, сыром пармезан, каперсами и анчоусами. Гарнир -сухарики из подпеченной чиабаты' +
        'и филе цыплёнка'
    },
  ]
}

export default ColdMenuDB;