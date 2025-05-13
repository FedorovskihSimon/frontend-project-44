#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { askingName, getRandomValue, getRandomInt } from '../index.js';

console.log('Welcome to the Brain Games!');
console.log('What is the result of the expression?');
const array = ['*', '-', '+'];
const username = askingName();
let randomValue = getRandomValue(array);
let randomInt1 = getRandomInt(1, 50);
let randomInt2 = getRandomInt(1, 50);
let i = 0;
let randomExpression = `${randomInt1} ${randomValue} ${randomInt2}`;
let correctAnswer;

while (i < 3) {
  switch (randomValue) {
    case '*':
      correctAnswer = randomInt1 * randomInt2;
      break;
    case '+':
      correctAnswer = randomInt1 + randomInt2;
      break;
    case '-':
      correctAnswer = randomInt1 - randomInt2;
      break;
    default:
  }

  console.log(`Question: ${randomExpression}`);
  const answer = readlineSync.question('Your answer: ');

  if (Number(answer) !== eval(randomExpression)) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${username}!`);
    break;
  }

  console.log('Correct!');
  i += 1;
  randomValue = getRandomValue(array);
  randomInt1 = getRandomInt(1, 50);
  randomInt2 = getRandomInt(1, 50);
  randomExpression = `${randomInt1} ${randomValue} ${randomInt2}`;

  if (i === 3) {
    console.log(`Congratulations, ${username}!`);
  }
}
