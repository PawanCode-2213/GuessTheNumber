const randomNumber = (parseInt(Math.random() * 100 + 1));

const submit = document.querySelector('#subt');
const userValue = document.querySelector('#guess');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultPass');

const p = document.createElement('p');

let preGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function(event) {
    event.preventDefault();
    const guess = parseInt(userValue.value);
    validateGuess(guess);

  })
}

function validateGuess(guess) { // Check Value if betweeen 1 and 100.
  if (isNaN(guess)) {
    alert('Please enter a valid number')
  } else if (guess < 1) {
    alert('Please enter a number greater than 1')
  } else if (guess > 100) {
    alert('Please enter a number less than 100')
  } else {
    preGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over! Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) { // Check if guess is correct.
  if (guess === randomNumber) {
    displayMessage('You guessed it right');

  } else if (guess < randomNumber) {
    displayMessage('Number is too low');

  } else if (guess > randomNumber) {
    displayMessage('number is too high');
  }

}

function displayGuess(guess) { // Display guess in guessSlot.
  userValue.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;

}

function displayMessage(message) { // Display message in lowOrHigh.
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userValue.value = '';
  userValue.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame"> Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame()

}

function startGame() {
  const newGameBtn = document.querySelector('#newGame')
  newGameBtn.addEventListener('click', function(e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    preGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userValue.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  })

}

