import readlineSync from 'readline-sync';

export const askingName = () => {
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  return name;
};
