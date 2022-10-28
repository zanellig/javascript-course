'use strict';

/* LEcture #72
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = Number(document.querySelector('.score').textContent);

let highScore = Number(document.querySelector('.highscore').textContent);

const setMessage = function (message) {
  dqS('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When guess is incorrect.
  const a = function () {
    if (guess !== secretNumber) {
      score--;
      document.querySelector('.score').textContent = score;
    }
  };

  if (!guess) {
    setMessage('⛔ Please input a number...');
    // When there's no input.
  }
  if (score > 1) {
    if (guess > secretNumber) {
      setMessage('📈 Too high!');
      a(); // When guess is too high
    } else if (guess < secretNumber) {
      setMessage('📉 Too low!');
      a(); // When guess is too low.
    } else if (guess === secretNumber) {
      document.querySelector('.number').textContent = secretNumber;
      setMessage('🎉 Correct Number!');
      highScore = score;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem'; // When guess is correct.
      if (
        highScore > Number(document.querySelector('.highscore').textContent)
      ) {
        document.querySelector('.highscore').textContent = highScore;
      }
    } // Highscore manipulation.
  } else {
    a();
    setMessage('💥 You lost the game!');
  } // When score reaches 0.
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  setMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
});
