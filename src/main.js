import CARDS_DATA from "./mock/cards-data";
import renderFilters from './components/filter';
import Card from "./components/card";
import utils from "./utils";
import FILTERS_DATA from "./mock/filters-data";

const filtersContainer = document.querySelector(`.filter`);
filtersContainer.innerHTML = ``;
utils.renderElements(filtersContainer, FILTERS_DATA.map((filterData) => renderFilters(filterData)));

const cardsContainer = document.querySelector(`.board__tasks`);
cardsContainer.innerHTML = ``;
utils.renderElements(cardsContainer, CARDS_DATA.map((cardData) => new Card(cardData).render()));
