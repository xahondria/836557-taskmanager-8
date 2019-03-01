import Utils from "../components/utils";

const DATA = {
  titleList: [
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`,
  ],
  DAY_TO_MS_RATE: 86400000,
  DAYS_DISPERSION: 7,
  tagsList: new Set([
    `homework`,
    `theory`,
    `practice`,
    `intensive`,
    `keks`,
  ]),
  colors: [
    `black`,
    `yellow`,
    `blue`,
    `green`,
    `pink`,
  ],
  days: {
    Mo: 123,
    Tu: false,
    We: false,
    Th: false,
    Fr: false,
    Sa: false,
    Su: false,
  },
};

class Card {
  constructor() {
    this.title = DATA.titleList[Utils.getRandomInt(2)];
    this.dueDate = Date.now() + Utils.getRandomInt(DATA.DAYS_DISPERSION) * DATA.DAY_TO_MS_RATE;
    this.tags = Utils.getRandomElementsFromArray([...DATA.tagsList], Utils.getRandomInt(3));
    this.picture = `http://picsum.photos/100/100?r=${Math.random()}`;
    this.color = DATA.colors[Utils.getRandomInt(DATA.colors.length - 1)];
    this.repeatingDays = this.setRepeatingDays();
    this.isFavorite = Utils.getRandomInt(4) === 0;
    this.isDone = Utils.getRandomInt(1) === 0;
  }

  setRepeatingDays() {
    for (let prop in DATA.days) {
      if (DATA.days.hasOwnProperty(prop)) {
        DATA.days[prop] = Utils.getRandomInt(5) === 0;
      }
    }
  }
}


const CARDS_DATA = [
  new Card(),
  new Card(),
  new Card(),
  new Card(),
];

export default CARDS_DATA;
