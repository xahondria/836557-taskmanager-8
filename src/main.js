import CARDS_DATA from "./mock/cards-data";
import renderFilters from './components/filter';
import Card from "./components/card";
import utils from "./utils";
import FILTERS_DATA from "./mock/filters-data";
import currentlyRenderedObjects from "./currently-rendered-objects";

const filtersContainer = document.querySelector(`.filter`);
filtersContainer.innerHTML = ``;
utils.renderElements(filtersContainer, FILTERS_DATA.map((filterData) => renderFilters(filterData)));

const cardsContainer = document.querySelector(`.board__tasks`);
cardsContainer.innerHTML = ``;
CARDS_DATA.forEach((cardData) => currentlyRenderedObjects.cards.push(new Card(cardData)));

utils.renderElements(cardsContainer, currentlyRenderedObjects.cards.map((el) => el.render()));
