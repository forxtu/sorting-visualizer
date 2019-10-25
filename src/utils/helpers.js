export const generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

export const generateArray = length => {
  const array = [];

  while (array.length < length) {
    array.push(generateRandomNumber(5, 500));
  }

  return array;
};
