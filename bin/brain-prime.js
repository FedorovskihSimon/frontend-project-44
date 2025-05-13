#!/usr/bin/env node
import readlineSync from 'readline-sync'
import { askingName, getRandomInt, isPrime } from '../index.js'

console.log('Welcome to the Brain Games!')
const username = askingName()
console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

let randomNum = getRandomInt(3, 20)
let trueness
let correctAnswer
let i = 0

while (i < 3) {
  console.log(`Question: ${randomNum}`)
  const answer = readlineSync.question('Your answer: ')
  const isPrimeNumber = isPrime(randomNum)

  switch (answer) {
    case 'yes':
      trueness = true
      correctAnswer = 'no'
      break
    case 'no':
      trueness = false
      correctAnswer = 'yes'
      break

    default:
      correctAnswer = 'no'
  }

  if (trueness !== isPrimeNumber) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
    console.log(`Let's try again, ${username}!`)
    break
  }
  console.log('Correct!')

  i += 1
  randomNum = getRandomInt(3, 20)
  if (i === 3) {
    console.log(`Congratulations, ${username}!`)
  }
}
