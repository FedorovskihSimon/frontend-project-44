#!/usr/bin/env node
import Random, { nativeMath } from 'random-js';
import readlineSync from 'readline-sync';
import { askingName } from '../index.js';

console.log('Welcome to the Brain Games!');
const username = askingName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let randomNumber = Random.integer(1, 50)(nativeMath);
let i = 0;
let trueness;
let correctAnswer;

while (i < 3) {
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');
  const isEven = randomNumber % 2 === 0;
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
  } else if (isEven !== trueness) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${username}!`);
    break;
  }
  i += 1;
  randomNumber = Random.integer(1, 50)(nativeMath);
  if (i === 3) {
    console.log(`Congratulations, ${username}!`);
  }
}
