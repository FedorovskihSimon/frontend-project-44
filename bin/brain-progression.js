#!/usr/bin/env node
import { askingName } from '../index.js';
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const username = askingName();
console.log('What number is missing in the progression?');
let i = 0

while (i < 3) {
    console.log(`Question: ${a}`)
    const answer = console.log(readlineSync.question('Your answer: '))
}