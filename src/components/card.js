import moment from "moment";
import CardEdit from "./card-edit";
import Component from "./component";
import cardHashtags from "./card-hashtags";

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
      archivedDate: data.archivedDate,
      tags: data.tags,
      picture: data.picture,
      color: data.color,
      repeatingDays: Object.assign({}, data.repeatingDays),
      isDate: data.isDate,
      isRepeated: data.isRepeated,
      isFavorite: data.isFavorite,
      isArchived: data.isArchived,
      isDone: data.isDone,
    };

    this._onArchivedButtonClick = this._onArchivedButtonClick.bind(this);
    this._onFavoritesButtonClick = this._onFavoritesButtonClick.bind(this);
  }

  get template() {
    return `
      <article class="card card--${this._state.color}">
        <div class="card__inner">
          <div class="card__control">
            <button type="button" class="card__btn card__btn--edit">
              edit
            </button>
            <button type="button" class="card__btn card__btn--archive">
              archive
            </button>
            <button
              type="button"
              class="card__btn card__btn--favorites card__btn--${this._state.isFavorite ? `` : `disabled`}"
            >
              favorites
            </button>
          </div>    
          <div class="card__color-bar">
            <svg class="card__color-bar-wave" width="100%" height="10">
              <use xlink:href="#wave"></use>
            </svg>
          </div>
          <div class="card__textarea-wrap">
            <label>
              <textarea
                class="card__text"
                placeholder="Start typing your text here..."
                name="text"
                readonly
              >${this._state.title}</textarea>
            </label>
          </div>
          <div class="card__settings">
            <div class="card__details">
              <div class="card__dates">
                ${this._state.archivedDate ? moment(this._state.archivedDate).format(`D MMMM H:mm ss`) : ``}
              </div>
    
              <div class="card__hashtag">
                <div class="card__hashtag-list">
                  ${cardHashtags(this._state.tags)}
                </div>
              </div>
            </div>
            
            <label class="card__img-wrap">
              <img
                src=${this._state.picture}
                alt="task picture"
                class="card__img"
              />
            </label>
          </div>
        </div>
      </article>
      `.trim();
  }

  _onArchivedButtonClick(ev) {
    ev.preventDefault();
    this._state.isArchived = !this._state.isArchived;
    this._state.archivedDate = this._state.isArchived ? Date.now() : null;
    this.updateComponent(ev.target.closest(`.card`));
  }

  _onFavoritesButtonClick(ev) {
    ev.preventDefault();
    this._state.isFavorite = !this._state.isFavorite;
    this.updateComponent(ev.target.closest(`.card`));
  }


  _onEditButtonClick(ev) {
    ev.preventDefault();
    ev.target.closest(`.card`).replaceWith(new CardEdit(this._state).render());
  }

  bind() {
    this._fragment.querySelector(`.card__btn--edit`)
      .addEventListener(`click`, this._onEditButtonClick.bind(this));
    this._fragment.querySelector(`.card__btn--archive`)
      .addEventListener(`click`, this._onArchivedButtonClick);
    this._fragment.querySelector(`.card__btn--favorites`)
      .addEventListener(`click`, this._onFavoritesButtonClick);
  }
}

export default Card;
