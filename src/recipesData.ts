export type RecipeType = {
  title: string;
  id: number;
  image: string;
  preparation: string;
  cooking?: string;
  rest?: string;
  portions: string;
  ingredients: Array<string>;
  steps: Array<string>;
  rate: number;
  type: string;
};

const path = `${process.env.PUBLIC_URL + '/assets/'}`;

export const recipes: RecipeType[] = [
  {
    title: 'Boulettes italiennes',
    id: 1,
    image: `${path}mushrooms-balls.jpg`,
    preparation: '15min',
    cooking: '25min',
    rest: '1h',
    portions: '12 boulettes',
    ingredients: [
      '125g de champignons de Paris',
      '125g de champignons de shiitakés',
      "1/4 d'oignon rouge",
      '1 échalotte',
      '1 cuillère à soupe de sauce soja sucrée',
      '30g de flocons avoine',
      '2 cuillères à soupe de persil',
      '50g de lentilles cuites',
      '20g de chapelure',
      "1 cuillère à café d'ail semoule",
      '1 pincée de sel et de poivre',
      'facultatif: 1 pincée de piment de Cayenne',
    ],
    steps: [
      "Nettoyer les champignons et hachez-les en petits morceaux. Pelez et émincez l'oignon et l'échalotte.",
      "Dans une poêle contenant un peu d'eau ou d'huile, faites revenir les champignons à feu vif en mélangeant régulièrement. Au bout de quelques minutes, quand l'eau relâchée par les champignons s'est évaporée et qu'ils commencent à colorer, ajoutez la sauce soja, l'oignon et l'échalotte. Poursuivez la cuisson jusqu'à ce que l'oignon et l'échalotte soient translucides et commencent à dorer (environ 8min). Hors du feu, ajoutez les flocons d'avoine et le persil , mélangez et laissez tiédir.",
      "Pendant ce temps, écrasez grossièrement à la fourchette les lentilles dans un saladier. Versez la poêlée dans le saladier, ajoutez toutes les épices, la chapelure et mélangez à la fourchette tout en écrasant pour obtenir un mélange homogène. Goûtez afin d'ajuster l'assaisonnement puis couvrez et laissez reposer au réfrigérateur pendant au moins 1h.",
      "Au terme de ce repos, préchauffez votre four à 200°C. Prélevez enciron 2 cuillères à soupe du mélange refroidi et formez une boulette à l'aide de vos mains. Déposez la boulette sur une plaque de cuisson recouverte de papier sulfurisé et recommencer l'opération jusqu'à épuisement du mélange.",
      'Enfournez à 200°C pendant 15min. Dégustez ces boulettes avec des spaghettis et de la sauce tomate.',
    ],
    rate: 4,
    type: 'salty',
  },
  {
    title: 'Overnight porridge',
    id: 2,
    image: `${path}porridge.jpg`,
    preparation: '5min',
    rest: '1 nuit',
    portions: '1 personne',
    ingredients: ['180ml de lait végétal', '120g de yaourt végétal'],
    steps: [
      'Dans un bol, mélangez tous les ingrédients et laissez reposer au frais toute la nuit',
      'Le lendemain, ajoutez des fruits de saison et du beurre de cacahuète.',
    ],
    rate: 4,
    type: 'sweet',
  },
  {
    title: 'Poké bowl',
    id: 3,
    image: `${path}poke-bowl.jpg`,
    preparation: '10min',
    portions: '1 personne',
    ingredients: [
      '1 verre de riz japonais cuit',
      "1 poignée d'edamames",
      '1 petite carotte',
      '1/2 concombre',
      '1/2 avocat',
      '3 cuillère à soupe de sauvce soja sucrée ou salée',
      "1 feuille d'algue nori",
      'graines de sésames',
    ],
    steps: [
      "Décongelez ou faites cuire les edamames. Pelez et râpez la carotte et le concombre. Épluchez l'avocat et coupez le en fines lamelles. Coupez la feuille d'algue nouri en 4.",
      "Dans un saladier, mélangez le riz japonais cuit, les crudités, l'avocat et les edamames. Assaisonnez avec la sauce soja, placez les morceaux d'algue nori sur un côté et saupoudrez de graines de sésame.",
    ],
    rate: 5,
    type: 'salty',
  },
  {
    title: 'Curry de pois chiches',
    id: 4,
    image: `${path}curry.jpg`,
    preparation: '5min',
    portions: '2 personnes',
    rest: '15min',
    ingredients: [
      '350g de pois chiches en conserve',
      '200g de tomates concassées fraîches ou en conserve',
      '2 cuillères à café de curry en poudre',
      '1 cuillère à café de garam masala',
      '25cl de lait de coco',
      "le jus d'1/2 citron vert",
      'sel, poivre',
      'facultatif: 1/2 cuillère à café de gingembre, 1 poignée de coriandre fraîche',
    ],
    steps: [
      'Égouttez et rincez les pois chiches. Vous pouvez retirez la peau en les frottant.',
      'Faites chauffer les tomates concassées dans une poêle à feu moyen. Ajoutez le curry, le garam masala et la purée de gimgembre. Mélangez soigneusement et laissez cuire environ 3 à 4min.',
      "Quand le mélange commence à épaissir, ajoutez les pois chiches, le lait de coco puis mélangez et laissez mijoter pendnat 5 à 10min. Ajoutez le jus de citron vert, un peu de coriandre hachée et rectifiez l'assaisonnement. Servez avec du riz basmati et de la coriandre fraîche.",
    ],
    rate: 5,
    type: 'salty',
  },
  {
    title: 'Crunchy granola',
    id: 5,
    image: `${path}granola.jpg`,
    preparation: '5min',
    portions: '1 grand bocal',
    cooking: '45min',
    ingredients: [
      "300g de flocons d'avoine",
      '60g de de beurre de cacahuètes',
      '160g de compote de pommes',
      "10cl de sirop d'érable",
      "2 cuillères à café d'extrait de vanille",
    ],
    steps: [
      'Préchauffez votre four à 160°C. Mélangez tous les ingrédients ensemble dans un grand saladier.',
      "Étalez grossièrement la pâte sur une plaque de cuisson antiadhésive ou recouverte de papier sulfurisé. Enfournez à 160°C pendant 45min. Remuez la pâte à l'aide d'une spatule toutes les 10min afin d'uniformiser la cuisson.",
      "A la sortie du four, laissez refroidir complètement le granola avant de la stocker dans un bol en verre. Servez le accompagné de fruits de saison, de purée d'oléagineux et recouvert de yaourt végatal ou de lait végétal.",
    ],
    rate: 5,
    type: 'sweet',
  },
  {
    title: 'Falafels faciles',
    id: 6,
    image: `${path}falafels.jpg`,
    preparation: '15min',
    portions: '15 petits falafels',
    cooking: '7min à 30min',
    ingredients: [
      '400g de pois chiches en conserve',
      '1/2 oignon rouge haché',
      '1 bouquet de persil',
      '2 cuillères à soupe de farine',
      "2 gousses d'ail pressée",
      "le jus d'1/2 citron",
      '1 cuillère à café de cumin',
      '1/2 cuillère à café de curcuma',
      'sel',
      'facultatif: 1/2 cuillère à soupe de harissa',
    ],
    steps: [
      "Égouttez et rincez les pois chiches. Placez tous les ingrédients dans le bol d'un mixeur et pulsez jusqu'à ce qu'une pâte commence à apparaître. Veillez à ne pas trop mixer pour garder la texture et ne pas réduire l'appareil en purée.",
      "Prélevez environ 2 cuillères à soupe de ce mélange pour former un petit disque à l'aide de vos mains. Confectionnez ainsi une quinzaine de falafels et laissez-les reposer pendant 2h au réfrigérateur.",
      "Pour une cuisson au four, placez les falafels sur une plaque recouverte de papier sulfurisé et faites-les cuire à 180°C pendant 30min en les retournant à mi-cuisson. Pour une cuisson à la poêle, faites cuire les falafels dans un peu d'huile pendant 3 à 4min de chaque côté.",
      'Servez les falafels chauds avec de la salade et des crudités',
    ],
    rate: 4,
    type: 'salty',
  },
  {
    title: 'Makis veggie',
    id: 7,
    image: `${path}makis.jpg`,
    preparation: '20min',
    portions: '32 pièces',
    cooking: '15min',
    ingredients: [
      '225g de riz spécial sushi',
      "32cl d'eau",
      '30ml de vinaigre de riz',
      "2 cuillères à soupe de sirop d'agave",
      'sel',
      "4 feuilles d'algues nori",
      '1/2 concombre',
      '1/2 cuillère avocat',
      '1 grosse cuillère à soupe de carottes râpées',
      '2 cuillères à soupe de graines de sésames',
    ],
    steps: [
      "Lavez le riz à l'eau froide jusqu'à ce que l'eau qui s'écoule soit claire. Mettez ensuite le riz dans une casserole avec les 32cl d'eau et portez à ébullition pendant 2min. Couvrez puis baissez le feu pour laisser cuire pendant 12min. Une fois ce temps écoulé, coupez le feu et laissez le riz dans l'eau chaude encore 10min sans retirer le couvercle.",
      "Mélangez le vinaigre, le sirop d'agave et le sel ensemble jusqu'à ce que le sel soit dissout. Versez ce mélange dans le riz encore chaud et remuez délicatement. Débarassez le riz dans un plat pour qu'il tiédisse plus rapidement.",
      "Pendant ce temps, ôtez les pépins des concombres et coupez-le en bâtonnets. Dénoyautez l'avocat et coupez-le en lamelles. Rassemblez ensuite tous les ingrédients pour les avoir à portée de main. Prévoyez aussi un bol d'eau tiède poiur humidifier vos mains et éviter que le riz ne colle.",
      "Déposez une feuille nori sur u tapis de bambou ou en silicone et étalez une fine couche de riz sur les 3/4. Saupoudrez le riz de graines de sésames et déposez la gerniture près du bord qui se trouve vers vous ainsi qu'une bande de bâtonets de concombre. Recouvrez de lamelles d'avocat et finissez par une généreuse couche de carottes râpées.",
      "Roullez la feuille en tenant fermemant l'extréminté afin d'enfermer la garniture. Coupez le rouleau en 8 tronçons de taille égale en humidifiant régulièrement la alme de votre couteau. Servez les makis accompagnés de sauce soja.",
    ],
    rate: 4,
    type: 'salty',
  },
];
