import utils from "../utils";

function renderFilter(props) {
  const template = `
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
      `.trim();

  return utils.createFragment(template);
}

export default renderFilter;
