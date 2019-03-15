import utils from "../utils";

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
    Mo: false,
    Tu: false,
    We: false,
    Th: false,
    Fr: false,
    Sa: false,
    Su: false,
  },
};

function generateRepeatingDays() {
  for (let prop in DATA.days) {
    if (DATA.days.hasOwnProperty(prop)) {
      DATA.days[prop] = utils.getRandomInt(5) === 0;
    }
  }
  return DATA.days;
}

function generateCardData() {
  return {
    id: utils.getRandomInt(2000),
    title: DATA.titleList[utils.getRandomInt(2)],
    dueDate: Date.now() + utils.getRandomInt(DATA.DAYS_DISPERSION) * DATA.DAY_TO_MS_RATE,
    tags: utils.getRandomElementsFromArray([...DATA.tagsList], utils.getRandomInt(3)),
    picture: `http://picsum.photos/100/100?r=${Math.random()}`,
    color: DATA.colors[utils.getRandomInt(DATA.colors.length - 1)],
    repeatingDays: generateRepeatingDays(),
    isFavorite: utils.getRandomInt(4) === 0,
    isArchived: false,
    isDone: utils.getRandomInt(1) === 0,
  };
}

const CARDS_DATA = [...Array(2)].map(generateCardData);

export default CARDS_DATA;
