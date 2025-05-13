#!/usr/bin/env node
import readlineSync from 'readline-sync'
import { askingName, getRandomInt, getRandomProgression } from '../index.js'

console.log('Welcome to the Brain Games!')
const username = askingName()
console.log('What number is missing in the progression?')
let i = 0

while (i < 3) {
  const length = getRandomInt(5, 15)
  const randomProgression = getRandomProgression(getRandomInt(1, 15), length, getRandomInt(2, 4))
  const hiddenElement = getRandomInt(0, length)
  const hiddenNumber = randomProgression[hiddenElement]
  randomProgression[hiddenElement] = '..'
  console.log(`Question: ${randomProgression.join(' ')}`)
  const answer = readlineSync.question('Your answer: ')

  if (Number(answer) !== hiddenNumber) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${hiddenNumber}'.`)
    console.log(`Let's try again, ${username}!`)
    break;
  }
  console.log('Correct!')

  i += 1
  if (i === 3) {
    console.log(`Congratulations, ${username}!`)
  }
}
