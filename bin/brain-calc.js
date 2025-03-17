#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { askingName, getRandomValue, getRandomInt } from '../index.js';

console.log('Welcome to the Brain Games!');
const array = ['*', '-', '+'];
const username = askingName();
let i = 0;
let randomExpression = `${getRandomInt(1, 50)} ${getRandomValue(array)} ${getRandomInt(1, 50)}`;
const correctAnswer = eval(randomExpression);

while (i < 3) {
  console.log(`Question: ${randomExpression}`);
  const answer = readlineSync.question('Your answer: ');

  if (Number(answer) !== eval(randomExpression)) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${username}!`);
    break;
  }

  console.log('Correct!');
  i += 1;
  randomExpression = `${getRandomInt(1, 50)} ${getRandomValue(array)} ${getRandomInt(1, 50)}`;

  if (i === 3) {
    console.log(`Congratulations, ${username}!`);
  }
}
