import cardControls from "./card-controls";
import cardColorBar from "./card-color-bar";
import cardTitle from "./card-title";
import cardSettings from "./card-settings";
import cardStatusBtns from "./card-status-btns";
import CardEdit from "./card-edit";
import Component from "./component";

class Card extends Component {
  constructor(data) {
    super();
    this._fragment = null;
    this._props = {
      id: data.id,
    };
    this._state = {
      title: data.title,
      dueDate: data.dueDate,
      tags: data.tags,
      picture: data.picture,
      color: data.color,
      repeatingDays: data.repeatingDays,
      isDate: data.isDate,
      isRepeat: data.isRepeated,
      isFavorite: data.isFavorite,
      isArchived: data.isArchived,
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
    this._fragment.querySelector(`.card__btn--edit`)
      .addEventListener(`click`, this._onEditButtonClick.bind(this));
  }
}

export default Card;
