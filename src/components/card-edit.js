import flatpickr from "flatpickr";
import Card from "./card";
import Component from "./component";

class CardEdit extends Component {
  constructor(data) {
    super();
    this._fragment = null;
    this.calendar = null;
    this.cardTime = null;
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

    this._onSubmitButtonClick = this._onSubmitButtonClick.bind(this);
    this._onArchivedButtonClick = this._onArchivedButtonClick.bind(this);
    this._onFavoritesButtonClick = this._onFavoritesButtonClick.bind(this);
    this._onDateButtonClick = this._onDateButtonClick.bind(this);
    this._onRepeatButtonClick = this._onRepeatButtonClick.bind(this);
    this._onTitleChange = this._onTitleChange.bind(this);
    this._onColorChange = this._onColorChange.bind(this);
    this._onRepeatingDaysChange = this._onRepeatingDaysChange.bind(this);
  }

  get template() {
    return `
      <article class="card card--edit card--${this._state.color}">
        <form class="card__form" method="get">
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
                    >${this._state.title}</textarea>
              </label>
            </div>

            <div class="card__settings">
              <div class="card__details">
                <div class="card__dates">
                  <button class="card__date-deadline-toggle" type="button">
                    date: <span class="card__date-status">${this._state.isDate ? `yes` : `no`}</span>
                  </button>

                  <fieldset class="card__date-deadline" ${this._state.isDate ? `` : `disabled`}>
                    <label class="card__input-deadline-wrap">
                      <input
                        class="card__date"
                        type="text"
                        placeholder="23 September"
                        name="date"
                      />
                    </label>
                    <label class="card__input-deadline-wrap">
                      <input
                        class="card__time"
                        type="text"
                        placeholder="11:15 PM"
                        name="time"
                      />
                    </label>
                  </fieldset>

                  <button class="card__repeat-toggle" type="button">
                    repeat:<span class="card__repeat-status">${this._state.isRepeated ? `yes` : `no`}</span>
                  </button>

                  <fieldset class="card__repeat-days" ${this._state.isRepeated ? `` : `disabled`}>
                    <div class="card__repeat-days-inner">
                      <input
                        class="visually-hidden card__repeat-day-input"
                        type="checkbox"
                        id="repeat-mo-1"
                        name="repeat"
                        value="mo"
                        ${this._state.repeatingDays.mo && `checked`}
                      />
                      <label class="card__repeat-day" for="repeat-mo-1"
                      >mo</label
                      >
                      <input
                        class="visually-hidden card__repeat-day-input"
                        type="checkbox"
                        id="repeat-tu-1"
                        name="repeat"
                        value="tu"
                        ${this._state.repeatingDays.tu && `checked`}
                      />
                      <label class="card__repeat-day" for="repeat-tu-1"
                      >tu</label
                      >
                      <input
                        class="visually-hidden card__repeat-day-input"
                        type="checkbox"
                        id="repeat-we-1"
                        name="repeat"
                        value="we"
                        ${this._state.repeatingDays.we && `checked`}
                      />
                      <label class="card__repeat-day" for="repeat-we-1"
                      >we</label
                      >
                      <input
                        class="visually-hidden card__repeat-day-input"
                        type="checkbox"
                        id="repeat-th-1"
                        name="repeat"
                        value="th"
                        ${this._state.repeatingDays.th && `checked`}
                      />
                      <label class="card__repeat-day" for="repeat-th-1"
                      >th</label
                      >
                      <input
                        class="visually-hidden card__repeat-day-input"
                        type="checkbox"
                        id="repeat-fr-1"
                        name="repeat"
                        value="fr"
                        ${this._state.repeatingDays.fr && `checked`}
                      />
                      <label class="card__repeat-day" for="repeat-fr-1"
                      >fr</label
                      >
                      <input
                        class="visually-hidden card__repeat-day-input"
                        type="checkbox"
                        name="repeat"
                        value="sa"
                        id="repeat-sa-1"
                        ${this._state.repeatingDays.sa && `checked`}
                      />
                      <label class="card__repeat-day" for="repeat-sa-1"
                      >sa</label
                      >
                      <input
                        class="visually-hidden card__repeat-day-input"
                        type="checkbox"
                        id="repeat-su-1"
                        name="repeat"
                        value="su"
                        ${this._state.repeatingDays.su && `checked`}
                      />
                      <label class="card__repeat-day" for="repeat-su-1"
                      >su</label
                      >
                    </div>
                  </fieldset>
                </div>

                <div class="card__hashtag">
                  <div class="card__hashtag-list"></div>

                  <label>
                    <input
                      type="text"
                      class="card__hashtag-input"
                      name="hashtag-input"
                      placeholder="Type new hashtag here"
                    />
                  </label>
                </div>
              </div>

              <label class="card__img-wrap card__img-wrap--empty">
                <input
                  type="file"
                  class="card__img-input visually-hidden"
                  name="img"
                />
                <img
                  src="img/add-photo.svg"
                  alt="task picture"
                  class="card__img"
                />
              </label>

              <div class="card__colors-inner">
                <h3 class="card__colors-title">Color</h3>
                <div class="card__colors-wrap">
                  <input
                    type="radio"
                    id="color-black-1"
                    class="card__color-input card__color-input--black visually-hidden"
                    name="color"
                    value="black"
                    ${this._state.color === `black` ? `checked` : ``}
                  />
                  <label
                    for="color-black-1"
                    class="card__color card__color--black"
                  >black</label
                  >
                  <input
                    type="radio"
                    id="color-yellow-1"
                    class="card__color-input card__color-input--yellow visually-hidden"
                    name="color"
                    value="yellow"
                    ${this._state.color === `yellow` ? `checked` : ``}

                  />
                  <label
                    for="color-yellow-1"
                    class="card__color card__color--yellow"
                  >yellow</label
                  >
                  <input
                    type="radio"
                    id="color-blue-1"
                    class="card__color-input card__color-input--blue visually-hidden"
                    name="color"
                    value="blue"
                    ${this._state.color === `blue` ? `checked` : ``}

                  />
                  <label
                    for="color-blue-1"
                    class="card__color card__color--blue"
                  >blue</label
                  >
                  <input
                    type="radio"
                    id="color-green-1"
                    class="card__color-input card__color-input--green visually-hidden"
                    name="color"
                    value="green"
                    ${this._state.color === `green` ? `checked` : ``}

                  />
                  <label
                    for="color-green-1"
                    class="card__color card__color--green"
                  >green</label
                  >
                  <input
                    type="radio"
                    id="color-pink-1"
                    class="card__color-input card__color-input--pink visually-hidden"
                    name="color"
                    value="pink"
                    ${this._state.color === `pink` ? `checked` : ``}

                  />
                  <label
                    for="color-pink-1"
                    class="card__color card__color--pink"
                  >pink</label
                  >
                </div>
              </div>
            </div>

            <div class="card__status-btns">
              <button class="card__save" type="submit">save</button>
              <button class="card__delete" type="button">delete</button>
            </div>
          </div>
        </form>
      </article>
    `.trim();
  }

