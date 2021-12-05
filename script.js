const buttonNew = document.querySelector('.btn--new');

const player1Score = document.querySelector('#player--0');
const player2Score = document.querySelector('#player--1');
const player1Current = document.querySelector('#current--0');
const player2Current = document.querySelector('#current--1');

let scoreBoard = []
let currentScore = 0;
let activePlayer;
let isGameRunning

const startGame = function() {
    scoreBoard = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    isGameRunning = true;

    player1Score.textContent = 0;
    player2Score.textContent = 0;
    player1Current.textContent = 0;
    player2Current.textContent = 0; 
};
startGame();

buttonNew.addEventListener('click', function() {
  startGame(); 
});

