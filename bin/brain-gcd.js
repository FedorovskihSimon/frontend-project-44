#!/usr/bin/env node
import { askingName } from '../index.js';
import readlineSync from 'readline-sync';
import { getRandomInt } from '../index.js';
import { gcd } from '../index.js';

console.log('Welcome to the Brain Games!');
const username = askingName();
console.log('Find the greatest common divisor of given numbers.');
let i = 0;
let randomExpression = [getRandomInt(1, 100), getRandomInt(1, 100)];

while (i < 3) {
    console.log(`Question: ${randomExpression[0]} ${randomExpression[1]}`);
    const answer = readlineSync.question('Your answer: ')
    const correctAnswer = gcd(...randomExpression);

    if (Number(answer) !== correctAnswer) {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${username}!`);
        break;
    }
    console.log('Correct!');

    i += 1;
    if (i === 3) {
        console.log(`Congratulations, ${username}!`)
    }
    randomExpression = [getRandomInt(1, 100), getRandomInt(1, 100)];
}