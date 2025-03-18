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

export const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

export const getRandomProgression = (start, length, step) => {
  let i = 0;
  let progressionStepValue = start;
  const progression = [];
  while (i < length) {
    progression.push(progressionStepValue);
    progressionStepValue += step;
    i += 1;
  }
  return progression;
};

export const isPrime = (num) => {
  if (num < 3) {
    return true;
  }
  for (let i = 2; i <= num; i += 1) {
    if (num % i === 0 && i < num) {
      return false;
    }
  }
  return true;
};
