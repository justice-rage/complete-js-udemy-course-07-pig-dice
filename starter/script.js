'use strict';

// selecting elements
const score0Element = document.querySelector('#score--0');
const score1Element = document.querySelector('#score--1');
const current0Element = document.querySelector('#current--0');
const current1Element = document.querySelector('#current--1');

const diceElement = document.querySelector('.dice');
const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

let currentScore = 0;

// rolling dice functionality
buttonRoll.addEventListener('click', function() {
  // 1. Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  // 2. Display the dice
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${dice}.png`
  // 3. Check for rolled 1: if true, switch to next player
  if (dice !== 1) {
    // add dice to current score
    currentScore += dice;
    current0Element.textContent = currentScore; // change later

  } else {
    // switch to next player
  }
})