import cardControls from "./card-controls";
import cardColorBar from "./card-color-bar";
import cardTitle from "./card-title";
import cardSettings from "./card-settings";
import cardStatusBtns from "./card-status-btns";

class Card {
  constructor(data) {
    this.state = {
      title: data.title,
      dueDate: data.dueDate,
      tags: data.tags,
      picture: data.picture,
      color: data.color,
      repeatingDays: data.repeatingDays,
      isFavorite: data.isFavorite,
      isDone: data.isDone,
      isEdit: false,
    };
  }

  render() {
    return `
        <article class="card card--${this.state.color}">
          <form class="card__form" method="get">
            <div class="card__inner">
              ${cardControls()}
              ${cardColorBar()}
              ${cardTitle(this.state.title)}
              ${cardSettings(this.state)}
              ${cardStatusBtns()}
            </div>
          </form>
        </article>
      `.trim();
  }

}

export default Card;
