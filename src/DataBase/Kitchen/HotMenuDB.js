import beff from '../../images/Kitchen/HotDishes/2.jpg';
import scert from '../../images/Kitchen/HotDishes/scert-min.jpeg';
import sibas from '../../images/Kitchen/HotDishes/sibas-min.jpg';
import losos from '../../images/Kitchen/HotDishes/losos-min.jpg';
import dorado from '../../images/Kitchen/HotDishes/dorado-min.jpg';
import octopus from '../../images/Kitchen/HotDishes/octopus-min.jpg';
import ribay from '../../images/Kitchen/HotDishes/ribay-min.jpg';
import dryAge from '../../images/Kitchen/HotDishes/dryAge-min.jpeg';
import striploin from '../../images/Kitchen/HotDishes/striploin-min.jpeg';
import beffshtecs from '../../images/Kitchen/HotDishes/beffshtecs-min.jpg';
import sheca from '../../images/Kitchen/HotDishes/sheca-min.jpg';
import dack from '../../images/Kitchen/HotDishes/dack-min.jpg';
import pepper from '../../images/Kitchen/HotDishes/pepper-min.jpg';
import burger from '../../images/Kitchen/HotDishes/burger-min.jpg';
import karbon from '../../images/Kitchen/Pasta/karbon-min.jpg';
import hamon from '../../images/Kitchen/Pasta/hamon-min.jpg';
import shrimp from '../../images/Kitchen/Pasta/shrimp-min.jpg';
import tomat from '../../images/Kitchen/Pasta/tomat-min.jpg';


const HotMenuDB = {
   items: [
     {name: 'Стейк скёрт', price : 1100, weight: 216, id: 0, img: `${scert}`,
       description: 'Стейк скёрт, руккола, соус перечный (сливки, коньяк, соль, специи), масло оливковое, соль' +
         'морская, специи)'
     },
     {name: 'Филе целого сибаса', price : 1150, weight: 240, id: 1, img: `${sibas}`,
       description: 'Обжаренное филе сибаса на слиаочном масле, соус ' +
         'аль-буро(масло сливочное, бульон овощной). Гарнир - Припущенный шпинат'
     },
     {name: 'Фарерский лосось со спаржей', price : 1390, weight: 245, id: 2, img: `${losos}`,
       description: 'Стейк из лосося, глазерованный в солной карамели. ' +
         'Бланшированная спаржа с соусом пармезан и красным перцем'
     },
     {name: 'Дорадо по-итальянски с артишокоми и базеликом', price : 1390, weight: 357, id: 3, img: `${dorado}`,
       description: 'Филе дорадо, вяленные томаты, артишоки, каперсы, маслины таджаские, базелик, соус' +
         'аль-буро(масло сливочное, бульон овощной)'
     },
     {name: 'Осьминог в испанском стиле', price : 1690, weight: 261, id: 4, img: `${octopus}`,
       description: 'Щупальца осьминога, отваренная в красном вине с овощами. Обжарен на гриле с гарниром из ' +
         'мини-картофеля, печёного болгарского перца и петрушки с чесноком. Соус из печёного оранжевого перца'
     },
     {name: 'Рибай', price : 2950, weight: 250, id: 5, img: `${ribay}`,
       description: 'Рибай прайм, обжаренный на гриле с розмарином и чесноком, подаётся с трюфельным соусом' +
         'морской солью, розовым перцем'
     },
     {name: 'Рибай сухого вызревания на кости', price : 1100, weight: 80, id: 6, img: `${dryAge}`,
       description: 'Рибай на кости прайм (зерновой откорм). 28 дней сухого вызревания'
     },
     {name: 'Стейк стриплойн', price : 2590, weight: 310, id: 7, img: `${striploin}`,
       description: ''
     },
     {name: 'Бифстроганов с картофельным пюре', price : 990, weight: 345, id: 8, img: `${beff}`,
       description: 'Обжаренная говяжья вырезка, белые грибы, репчатый лук, сливки, соус, демигляс, чеснок томатная паста,' +
         'соль, перец - туш'
     },
     {name: 'Бифштекс с горггонзолой и клубникой', price : 1290, weight: 228, id: 9, img: `${beffshtecs}`,
       description: 'Бифштекс из мраморной говядины, соли, перца. Крем из сыра горгонзола и сливок. Клубника, кинза'
     },
     {name: 'Телячьи щёчки с птитимом', price : 1190, weight: 340, id: 10, img: `${sheca}`,
       description: 'Говяжьи щёчки, томлёные с овощами (морковь, сельдирей, лук) 24 часа по технологии сувид.' +
         'Подаются с соусом демигляс и птитимом в сливочно-трюфельном соусе. Украшается сыром пармезан, трюфельным маслом и луком шнит.'
     },
     {name: 'Утиная ножка конфи с трюфельным пюре и вишней', price : 1150, weight: 350, id: 11, img: `${dack}`,
       description: 'Утиная ножка конфи, томлёная в масле с травами, картофельное пюре, трюфельное масло, вишневый соус (вишнёвое компоте, демигляс, мед)'
     },
     {name: 'Медальоны с картофельным пюре', price : 1290, weight: 354, id: 12, img: `${losos}`,
       description: 'Филе миньон, картофельное пюре, кофейный соус (кофе, соус демигляс, трюфельная паста)'
     },
     {name: 'Фаршированный болгарский перец', price : 790, weight: 400, id: 13, img: `${pepper}`,
       description: ''
     },
     {name: 'Фирменый Бургер с котлетой из мраморной говядины', price : 1290, weight: 620, id: 14, img: `${burger}`,
       description: 'Булочка бриошь, котлетка из мраморной говядины, фирминный соус(майонез 67%, чепотоле, кетчуп, чили, кинза), томаты, огурцы, лук красный, солат ромейн, чеддр,' +
         'гочица. Подаётся с картофелем фри и фирменным соусе.'
     },
     {name: 'Паста Карбонара', price : 590, weight: 270, id: 15, img: `${karbon}`,
       description: 'De Cecco, бекон, соус, масло оливковое, соль морская. Соус: сливки, чёрный перец, куриный желток,' +
         ' сыр пармезан. Украшается тёртым пармезаном и чёрным перцем.'
     },
     {name: 'Паста с оливками и пармезаном в томатном соусе', price : 570, weight: 342, id: 16, img: `${tomat}`,
       description: 'Паста De Cecco, томатный соус, микс из шести видов оливок, каперсы, чеснок, пармезан, базелик.'
     },
     {name: 'Паста с креветками и цукини', price : 790, weight: 345, id: 17, img: `${shrimp}`,
       description: 'Паста De Cecco, бульон овощной, цукини, креветки, томаты, соус биск, томаты черри, масло сливочное' +
         ', сыр Грано Падано, вино белое, масло оливковое, чеснок, тимьян, базелик.'
     },
     {name: 'Паста с хамоном и горгонзолой', price : 890, weight: 332, id: 18, img: `${hamon}`,
       description: 'Паста De Cecco, сливки 33%, горгонзола, хамон, пармезан, масло оливковое.'
     },
   ]
}

export default HotMenuDB