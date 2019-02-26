import {getRandomElements} from "../components/utils";

const title = [
  `Изучить теорию`,
  `Сделать домашку`,
  `Пройти интенсив на соточку`,
][Math.floor(Math.random() * 3)];

const dueDate = Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000;

const tagsList = new Set([
  `homework`,
  `theory`,
  `practice`,
  `intensive`,
  `keks`,
]);

const tags = getRandomElements([...tagsList], 3);

const picture = `http://picsum.photos/100/100?r=${Math.random()}`;

const color = [`black`, `yellow`, `blue`, `green`, `pink`][Math.floor(Math.random() * 5)];

const repeatingDays = {
  Mo: Math.floor(Math.random() * 5) === 4,
  Tu: Math.floor(Math.random() * 5) === 4,
  We: Math.floor(Math.random() * 5) === 4,
  Th: Math.floor(Math.random() * 5) === 4,
  Fr: Math.floor(Math.random() * 5) === 4,
  Sa: Math.floor(Math.random() * 5) === 4,
  Su: Math.floor(Math.random() * 5) === 4,
};

const CARDS_DATA = [
  {
    title,
    dueDate,
    tags,
    picture,
    color,
    repeatingDays,
    isFavorite: Math.floor(Math.random() * 5) === 4,
    isDone: Math.floor(Math.random() * 2) === 1,
  },
];

export default CARDS_DATA;