  _onArchivedButtonClick(ev) {
    ev.preventDefault();
    this._state.isArchived = !this._state.isArchived;
    this._state.archivedDate = this._state.isArchived ? Date.now() : null;
    this.updateComponent(ev.target.closest(`.card`));
  }

  _onDateButtonClick(ev) {
    ev.preventDefault();
    this._state.isDate = !this._state.isDate;
    this.updateComponent(ev.target.closest(`.card`));
  }

  _onRepeatButtonClick(ev) {
    ev.preventDefault();
    this._state.isRepeated = !this._state.isRepeated;
    this.updateComponent(ev.target.closest(`.card`));
  }

  _onFavoritesButtonClick(ev) {
    ev.preventDefault();
    this._state.isFavorite = !this._state.isFavorite;
    this.updateComponent(ev.target.closest(`.card`));
  }

  _onColorChange(ev) {
    ev.preventDefault();
    this._state.color = ev.target.value;
    this.updateComponent(ev.target.closest(`.card`));
  }

  _onRepeatingDaysChange(ev) {
    ev.preventDefault();
    this._state.repeatingDays[ev.target.value] = !this._state.repeatingDays[ev.target.value];
  }

  _onTitleChange(ev) {
    ev.preventDefault();
    this._state.title = ev.target.value;
  }

  destroyFlatpickr() {
    if (this.calendar) {
      this.calendar.destroy();
      this.cardTime.destroy();
    }
  }

  createCardEditMapper(target) {
    for (const day in target.repeatingDays) {
      if (target.repeatingDays.hasOwnProperty(day)) {
        target.repeatingDays[day] = false;
      }
    }

    return {
      'text': (value) => {
        target.title = value;
      },
      'repeat': (value) => {
        target.repeatingDays[value] = true;
      },

      'hashtag-input': (value) => {
        if (value) {
          target.tags = target.tags.concat(value.split(` `));
        }
      },

      'color': (value) => {
        target.color = value;
      },
    };
  }

  _getFormData(form) {
    const formData = new FormData(form.querySelector(`.card__form`));

    const cardEditMapper = this.createCardEditMapper(this._state);

    for (const pair of formData.entries()) {
      const [property, value] = pair;
      if (cardEditMapper[property]) {
        cardEditMapper[property](value);
      }
    }
  }

  _onSubmitButtonClick(ev) {
    ev.preventDefault();
    const element = ev.target.closest(`.card`);
    this._getFormData(element);
    element.replaceWith(new Card(this._state).render());
    this.destroyFlatpickr();
  }

  bind() {
    this._fragment.querySelector(`.card__btn--edit`)
      .addEventListener(`click`, this._onSubmitButtonClick);
    this._fragment.querySelector(`.card__form`)
      .addEventListener(`submit`, this._onSubmitButtonClick);
    this._fragment.querySelector(`.card__btn--archive`)
      .addEventListener(`click`, this._onArchivedButtonClick);
    this._fragment.querySelector(`.card__btn--favorites`)
      .addEventListener(`click`, this._onFavoritesButtonClick);
    this._fragment.querySelector(`.card__date-deadline-toggle`)
      .addEventListener(`click`, this._onDateButtonClick);
    this._fragment.querySelector(`.card__repeat-toggle`)
      .addEventListener(`click`, this._onRepeatButtonClick);
    this._fragment.querySelector(`.card__text`)
      .addEventListener(`input`, this._onTitleChange);
    this._fragment.querySelector(`.card__colors-wrap`)
      .addEventListener(`change`, this._onColorChange);
    this._fragment.querySelector(`.card__repeat-days-inner`)
      .addEventListener(`change`, this._onRepeatingDaysChange);

    if (this._state.isDate) {
      this.calendar = flatpickr(this._fragment.querySelector(`.card__date`), {
        altInput: true,
        altFormat: `j F`,
        dateFormat: `j F`,
      });
      this.cardTime = flatpickr(this._fragment.querySelector(`.card__time`), {
        enableTime: true,
        noCalendar: true,
        altInput: true,
        altFormat: `h:i K`,
        dateFormat: `h:i K`,
      });
    } else {
      this.destroyFlatpickr();
    }
  }
}

export default CardEdit;
