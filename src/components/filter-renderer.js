import DATA from '../mock/filters-data';

function renderFilter() {
  let container = document.querySelector(`.filter`);

  container.innerHTML = ``;

  const fragment = document.createDocumentFragment();

  DATA.forEach((props) => {
    const newElement = document.createElement(`template`);
    newElement.innerHTML = `
        <input
          type="radio"
          id=${props.id}
          class="filter__input visually-hidden"
          name="filter"
          ${props.isChecked}
          ${props.isDisabled}
        />
        <label
          for=${props.id}
          class="filter__label"
        >
          ${props.filterName}
          <span class="${props.id}-count">
            ${props.amountOfElements}
          </span>
        </label>
      `;
    fragment.appendChild(newElement.content);
  });

  container.appendChild(fragment);
}

export default renderFilter;
