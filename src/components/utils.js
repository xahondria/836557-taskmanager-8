const Utils = {
  getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  },

  getRandomElementsFromArray(arr, newArrMaxLength) {
    arr = arr.slice();
    let newArr = [];
    const newArrLength = this.getRandomInt(newArrMaxLength);
    for (let i = 0; i < newArrLength; i++) {
      const randomIdx = this.getRandomInt(arr.length);
      newArr[i] = arr[randomIdx];
      arr.splice(randomIdx, 1);
    }

    return newArr;
  },
};


export default Utils;
