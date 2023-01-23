const gameForm = document.querySelector(".game-form");
const rangeInput = gameForm.querySelector(".game-range input");
const guessInput = gameForm.querySelector(".play-game input");


function onPlayGame(event) {
    event.preventDefault();

    const rangeNumber = parseInt(rangeInput.value);
    const guessNumber = parseInt(guessInput.value);
    
    localStorage.setItem("rangeNumber", rangeNumber);
    localStorage.setItem("guessNumber", guessNumber);

    const randomNumber = Math.round(Math.random() * rangeNumber);
    localStorage.setItem("randomNumber", randomNumber);

    showResult(guessNumber, randomNumber);
}

function showResult(guessNumber, randomNumber) {
    
    const status = `You chose: ${guessNumber}, the machine chose: ${randomNumber}.`;
    document.querySelector(".show-status").innerText = status;
    
    let result = "You lost!";
    if(guessNumber === randomNumber) {
        result = "You won!";
    }
    document.querySelector(".show-result").innerText = result;
}

const savedRangeNumber = localStorage.getItem("rangeNumber");
const savedGuessNumber = localStorage.getItem("guessNumber");
const savedRandomNumber = localStorage.getItem("randomNumber");

if (savedRangeNumber != null && savedGuessNumber != null ) {
    
    rangeInput.value = savedRangeNumber;
    guessInput.value = savedGuessNumber;

    showResult(savedGuessNumber, savedRandomNumber)

    gameForm.addEventListener("submit", onPlayGame);
} else {
    gameForm.addEventListener("submit", onPlayGame);
}

