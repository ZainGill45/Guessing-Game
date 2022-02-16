'use strict';

const successColor = "#51cf66";
const lowColor = "#4dabf7";
const highColor = "#f03e3e";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 0;
let highscore = 0;
let firstRun = true;
let gameOver = false;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const CheckGuess = () => {
  if (gameOver)
    return;

  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('.guess').value = null;

  if (!guess) {
    displayMessage('Not A Valid Input');
  } else if (guess === secretNumber) {
    score++;
    displayMessage('Nice You Got It');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = successColor;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.score').textContent = score;
    if (score < highscore || firstRun) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
      firstRun = false;
    }
    gameOver = true;
  } else if (guess !== secretNumber) {
    if (guess > secretNumber) {
      displayMessage('Too High Man Calm Down!');
      document.querySelector("body").style.backgroundColor = highColor;
    } else if (guess < secretNumber) {
      displayMessage('Too low Higher Is Always Better!');
      document.querySelector("body").style.backgroundColor = lowColor;
    }
    score++;
    document.querySelector('.score').textContent = score;
  }
};

document.querySelector('.again').addEventListener('click', function () {
  if (!gameOver)
    return;

  gameOver = false;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 0;
  displayMessage('Lower Your Score Guess Again');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', CheckGuess);
