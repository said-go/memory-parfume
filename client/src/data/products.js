const img = (a, b, c) => ({ a, b, c });

// Product data is intentionally isolated so the owner can replace demo items quickly.
export const products = [
  {
    id: 'p001', slug: 'iris-lumiere', brand: 'Atelier de Nuit', name: 'Iris Lumiere', gender: 'female', family: 'floral',
    description: 'Пудровый ирис, шелковистая замша и чистый мускус для спокойного дневного образа.',
    fullDescription: 'Iris Lumiere раскрывается прохладным бергамотом, затем становится мягким и почти тактильным: ирис, белая замша и прозрачный мускус звучат как свежая ткань после утреннего света.',
    price: 4200, pricesByVolume: { '5 мл': 2200, '10 мл': 4200, '30 мл': 11800 }, volumes: ['5 мл', '10 мл', '30 мл'],
    topNotes: ['бергамот', 'альдегиды'], heartNotes: ['ирис', 'фиалка'], baseNotes: ['замша', 'белый мускус'], notes: ['бергамот', 'ирис', 'фиалка', 'замша', 'мускус'],
    season: ['spring', 'autumn'], timeOfDay: ['day'], longevity: '6-8 часов', sillage: 'деликатный', availability: 'in-stock', popularity: 94, isNew: false, images: img('#f8efe9', '#d9c4a4', '#7f715e')
  },
  {
    id: 'p002', slug: 'cedar-noir', brand: 'Maison Velours', name: 'Cedar Noir', gender: 'male', family: 'woody',
    description: 'Сухой кедр, ветивер и тонкий дым для собранного вечернего звучания.',
    fullDescription: 'Cedar Noir держится близко к коже, но оставляет уверенный шлейф: в начале специи и грейпфрут, в сердце сухая древесина, в базе ветивер и мягкий дым.',
    price: 5100, pricesByVolume: { '5 мл': 2700, '10 мл': 5100, '50 мл': 21900 }, volumes: ['5 мл', '10 мл', '50 мл'],
    topNotes: ['грейпфрут', 'кардамон'], heartNotes: ['кедр', 'кипарис'], baseNotes: ['ветивер', 'дым'], notes: ['грейпфрут', 'кедр', 'ветивер', 'кардамон'],
    season: ['autumn', 'winter'], timeOfDay: ['evening'], longevity: '8-10 часов', sillage: 'средний', availability: 'in-stock', popularity: 89, isNew: false, images: img('#eee8df', '#a99a83', '#37322d')
  },
  {
    id: 'p003', slug: 'amber-silk', brand: 'Or Blanc', name: 'Amber Silk', gender: 'unisex', family: 'oriental',
    description: 'Теплая амбра, ваниль и шафран с мягким сиянием шелка.',
    fullDescription: 'Amber Silk создан для вечера: шафран и розовый перец делают старт искристым, амбра и ваниль дают бархатное тепло, а сандал собирает композицию.',
    price: 4700, pricesByVolume: { '5 мл': 2400, '10 мл': 4700, '30 мл': 12900 }, volumes: ['5 мл', '10 мл', '30 мл'],
    topNotes: ['шафран', 'розовый перец'], heartNotes: ['амбра', 'лабданум'], baseNotes: ['ваниль', 'сандал'], notes: ['шафран', 'амбра', 'ваниль', 'сандал'],
    season: ['autumn', 'winter'], timeOfDay: ['evening'], longevity: '10-12 часов', sillage: 'выразительный', availability: 'in-stock', popularity: 98, isNew: true, images: img('#f6ead9', '#c8a96a', '#5b4732')
  },
  {
    id: 'p004', slug: 'figue-claire', brand: 'Jardin Prive', name: 'Figue Claire', gender: 'unisex', family: 'fresh',
    description: 'Зеленый инжир, чай и молочная древесина для чистого летнего настроения.',
    fullDescription: 'Figue Claire пахнет листом инжира, прохладным зеленым чаем и сливочной древесиной. Аромат подходит для офиса, прогулок и дневных встреч.',
    price: 3900, pricesByVolume: { '5 мл': 2100, '10 мл': 3900, '30 мл': 10900 }, volumes: ['5 мл', '10 мл', '30 мл'],
    topNotes: ['лист инжира', 'лимон'], heartNotes: ['зеленый чай', 'инжир'], baseNotes: ['кедр', 'мускус'], notes: ['инжир', 'чай', 'лимон', 'кедр'],
    season: ['spring', 'summer'], timeOfDay: ['day'], longevity: '5-7 часов', sillage: 'деликатный', availability: 'in-stock', popularity: 87, isNew: false, images: img('#edf3e6', '#b8c9a1', '#50614b')
  },
  {
    id: 'p005', slug: 'rose-porcelain', brand: 'Or Blanc', name: 'Rose Porcelain', gender: 'female', family: 'floral',
    description: 'Прозрачная роза, личи и кремовый мускус без лишней сладости.',
    fullDescription: 'Rose Porcelain звучит как свежий букет на фарфоровом столике: личи дает сочность, роза остается чистой, а мускус делает посадку мягкой и современной.',
    price: 4500, pricesByVolume: { '5 мл': 2300, '10 мл': 4500, '30 мл': 12600 }, volumes: ['5 мл', '10 мл', '30 мл'],
    topNotes: ['личи', 'груша'], heartNotes: ['роза', 'пион'], baseNotes: ['мускус', 'кашмеран'], notes: ['личи', 'роза', 'пион', 'мускус'],
    season: ['spring', 'summer'], timeOfDay: ['day'], longevity: '6-8 часов', sillage: 'средний', availability: 'in-stock', popularity: 91, isNew: true, images: img('#faeeee', '#d8abb0', '#6f5458')
  },
  {
    id: 'p006', slug: 'tonka-veil', brand: 'Noir Petale', name: 'Tonka Veil', gender: 'unisex', family: 'gourmand',
    description: 'Бобы тонка, миндаль и какао в сухом, дорогом гурманском профиле.',
    fullDescription: 'Tonka Veil не уходит в десертность: миндальная горечь, тонка и какао звучат мягко, а сухая древесная база сохраняет элегантность.',
    price: 5300, pricesByVolume: { '5 мл': 2800, '10 мл': 5300, '50 мл': 22500 }, volumes: ['5 мл', '10 мл', '50 мл'],
    topNotes: ['миндаль', 'перец'], heartNotes: ['тонка', 'какао'], baseNotes: ['пачули', 'сухая древесина'], notes: ['тонка', 'миндаль', 'какао', 'пачули'],
    season: ['autumn', 'winter'], timeOfDay: ['evening'], longevity: '9-11 часов', sillage: 'выразительный', availability: 'preorder', popularity: 86, isNew: false, images: img('#efe7df', '#b6967c', '#4d392f')
  },
  {
    id: 'p007', slug: 'citrus-pearl', brand: 'Maison Velours', name: 'Citrus Pearl', gender: 'unisex', family: 'citrus',
    description: 'Искристый юдзу, нероли и белый чай с жемчужной прохладой.',
    fullDescription: 'Citrus Pearl открывается чисто и звонко, но быстро становится мягче: юдзу, нероли и белый чай ложатся на светлую мускусную базу.',
    price: 3600, pricesByVolume: { '5 мл': 1900, '10 мл': 3600, '30 мл': 9900 }, volumes: ['5 мл', '10 мл', '30 мл'],
    topNotes: ['юдзу', 'бергамот'], heartNotes: ['нероли', 'белый чай'], baseNotes: ['мускус', 'амброксан'], notes: ['юдзу', 'нероли', 'чай', 'бергамот'],
    season: ['spring', 'summer'], timeOfDay: ['day'], longevity: '4-6 часов', sillage: 'деликатный', availability: 'in-stock', popularity: 84, isNew: false, images: img('#f6f3df', '#d6c886', '#6f6b4b')
  },
  {
    id: 'p008', slug: 'oud-mirage', brand: 'Velvet Oud', name: 'Oud Mirage', gender: 'male', family: 'oriental',
    description: 'Уд, сухофрукты и смола в плотном, но аккуратном восточном аромате.',
    fullDescription: 'Oud Mirage построен вокруг благородного уда: стартуют сухофрукты и шафран, затем появляются смолы, кожа и темная древесина.',
    price: 6200, pricesByVolume: { '5 мл': 3300, '10 мл': 6200, '50 мл': 27900 }, volumes: ['5 мл', '10 мл', '50 мл'],
    topNotes: ['шафран', 'слива'], heartNotes: ['уд', 'смолы'], baseNotes: ['кожа', 'ладан'], notes: ['уд', 'шафран', 'кожа', 'ладан'],
    season: ['winter', 'autumn'], timeOfDay: ['evening'], longevity: '12+ часов', sillage: 'выразительный', availability: 'in-stock', popularity: 92, isNew: false, images: img('#ece4db', '#9f7e54', '#332820')
  },
  {
    id: 'p009', slug: 'white-suede', brand: 'Atelier de Nuit', name: 'White Suede', gender: 'female', family: 'leather',
    description: 'Белая кожа, фиалка и чайная роза в мягком дневном исполнении.',
    fullDescription: 'White Suede говорит негромко: фиалка, чайная роза и белая кожа создают чистый, ухоженный шлейф для тех, кто любит интимную роскошь.',
    price: 4300, pricesByVolume: { '5 мл': 2200, '10 мл': 4300, '30 мл': 11900 }, volumes: ['5 мл', '10 мл', '30 мл'],
    topNotes: ['фиалка', 'чай'], heartNotes: ['роза', 'белая кожа'], baseNotes: ['мускус', 'кедр'], notes: ['кожа', 'фиалка', 'роза', 'чай'],
    season: ['spring', 'autumn'], timeOfDay: ['day'], longevity: '6-8 часов', sillage: 'деликатный', availability: 'in-stock', popularity: 82, isNew: false, images: img('#f3f0ec', '#c9c0b6', '#6d625a')
  },
  {
    id: 'p010', slug: 'peche-dor', brand: 'Jardin Prive', name: 'Peche d Or', gender: 'female', family: 'sweet',
    description: 'Персик, жасмин и мягкая ваниль с шампанским сиянием.',
    fullDescription: 'Peche d Or сочетает сочный персик и белые цветы, но остается воздушным благодаря прозрачной ванили и светлой древесине.',
    price: 4100, pricesByVolume: { '5 мл': 2100, '10 мл': 4100, '30 мл': 11400 }, volumes: ['5 мл', '10 мл', '30 мл'],
    topNotes: ['персик', 'мандарин'], heartNotes: ['жасмин', 'османтус'], baseNotes: ['ваниль', 'сандал'], notes: ['персик', 'жасмин', 'ваниль', 'османтус'],
    season: ['spring', 'summer'], timeOfDay: ['day', 'evening'], longevity: '7-9 часов', sillage: 'средний', availability: 'in-stock', popularity: 90, isNew: true, images: img('#fff0dc', '#d7ad76', '#69523c')
  },
  {
    id: 'p011', slug: 'vetiver-air', brand: 'Noir Petale', name: 'Vetiver Air', gender: 'male', family: 'fresh',
    description: 'Ветивер, мята и минеральные ноты для безупречной свежести.',
    fullDescription: 'Vetiver Air сохраняет свежесть без спортивной резкости: мята, лайм и минеральный аккорд переходят в сухой ветивер.',
    price: 3800, pricesByVolume: { '5 мл': 2000, '10 мл': 3800, '30 мл': 10600 }, volumes: ['5 мл', '10 мл', '30 мл'],
    topNotes: ['лайм', 'мята'], heartNotes: ['минеральные ноты', 'шалфей'], baseNotes: ['ветивер', 'кедр'], notes: ['ветивер', 'мята', 'лайм', 'шалфей'],
    season: ['summer', 'spring'], timeOfDay: ['day'], longevity: '5-7 часов', sillage: 'средний', availability: 'in-stock', popularity: 80, isNew: false, images: img('#eaf3f1', '#9dbbb2', '#334d49')
  },
  {
    id: 'p012', slug: 'magnolia-mist', brand: 'Or Blanc', name: 'Magnolia Mist', gender: 'female', family: 'floral',
    description: 'Магнолия, груша и белый мускус в прохладном цветочном облаке.',
    fullDescription: 'Magnolia Mist подойдет тем, кто ищет чистый цветочный аромат без плотной сладости: магнолия, груша и прохладный мускус звучат мягко и дорого.',
    price: 4000, pricesByVolume: { '5 мл': 2100, '10 мл': 4000, '30 мл': 11200 }, volumes: ['5 мл', '10 мл', '30 мл'],
    topNotes: ['груша', 'зелень'], heartNotes: ['магнолия', 'ландыш'], baseNotes: ['мускус', 'амброксан'], notes: ['магнолия', 'груша', 'ландыш', 'мускус'],
    season: ['spring', 'summer'], timeOfDay: ['day'], longevity: '5-7 часов', sillage: 'деликатный', availability: 'out-of-stock', popularity: 78, isNew: false, images: img('#f6f4f0', '#d6d0c8', '#6f6860')
  },
  {
    id: 'p013', slug: 'santal-milk', brand: 'Velvet Oud', name: 'Santal Milk', gender: 'unisex', family: 'woody',
    description: 'Молочный сандал, рисовая пудра и кардамон для уютной кожи.',
    fullDescription: 'Santal Milk звучит тихо, сливочно и обволакивающе. Кардамон добавляет прохладу, рисовая пудра смягчает сандал, а мускус делает аромат почти кожным.',
    price: 4900, pricesByVolume: { '5 мл': 2500, '10 мл': 4900, '30 мл': 13500 }, volumes: ['5 мл', '10 мл', '30 мл'],
    topNotes: ['кардамон', 'рис'], heartNotes: ['сандал', 'ирис'], baseNotes: ['мускус', 'молочный аккорд'], notes: ['сандал', 'кардамон', 'рис', 'мускус'],
    season: ['autumn', 'winter', 'spring'], timeOfDay: ['day', 'evening'], longevity: '8-10 часов', sillage: 'средний', availability: 'in-stock', popularity: 96, isNew: true, images: img('#f4ede3', '#cdbb9d', '#665747')
  },
  {
    id: 'p014', slug: 'neroli-glass', brand: 'Atelier de Nuit', name: 'Neroli Glass', gender: 'unisex', family: 'citrus',
    description: 'Нероли, петитгрейн и чистое стеклянное мыло в лучшем смысле.',
    fullDescription: 'Neroli Glass собран вокруг нероли и петитгрейна. Это аромат свежей белой рубашки, чистой кожи и спокойного утреннего света.',
    price: 3700, pricesByVolume: { '5 мл': 1950, '10 мл': 3700, '30 мл': 10200 }, volumes: ['5 мл', '10 мл', '30 мл'],
    topNotes: ['нероли', 'лимон'], heartNotes: ['петитгрейн', 'апельсиновый цвет'], baseNotes: ['мускус', 'кедр'], notes: ['нероли', 'лимон', 'петитгрейн', 'мускус'],
    season: ['spring', 'summer'], timeOfDay: ['day'], longevity: '4-6 часов', sillage: 'деликатный', availability: 'in-stock', popularity: 83, isNew: false, images: img('#eef7f5', '#b9d8d0', '#4f6d68')
  },
  {
    id: 'p015', slug: 'plum-velvet', brand: 'Maison Velours', name: 'Plum Velvet', gender: 'female', family: 'sweet',
    description: 'Слива, роза и пачули в бархатной вечерней композиции.',
    fullDescription: 'Plum Velvet выглядит нарядно, но не кричаще: темная слива и роза поддержаны пачули, ванилью и мягким древесным фоном.',
    price: 5600, pricesByVolume: { '5 мл': 2900, '10 мл': 5600, '50 мл': 23900 }, volumes: ['5 мл', '10 мл', '50 мл'],
    topNotes: ['слива', 'корица'], heartNotes: ['роза', 'жасмин'], baseNotes: ['пачули', 'ваниль'], notes: ['слива', 'роза', 'пачули', 'ваниль'],
    season: ['autumn', 'winter'], timeOfDay: ['evening'], longevity: '9-11 часов', sillage: 'выразительный', availability: 'in-stock', popularity: 88, isNew: false, images: img('#f1e6ec', '#b9899e', '#4a3340')
  },
  {
    id: 'p016', slug: 'leather-tea', brand: 'Noir Petale', name: 'Leather Tea', gender: 'male', family: 'leather',
    description: 'Черный чай, мягкая кожа и табачный лист для камерного вечера.',
    fullDescription: 'Leather Tea раскрывается терпким чаем и табачным листом, затем становится мягче: кожа, кедр и амбра дают спокойный уверенный след.',
    price: 5200, pricesByVolume: { '5 мл': 2700, '10 мл': 5200, '50 мл': 22200 }, volumes: ['5 мл', '10 мл', '50 мл'],
    topNotes: ['черный чай', 'бергамот'], heartNotes: ['кожа', 'табак'], baseNotes: ['кедр', 'амбра'], notes: ['чай', 'кожа', 'табак', 'кедр'],
    season: ['autumn', 'winter'], timeOfDay: ['evening'], longevity: '8-10 часов', sillage: 'средний', availability: 'preorder', popularity: 85, isNew: false, images: img('#ece7e1', '#9a8068', '#3d332b')
  },
  {
    id: 'p017', slug: 'vanilla-paper', brand: 'Jardin Prive', name: 'Vanilla Paper', gender: 'unisex', family: 'gourmand',
    description: 'Сухая ваниль, бумажный аккорд и белое дерево без сахарности.',
    fullDescription: 'Vanilla Paper показывает ваниль с интеллектуальной стороны: сухая бумага, светлая древесина и мускус делают аромат чистым и необычным.',
    price: 4400, pricesByVolume: { '5 мл': 2300, '10 мл': 4400, '30 мл': 12100 }, volumes: ['5 мл', '10 мл', '30 мл'],
    topNotes: ['ванильная пудра', 'бергамот'], heartNotes: ['бумажный аккорд', 'ирис'], baseNotes: ['белое дерево', 'мускус'], notes: ['ваниль', 'ирис', 'бумага', 'мускус'],
    season: ['autumn', 'winter', 'spring'], timeOfDay: ['day'], longevity: '7-9 часов', sillage: 'деликатный', availability: 'in-stock', popularity: 81, isNew: true, images: img('#f8f0e4', '#d1b88f', '#6d5a43')
  },
  {
    id: 'p018', slug: 'marine-orchid', brand: 'Or Blanc', name: 'Marine Orchid', gender: 'female', family: 'fresh',
    description: 'Морская соль, орхидея и прозрачная амбра для летнего вечера.',
    fullDescription: 'Marine Orchid объединяет прохладу соли и мягкую цветочность орхидеи. В базе прозрачная амбра, которая красиво держится на теплой коже.',
    price: 3950, pricesByVolume: { '5 мл': 2050, '10 мл': 3950, '30 мл': 11000 }, volumes: ['5 мл', '10 мл', '30 мл'],
    topNotes: ['морская соль', 'лимон'], heartNotes: ['орхидея', 'нероли'], baseNotes: ['амбра', 'мускус'], notes: ['соль', 'орхидея', 'нероли', 'амбра'],
    season: ['summer'], timeOfDay: ['day', 'evening'], longevity: '6-8 часов', sillage: 'средний', availability: 'in-stock', popularity: 79, isNew: false, images: img('#edf5f6', '#a9cbd1', '#46656b')
  }
];

export const dictionaries = {
  gender: { male: 'Мужские', female: 'Женские', unisex: 'Унисекс' },
  family: { fresh: 'Свежие', sweet: 'Сладкие', woody: 'Древесные', floral: 'Цветочные', citrus: 'Цитрусовые', oriental: 'Восточные', leather: 'Кожаные', gourmand: 'Гурманские' },
  season: { spring: 'Весна', summer: 'Лето', autumn: 'Осень', winter: 'Зима' },
  availability: { 'in-stock': 'В наличии', preorder: 'Под заказ', 'out-of-stock': 'Нет в наличии' }
};
