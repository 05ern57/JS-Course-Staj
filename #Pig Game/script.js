'use strict';

const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const cur_1 = document.querySelector('#current--1');
const cur_0 = document.querySelector('#current--0');
const curr_score = document.querySelector('.player--active .current-score');
const player_0 = document.querySelector('.player--0');
const player_1 = document.querySelector('.player--1');
const score_0 = document.querySelector('#score--0');
const score_1 = document.querySelector('#score--1');
const active_player = document.querySelector('.player--active');

console.log(cur_0);

let random = Math.trunc(Math.random() * 6 + 1);
let current_score = 0;
let scoreOfPlayer0 = 0;
let scoreOfPlayer1 = 0;

function changeActivePlayer() {
  if (player_0.classList.contains('player--active')) {
    player_0.classList.remove('player--active');
    player_1.classList.add('player--active');
  } else {
    player_1.classList.remove('player--active');
    player_0.classList.add('player--active');
  }
}
function restartGame() {
  scoreOfPlayer0 = 0;
  scoreOfPlayer1 = 0;

  if (player_0.classList.contains('player--winner')) {
    player_0.classList.remove('player--winner');
    player_0.classList.remove('player--active');
    player_1.classList.add('player--active');
  } else {
    player_1.classList.remove('player--winner');
    player_0.classList.add('player--active');
  }
  holdBtn.disabled = false;
  rollBtn.disabled = false;
}

function showCurrentScore(current_score) {
  if (player_0.classList.contains('player--active')) {
    cur_0.textContent = String(current_score);
  } else {
    cur_1.textContent = String(current_score);
  }
}

function rollDice() {
  console.log(random);
  if (random !== 1) {
    dice.src = `dice-${random}.png`;
    current_score = current_score + random;
    showCurrentScore(current_score);
  } else {
    dice.src = `dice-${random}.png`;
    current_score = 0;
    showCurrentScore(current_score);
    changeActivePlayer();
  }
  random = Math.trunc(Math.random() * 6 + 1);
}
function disableButtons() {
  holdBtn.disabled = true;
  rollBtn.disabled = true;
}
function winner() {
  if (scoreOfPlayer0 >= 100) {
    player_0.classList.remove('player--active');
    player_0.classList.add('player--winner');
    disableButtons();
  } else if (scoreOfPlayer1 >= 100) {
    player_1.classList.remove('player--active');
    player_1.classList.add('player--winner');
    disableButtons();
  }
}

function holdScore() {
  if (player_0.classList.contains('player--active')) {
    scoreOfPlayer0 += current_score;
    current_score = 0;
    winner();
    cur_0.textContent = String(current_score);
    score_0.textContent = String(scoreOfPlayer0);
    changeActivePlayer();
  } else {
    scoreOfPlayer1 += current_score;
    current_score = 0;
    winner();
    cur_1.textContent = String(current_score);
    score_1.textContent = String(scoreOfPlayer1);
    changeActivePlayer();
  }
}

rollBtn.addEventListener('click', rollDice);
holdBtn.addEventListener('click', holdScore);
newBtn.addEventListener('click', restartGame);
