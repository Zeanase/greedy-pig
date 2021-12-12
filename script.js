const buttonNew = document.querySelector('.btn--new');
const holdButton = document.querySelector('.btn--hold');
const rollDice = documen.querySelector('btn--roll');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

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

    player1.classList.add('player--active');
    player2.classList.remove('player--active');
    player1.classList.remove('player--winner');
    player2.classList.remove('player--winner');
};
const startGame = () => {

};
startGame();

const switchPlayer = () => {

};

const rollTheDice = () => {
  if (isGameRunning === true) {
  const dice = math.trinc(Math.random() * 6)
  }
};

const holdMyScore = () => {

};

rollDice.addEventListener('click', function() {
  rollTheDice();
});
holdButton.addEventListener('click',function() {
  holdMyScore();
});
buttonNew.addEventListener('click', function() {
  startGame(); 
});