function renderFilter() {
  let container = document.querySelector(`.filter`);

  container.innerHTML = ``;

  const fragment = document.createDocumentFragment();

  filtersProps.forEach((props) => {
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
    fragment.appendChild(newElement.content);
  });

  container.appendChild(fragment);
}

export default renderFilter;
