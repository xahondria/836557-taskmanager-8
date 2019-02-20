'use strict';

class Filter {
  constructor() {
    this.container = document.querySelector(`.filter`);

    this.filtersProps = [
      {
        inputAttrs: {
          type: `radio`,
          id: `filter__all`,
          class: `filter__input visually-hidden`,
          name: `filter`,
          isChecked: `checked`,
          isDisabled: ``,
        },
        labelAttrs: {
          for: `filter__all`,
          class: `filter__label`,
        },
        labelText: `ALL`,
        spanAttrs: {
          class: `filter__all-count`,
        },
        spanText: `15`,
      },
      {
        inputAttrs: {
          type: `radio`,
          id: `filter__overdue`,
          class: `filter__input visually-hidden`,
          name: `filter`,
          isChecked: ``,
          isDisabled: `disabled`,
        },
        labelAttrs: {
          for: `filter__overdue`,
          class: `filter__label`,
        },
        labelText: `OVERDUE`,
        spanAttrs: {
          class: `filter__overdue-count`,
        },
        spanText: `0`,
      },
      {
        inputAttrs: {
          type: `radio`,
          id: `filter__today`,
          class: `filter__input visually-hidden`,
          name: `filter`,
          isChecked: ``,
          isDisabled: `disabled`,
        },
        labelAttrs: {
          for: `filter__today`,
          class: `filter__label`,
        },
        labelText: `TODAY`,
        spanAttrs: {
          class: `filter__today-count`,
        },
        spanText: `0`,
      },
      {
        inputAttrs: {
          type: `radio`,
          id: `filter__favorites`,
          class: `filter__input visually-hidden`,
          name: `filter`,
          isChecked: ``,
          isDisabled: ``,
        },
        labelAttrs: {
          for: `filter__favorites`,
          class: `filter__label`,
        },
        labelText: `FAVORITES`,
        spanAttrs: {
          class: `filter__favorites-count`,
        },
        spanText: `7`,
      },
      {
        inputAttrs: {
          type: `radio`,
          id: `filter__repeating`,
          class: `filter__input visually-hidden`,
          name: `filter`,
          isChecked: ``,
          isDisabled: ``,
        },
        labelAttrs: {
          for: `filter__repeating`,
          class: `filter__label`,
        },
        labelText: `Repeating`,
        spanAttrs: {
          class: `filter__repeating-count`,
        },
        spanText: `2`,
      },
      {
        inputAttrs: {
          type: `radio`,
          id: `filter__tags`,
          class: `filter__input visually-hidden`,
          name: `filter`,
          isChecked: ``,
          isDisabled: ``,
        },
        labelAttrs: {
          for: `filter__tags`,
          class: `filter__label`,
        },
        labelText: `Tags`,
        spanAttrs: {
          class: `filter__tags-count`,
        },
        spanText: `6`,
      },
      {
        inputAttrs: {
          type: `radio`,
          id: `filter__archive`,
          class: `filter__input visually-hidden`,
          name: `filter`,
          isChecked: ``,
          isDisabled: ``,
        },
        labelAttrs: {
          for: `filter__archive`,
          class: `filter__label`,
        },
        labelText: `ARCHIVE`,
        spanAttrs: {
          class: `filter__archive-count`,
        },
        spanText: `115`,
      },
    ];
  }

  render() {
    this.container.innerHTML = ``;
    this.fragment = document.createDocumentFragment();

    this.filtersProps.forEach((props) => {
      const newElement = document.createElement(`template`);
      newElement.innerHTML = `
        <input 
          type=${props.inputAttrs.type} 
          id=${props.inputAttrs.id} 
          class=${props.inputAttrs.class} 
          name=${props.inputAttrs.name}  
          ${props.inputAttrs.isChecked}
          ${props.inputAttrs.isDisabled}
        />
        <label 
          for=${props.labelAttrs.for}
          class=${props.labelAttrs.class}
        >
          ${props.labelText}
          <span class=${props.spanAttrs.class}>${props.spanText}</span>
        </label>
      `;
      this.fragment.appendChild(newElement.content);
    });

    this.container.appendChild(this.fragment);
  }

}

const filter = new Filter();
filter.render();


class Card {
  constructor() {
    this.container = document.querySelector(`.board__tasks`);
    this.filtersProps = [
      {},
    ];
  }

  render() {
    this.container.innerHTML = ``;
    this.fragment = document.createDocumentFragment();

    this.filtersProps.forEach((props) => {
      const newElement = document.createElement(`template`);
      newElement.innerHTML = `
          <article class="card card--edit card--black">
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
                    class="card__btn card__btn--favorites card__btn--disabled"
                  >
                    favorites
                  </button>
                </div>

                <div class="card__color-bar">
                  <svg width="100%" height="10">
                    <use xlink:href="#wave"></use>
                  </svg>
                </div>

                <div class="card__textarea-wrap">
                  <label>
                    <textarea
                      class="card__text"
                      placeholder="Start typing your text here..."
                      name="text"
                    >
                      This is example of new task, you can add picture, set date and time, add tags.
                    </textarea>
                  </label>
                </div>

                <div class="card__settings">
                  <div class="card__details">
                    <div class="card__dates">
                      <button class="card__date-deadline-toggle" type="button">
                        date: <span class="card__date-status">no</span>
                      </button>

                      <fieldset class="card__date-deadline" disabled>
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
                        repeat:<span class="card__repeat-status">no</span>
                      </button>

                      <fieldset class="card__repeat-days" disabled>
                        <div class="card__repeat-days-inner">
                          <input
                            class="visually-hidden card__repeat-day-input"
                            type="checkbox"
                            id="repeat-mo-1"
                            name="repeat"
                            value="mo"
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
                            checked
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
                            checked
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
                            checked
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
                        checked
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
      `;
      this.fragment.appendChild(newElement.content);
    });

    this.container.appendChild(this.fragment);
  }

}

const card = new Card();
card.render();
