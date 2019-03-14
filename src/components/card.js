import cardControls from "./card-controls";
import cardColorBar from "./card-color-bar";
import cardTitle from "./card-title";
import cardSettings from "./card-settings";
import cardStatusBtns from "./card-status-btns";
import utils from "../utils";
import CardEdit from "./card-edit";

class Card {
  constructor(data) {
    this._fragment = null;

    this._state = {
      title: data.title,
      dueDate: data.dueDate,
      tags: data.tags,
      picture: data.picture,
      color: data.color,
      repeatingDays: data.repeatingDays,
      isFavorite: data.isFavorite,
      isDone: data.isDone,
    };
  }

  get template() {
    return `
        <article class="card card--${this._state.color}">
          <form class="card__form" method="get">
            <div class="card__inner">
              ${cardControls()}
              ${cardColorBar()}
              ${cardTitle(this._state.title)}
              ${cardSettings(this._state)}
              ${cardStatusBtns()}
            </div>
          </form>
        </article>
      `.trim();
  }

  _onEditButtonClick(ev) {
    ev.preventDefault();
    ev.target.closest(`.card`).replaceWith(new CardEdit(this._state).render());
  }

  bind() {
    this._fragment.querySelector(`.card__btn--edit`).addEventListener(`click`, this._onEditButtonClick.bind(this));
  }

  render() {
    this._fragment = utils.createFragment(this.template);
    this.bind();
    return this._fragment;
  }
}

export default Card;
