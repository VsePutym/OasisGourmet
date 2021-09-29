import WhiteAndGrenTea from '../../images/Bar/TeaMap/Green.jpg';
import Ulun from '../../images/Bar/TeaMap/Ulun.jpg';
import Red from '../../images/Bar/TeaMap/Red.jpg'
import TeaCostom from '../../images/Bar/TeaMap/TeaCostom.jpg'
import grass from '../../images/Bar/TeaMap/grass.jpg'
import Coctels from '../../images/Bar/TeaMap/Coctels.jpg'


const TeaDB = {
  GreanWhite: [
    {
      name: 'Лун цзин', price: 550, price500: 550, price1000: 850, img: `${WhiteAndGrenTea}`,
      description: 'Изысканный белый чай с яркими цветочными нотами и душистым медовым ароматом', choices: ['500ml', '1000ml'],
    },
    {
      name: 'Бай му дань', price: 490, price500: 490, price1000: 730, img: `${WhiteAndGrenTea}`, choices: ['500ml', '1000ml'],
      description: 'Легендарный чай с тонким ореховым ароматом и богатым глубоким вкусом'
    }
  ],
  Uluns: [
    {
      name: 'Тегуанинь', price: 550, price500: 550, price1000: 850, img: `${Ulun}`, choices:['500ml', '1000ml'],
      description: 'Яркий и в то же время совершенно ненавязчивый чай с сильным сладковато-пряным ароматом и тонким освежающим вкусом'
    },
    {
      name: 'Габа Алишань', price: 600, price500: 600, price1000: 900, img: `${Ulun}`, choices:['500ml', '1000ml'],
      description: '«Успокаивающий чай с тонким, пряно-бисквитным ароматом и ягодной кислинкой»'
    },
    {
      name: 'Молочный улун', price: 490, price500: 490, price1000: 730, img: `${Ulun}`, choices:['500ml', '1000ml'],
      description: 'Чай, который сводит с ума своим неповторимым ароматом молочных сливок и карамели'
    },
  ],
  RedAndBlack: [
    {
      name: 'Цейлонский FOP', price: 420, price500: 420, price1000: 630, img: `${Red}`, choices:['500ml', '1000ml'],
      description: 'Чай обладает изысканным ароматом и насыщенным вкусом c оттенком красной сливы.'
    },
    {
      name: 'Цзинь цзюнь мэй', price: 550, price500: 550, price1000: 850, img: `${Red}`, choices:['500ml', '1000ml'],
      description: 'Элитный чай с медовым цветочно-фруктовым вкусом, ароматом лёгкого дымка и малиновыми нотками.'
    },
    {
      name: 'Пуэр Шу', price: 580, price500: 580, price1000: 870, img: `${Red}`, choices:['500ml', '1000ml'],
      description: 'Постферментированный чай с древесными, слегка дымными нотками в аромате'
    },
  ],
  TeaAdditives: [
    {
      name: 'Эрл грей', price: 390, price500: 390, price1000: 590, img: `${TeaCostom}`, choices:['500ml', '1000ml'],
      description: 'Изысканный чай с ярким ароматом бергамота.'
    },
    {
      name: 'Жасминовый', price: 420, price500: 420, price1000: 630, img: `${TeaCostom}`, choices:['500ml', '1000ml'],
      description: 'Китайский зелёный листовой чай с бутонами жасмина.'
    },
    {
      name: 'Ночь Ван Гога', price: 490, price500: 490, price1000: 730, img: `${TeaCostom}`, choices:['500ml', '1000ml'],
      description: 'Отборный цейлонский чай со слегка сладковатым вкусом ягод черники.'
    },
  ],
  HerbalTea: [
    {
      name: 'Травы и ягоды', price: 390, price500: 390, price1000: 590, img: `${grass}`, choices:['500ml', '1000ml'],
      description: 'Травяной чай с лемонграссом, можжевельником, мятой, листьями и ягодами смородины.'
    },
    {
      name: 'Иван чай с шиповником', price: 490, price500: 490, price1000: 730, img: `${grass}`, choices:['500ml', '1000ml'],
      description: 'Иван-чай с добавлением шиповника и боярышника, повышает иммунитет и придает сил.'
    },
    {
      name: 'Гречишный чай', price: 420, price500: 420, price1000: 630, img: `${grass}`, choices:['500ml', '1000ml'],
      description: 'Традиционный напиток с теплым вкусом овсянного печенья, нотами орехов в аромате.'
    },
    {
      name: 'Ромашковый чай', price: 420, price500: 420, price1000: 630, img: `${grass}`, choices:['500ml', '1000ml'],
      description: 'Тёплый аромат в сочетании с ненавязчивым вкусом наполняет гармонией и радостью.'
    }
  ],
  TeaCocktails: [
    {
      name: 'Бездельники', price: 750, price500: 750, price1000: 1125, img: `${Coctels}`, choices:['500ml', '1000ml'],
      description: 'Тропический напиток на основе зелёного чая с ярким вкусом маракуйи, кисло-сладкой малины и манго.'
    },
    {
      name: 'Алоэ.ру', price: 750, price500: 750, price1000: 1125, img: `${Coctels}`, choices:['500ml', '1000ml'],
      description: 'Природный напиток на основеиван-чая с высокой концентрацией витамина С, добавлением мякоти алоэ, лемонграсса и корейского мёда'
    },
    {
      name: 'Облепиховый чай', price: 750, price500: 750, price1000: 1125, img: `${Coctels}`, choices:['500ml', '1000ml'],
      description: 'Облепихоый чай на основе иван-чая с добавлением груши, эстрагона и мёда.'
    },
    {
      name: 'Имбирный чай', price: 750, price500: 750, price1000: 1125, img: `${Coctels}`, choices:['500ml', '1000ml'],
      description: 'Цитрусовый напиток на основе корейского цветочного мёда, вываренного с имбирём'
    },
    {
      name: 'Вишнёвый Пуэр', price: 750, price500: 750, price1000: 1125, img: `${Coctels}`, choices:['500ml', '1000ml'],
      description: 'Вишневый пуэр с добавлением корицы и гвоздики.'
    }
  ]
}

export default TeaDB;