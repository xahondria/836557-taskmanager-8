function getRandomElements(arr, newArrMaxLength) {
  arr = arr.slice();
  let newArr = [];
  const newArrLength = Math.floor(Math.random() * newArrMaxLength);

  for (let i = 0; i <= newArrLength; i++) {
    const randomIdx = Math.floor(Math.random() * arr.length);
    newArr[i] = arr[randomIdx];
    arr.splice(randomIdx, 1);
  }

  return newArr;
}

export {getRandomElements};
