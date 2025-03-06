#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { askingName, getRandomValue, getRandomInt } from '../index.js';

console.log('Welcome to the Brain Games!');
const username = askingName();
console.log('What is the result of the expression?');

const array = ['*', '-', '+'];
let i = 0;
let randomExpression = `${getRandomInt(1, 50)} ${getRandomValue(array)} ${getRandomInt(1, 50)}`;

while (i < 3) {
  console.log(`Question: ${randomExpression}`);
  const answer = readlineSync.question('Your answer: ');
  i += 1;
  randomExpression = `${getRandomInt(1, 50)} ${getRandomValue(array)} ${getRandomInt(1, 50)}`;
}
