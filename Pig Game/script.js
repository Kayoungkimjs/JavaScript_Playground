"use strict";

const player0E1 = document.querySelector(".player--0");
const player0E2 = document.querySelector(".player--1");

const score1 = document.querySelector("#score--0");
const score2 = document.querySelector("#score--1"); // = document.getElementByID('score--1');

const diceBtn = document.querySelector(".dice");
const newDice = document.querySelector(".btn--new");
const rollDice = document.querySelector(".btn--roll");
const holdDice = document.querySelector(".btn--hold");

const currentLabel = document.querySelector("current-label");

const currentScore1 = document.querySelector("#current--0");
const currentScore2 = document.querySelector("#current--1");

// Starting conditional (초기값 설정)

let scores, currentScore, activePlayer, playing; //scope의 문제로 밖에 정의해 줘야 전체 적용됨

const init = function () {
  //reusable piece of code
  scores = [0, 0];
  currentScore = 0; // 주사위를 던져서 나온 수 (random number, invisible to the UI)
  activePlayer = 0; // de-active player =1
  playing = true; // not playing = false (게임 시작, 끝낼 때 유용!)

  score1.textContent = 0;
  score2.textContent = 0;
  currentScore1.textContent = 0;
  currentScore2.textContent = 0;

  diceBtn.classList.add("hidden"); // .classList = classlist 전체 접근
  player0E1.classList.remove("player--winner");
  player0E2.classList.remove("player--winner");
  player0E1.classList.add("player--active");
  player0E2.classList.remove("player--active");
};

init(); //road

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0; // 두개의 플레이어 ID를 하나로 쓸 수 있음
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; //reassigning the activeplayer
  player0E1.classList.toggle("player--active");
  player0E2.classList.toggle("player--active");
};

// Rolling dice
rollDice.addEventListener("click", function () {
  if (playing) {
    // 1. Generating a random number
    const dice = Math.trunc(Math.random() * 6) + 1; //random number variable setting(dice)
    // 2. Display the dice
    diceBtn.classList.remove("hidden");
    diceBtn.src = `dice-${dice}.png`;
    if (dice !== 1) {
      //Add dice to the current score
      currentScore += dice;
      //store the scores on 'current' *값을 어디에, 세이브!
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
      //currentScore1.textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

// Holding current score
holdDice.addEventListener("click", function () {
  if (playing) {
    // add current score + player's score
    scores[activePlayer] += currentScore;
    // store the scores on 'score' *값을 어디에, 세이브!
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // if total score >= 100
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceBtn.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});

// Resetting the game
newDice.addEventListener("click", init);
