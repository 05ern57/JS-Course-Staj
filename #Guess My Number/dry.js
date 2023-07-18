'use strict';

const between = document.querySelector('.between');
const again_btn = document.querySelector('.again');
const number = document.querySelector('.number');
const left = document.querySelector('.left');
const guess = document.querySelector('.guess');
const check_btn = document.querySelector('.check');
const right = document.querySelector('.right');
const message = document.querySelector('.message');
const label_score = document.querySelector('.label-score');
const label_highscore = document.querySelector('.label-highscore');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
//İnstead of using these we can simply use functions, for example when we want to change the message we use functions with a parameter that is used as a message

let random = Math.trunc(Math.random() * 21);
let highscore_num = 0;
let score_num = 20;

function enterMessage(message) {
  message.textContent = this.message;
}

function checkButton() {
  const g = Number(document.querySelector('.guess').value);

  //when there is not input
  if (!g) {
    message.textContent = 'No number entered';
    guess.value = '';
    guess.focus();
    //when input less than the secret_number
  } else if (g === random) {
    score_num--;
    message.textContent = 'Correct';
    guess.value = '';
    number.textContent = String(random);
    guess.disabled = true;
    check_btn.disabled = true;
    // document.querySelector('body').classList.add('color-1');
    document.querySelector('body').style.backgroundColor = '#42bb5b';
    document.querySelector('.number').style.width = '30rem';

    //submitting the highscore
    if (score_num > highscore_num) {
      highscore.textContent = String(score_num);
    }
    // when input is different than secret number
  } else if (g !== random) {
    if (score_num > 1) {
      score_num--;
      message.textContent =
        g < random
          ? 'Number is higher then your guess'
          : 'Number is lower than your guess';
      guess.value = '';
      guess.focus();
    } else {
      score_num--;
      message.textContent = 'You lost the game';
      number.textContent = String(random);
      guess.disabled = true;
      check_btn.disabled = true;
      guess.value = '';
    }
  }
  score.textContent = String(score_num);
}

check_btn.addEventListener('click', checkButton);

again_btn.addEventListener('click', function () {
  random = Math.trunc(Math.random() * 21);
  guess.disabled = false;
  check_btn.disabled = false;
  message.textContent = 'Start guessing...';
  score.textContent = '20';
  number.textContent = '?';
  score_num = 20;
  //document.querySelector('body').classList.remove('color-1');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem'; //style values always must be string values
});
