import readlineSync from 'readline-sync';

export const askingName = () => {
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  return name;
};

export const getRandomInt = (minNum, maxNum) => {
  const min = Math.ceil(minNum);
  const max = Math.floor(maxNum);

  return Math.floor(Math.random() * (max - min) + min);
};

export const getRandomValue = (array) => {
  const randomElement = Math.floor(Math.random() * array.length);

  return array[randomElement];
};
