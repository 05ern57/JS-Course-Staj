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

let current_score, scores, activePlayer, isGameRemaining;

function restartGame() {
  scores = [0, 0];
  current_score = 0;
  activePlayer = 0;
  isGameRemaining = true;

  score_0.textContent = 0;
  score_1.textContent = 0;
  cur_0.textContent = 0;
  cur_1.textContent = 0;

  player_0.classList.remove('player--winner');
  player_1.classList.remove('player--winner');
  player_0.classList.add('player--active');
  player_1.classList.remove('player--active');
}
restartGame();

function switchPlayers() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  current_score = 0;
  player_0.classList.toggle('player--active');
  player_1.classList.toggle('player--active');
}

function rollDice() {
  if (isGameRemaining) {
    // 1. Generating a random dice roll
    const random = Math.trunc(Math.random() * 6 + 1);
    //2. showing the result with the dice
    dice.src = `dice-${random}.png`;

    if (random !== 1) {
      current_score += random;
      document.getElementById(`current--${activePlayer}`).textContent =
        String(current_score);
      //cur_0.textContent = String(current_score);
      //its waste of time do dynamicly instead of cur_0 way
    } else {
      switchPlayers();
      //toggle() method checks the classname that you entered and if the classList has the classname than it removes the class if it has not than it adds the classname into a classList
    }
  }
}

function holdScore() {
  if (isGameRemaining) {
    //1. Addcurrent score to active player's score
    scores[activePlayer] += current_score;

    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. Check if player's score is >= 100
    //finish the game
    if (scores[activePlayer] >= 10) {
      isGameRemaining = false;
      document.querySelector(`#current--${activePlayer}`).textContent = '0';
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.toggle('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      //Switch to next player
      switchPlayers();
    }
  }
}

rollBtn.addEventListener('click', rollDice);
holdBtn.addEventListener('click', holdScore);
newBtn.addEventListener('click', restartGame);
