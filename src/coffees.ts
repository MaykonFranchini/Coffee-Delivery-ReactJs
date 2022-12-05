import expressoTradicionalImg from './assets/coffees/expresso-tradicional.png'
import expressoAmericanoImg from './assets/coffees/expresso-americano.png'
import expressoCremosoImg from './assets/coffees/expresso-cremoso.png'
import expressoGeladoImg from './assets/coffees/expresso-gelado.png'
import cafeComLeiteImg from './assets/coffees/cafe-com-leite.png'
import latteImg from './assets/coffees/latte.png'
import capuccinoImg from './assets/coffees/capuccino.png'
import macchiatoImg from './assets/coffees/macchiato.png'
import mocaccinoImg from './assets/coffees/mocaccino.png'
import chocolateQuenteImg from './assets/coffees/chocolate-quente.png'
import cubanoImg from './assets/coffees/cubano.png'
import havaianoImg from './assets/coffees/havaiano.png'
import arabeImg from './assets/coffees/arabe.png'
import irlandesImg from './assets/coffees/irlandes.png'


export const coffees = [
  { id: 1,
    name: 'Expresso Tradicional',
    tags: ['tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 990,
    img_url: expressoTradicionalImg
  },
  { id: 2,
    name: 'Expresso Americano',
    tags: ['tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 990,
    img_url: expressoAmericanoImg
  },
  { id: 3,
    name: 'Expresso Cremoso',
    tags: ['tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    price: 990,
    img_url: expressoCremosoImg
  },
  { id: 4,
    name: 'Expresso Gelado',
    tags: ['tradicional', 'gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 990,
    img_url: expressoGeladoImg
  },
  { id: 5,
    name: 'Café com Leite',
    tags: ['tradicional', 'com leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 990,
    img_url: cafeComLeiteImg
  },
  { id: 6,
    name: 'Latte',
    tags: ['tradicional', 'com leite'],
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 990,
    img_url: latteImg
  },
  { id: 7,
    name: 'Capuccino',
    tags: ['tradicional', 'com leite'],
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 990,
    img_url: capuccinoImg
  },
  { id: 8,
    name: 'Macchiato',
    tags: ['tradicional', 'com leite'],
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 990,
    img_url: macchiatoImg
  },
  { id: 9,
    name: 'Mocaccino',
    tags: ['tradicional', 'com leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 990,
    img_url: mocaccinoImg
  },
  { id: 10,
    name: 'Chocolate Quente',
    tags: ['tradicional', 'com leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 990,
    img_url: chocolateQuenteImg
  },
  { id: 11,
    name: 'Cubano',
    tags: ['especial', 'alcoólico', 'gelado'],
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 990,
    img_url: cubanoImg
  },
  { id: 12,
    name: 'Havaiano',
    tags: ['especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 990,
    img_url: havaianoImg
  },
  { id: 13,
    name: 'Árabe',
    tags: ['especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 990,
    img_url: arabeImg
  },
  { id: 14,
    name: 'Irlandês',
    tags: ['especial', 'alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 990,
    img_url: irlandesImg
  },
]