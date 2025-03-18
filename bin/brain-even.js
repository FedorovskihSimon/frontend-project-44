#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { askingName, getRandomInt } from '../index.js';

console.log('Welcome to the Brain Games!');
const username = askingName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let randomNumber = getRandomInt(1, 50);
let i = 0;
let trueness;
let correctAnswer;

while (i < 3) {
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');
  const isEven = randomNumber % 2 === 0;
  // eslint-disable-next-line default-case
  switch (answer) {
    case 'yes':
      trueness = true;
      correctAnswer = 'no';
      break;
    case 'no':
      trueness = false;
      correctAnswer = 'yes';
      break;
  }
  if (isEven === trueness) {
    console.log('Correct!');
  }
  if (isEven !== trueness) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${username}!`);
    break;
  }
  i += 1;
  randomNumber = getRandomInt(1, 50);
  if (i === 3) {
    console.log(`Congratulations, ${username}!`);
  }
}
