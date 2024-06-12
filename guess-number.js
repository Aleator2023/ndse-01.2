#!/usr/bin/env node

const readline = require('readline');

const min = 0;
const max = 100;

const numberToGuess = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(`Загадано число в диапазоне от ${min} до ${max}`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askQuestion = () => {
  rl.question('', (answer) => {
    const guess = parseInt(answer, 10);

    if (isNaN(guess)) {
      console.log('Пожалуйста, введите корректное число.');
      askQuestion();
      return;
    }

    if (guess < numberToGuess) {
      console.log('Больше');
      askQuestion();
    } else if (guess > numberToGuess) {
      console.log('Меньше');
      askQuestion();
    } else {
      console.log(`Отгадано число ${numberToGuess}`);
      rl.close();
    }
  });
};

askQuestion();
