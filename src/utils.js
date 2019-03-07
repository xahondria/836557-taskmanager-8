const utils = {
  getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  },

  getRandomElementsFromArray(arr, newArrLength) {
    if (newArrLength > arr.length) {
      throw new RangeError(`getRandomElementsFromArray:  more elements taken than available`);
    }

    const randomArrIndexes = new Set();

    while (randomArrIndexes.size < newArrLength) {
      randomArrIndexes.add(Math.floor(Math.random() * arr.length));
    }
    const newArr = new Array(newArrLength);

    for (let el of [...randomArrIndexes]) {
      newArr[[...randomArrIndexes].indexOf(el)] = arr[el];
    }

    return newArr;
  },

  renderElements(container, elements) {
    elements.map((el) => {
      container.insertAdjacentHTML(`beforeend`, el);
    });

  },
};

export default utils;
