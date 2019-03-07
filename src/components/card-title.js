function cardTitle(props) {
  return `
      <div class="card__textarea-wrap">
        <label>
          <textarea
            class="card__text"
            placeholder="Start typing your text here..."
            name="text"
          >${props}</textarea>
        </label>
      </div>
    `;
}

export default cardTitle;
