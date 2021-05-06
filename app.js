let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";
let winner;
let playerScore = 0;
let computerScore = 0;
let finalWinner;

function computerPlay() {
    let randomNumber = Math.random() * 100;
    let numberDecider = Math.floor(randomNumber);
    let computerChoice;
    if (numberDecider <= 33) {
        computerChoice = rock;
    } else if (numberDecider >= 34 && numberDecider <= 66) {
        computerChoice = paper;
    } else if (numberDecider >= 67 && numberDecider <= 99) {
        computerChoice = scissors;
    }

    return computerChoice;
}

const PARTIALRESULT = document.querySelector('#partial-result');

function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock" && computerSelection == paper) {
        winner = "Computer";
        computerScore++;
        PARTIALRESULT.innerHTML = "You lost! Paper beats rock D:";
        addLoserBorderToRock();
    } else if (playerSelection == "rock" && computerSelection == scissors) {
        winner = "Player";
        playerScore++;
        PARTIALRESULT.innerHTML = "You won! Rock beats scissors :D";
        addWinnerBorderToRock();
    } else if (playerSelection == "rock" && computerSelection == rock) {
        winner = "Nobody";
        PARTIALRESULT.innerHTML = "It's a tie! -.-";
        addDrawBorderToRock();
    } else if (playerSelection == "scissors" && computerSelection == scissors) {
        winner = "Nobody";
        PARTIALRESULT.innerHTML = "It's a tie! -.-";
        addDrawBorderToScissors();
    } else if (playerSelection == "scissors" && computerSelection == paper) {
        winner = "Player";
        playerScore++;
        PARTIALRESULT.innerHTML = "You won! Scissors beats paper :D";
        addWinnerBorderToScissors();
    } else if (playerSelection == "scissors" && computerSelection == rock) {
        winner = "Computer";
        computerScore++;
        PARTIALRESULT.innerHTML = "You lost! Rock beats scissors D:";
        addLoserBorderToScissors();
    } else if (playerSelection == "paper" && computerSelection == rock) {
        winner = "Player";
        playerScore++;
        PARTIALRESULT.innerHTML = "You won! Paper beats rock :D";
        addWinnerBorderToPaper();
    } else if (playerSelection == "paper" && computerSelection == scissors) {
        winner = "Computer";
        computerScore++;
        PARTIALRESULT.innerHTML = "You lost! Scissors beats paper D:";
        addLoserBorderToPaper();
    } else if (playerSelection == "paper" && computerSelection == paper) {
        winner = "Nobody";
        PARTIALRESULT.innerHTML = "It's a tie! -.-";
        addDrawBorderToPaper();
    } 
}   

let addWinnerBorderToRock = () => {
    let CHOICE = document.querySelector("#rock");
    CHOICE.classList.add("winner-option");
    setTimeout(() => {CHOICE.classList.remove("winner-option")}, 500);
}

let addWinnerBorderToPaper = () => {
    let CHOICE = document.querySelector("#paper");
    CHOICE.classList.add("winner-option");
    setTimeout(() => {CHOICE.classList.remove("winner-option")}, 500);
}

let addWinnerBorderToScissors = () => {
    let CHOICE = document.querySelector("#scissors");
    CHOICE.classList.add("winner-option");
    setTimeout(() => {CHOICE.classList.remove("winner-option")}, 500);
}

let addLoserBorderToRock = () => {
    let CHOICE = document.querySelector('#rock');
    CHOICE.classList.add('loser-option');
    setTimeout(() => {CHOICE.classList.remove('loser-option')}, 500);
}

let addLoserBorderToPaper = () => {
    let CHOICE = document.querySelector('#paper');
    CHOICE.classList.add('loser-option');
    setTimeout(() => {CHOICE.classList.remove('loser-option')}, 500);
}

let addLoserBorderToScissors = () => {
    let CHOICE = document.querySelector('#scissors');
    CHOICE.classList.add('loser-option');
    setTimeout(() => {CHOICE.classList.remove('loser-option')}, 500);
}

let addDrawBorderToRock = () => {
    let CHOICE = document.querySelector('#rock');
    CHOICE.classList.add('draw-option');
    setTimeout(() => {CHOICE.classList.remove('draw-option')}, 500);
}

let addDrawBorderToPaper = () => {
    let CHOICE = document.querySelector('#paper');
    CHOICE.classList.add('draw-option');
    setTimeout(() => {CHOICE.classList.remove('draw-option')}, 500);
}

let addDrawBorderToScissors = () => {
    let CHOICE = document.querySelector('#scissors');
    CHOICE.classList.add('draw-option');
    setTimeout(() => {CHOICE.classList.remove('draw-option')}, 500);
}

const FINALWINNER = document.querySelector('#winner');

const displayFinalWinner = () => {
    if (computerScore === 5) {
        finalWinner = "Computer";
        FINALWINNER.textContent = 'COMPUTER WINS';
        ROCK.removeEventListener('click', playRock);
        PAPER.removeEventListener('click', playPaper);
        SCISSORS.removeEventListener('click', playScissors);
        RESULTS.appendChild(NEWGAME);
    } else if (playerScore === 5) {
        finalWinner = "Player";
        FINALWINNER.textContent = "PLAYER WINS";
        ROCK.removeEventListener('click', playRock);
        PAPER.removeEventListener('click', playPaper);
        SCISSORS.removeEventListener('click', playScissors);
        RESULTS.appendChild(NEWGAME);
    }  
}

const playRock = () => {
    playRound('rock', computerPlay());
    COMPUTERCOUNTER.innerHTML = computerScore;
    PLAYERCOUNTER.innerHTML = playerScore;
    displayFinalWinner();
}

const playPaper = () => {
    playRound('paper', computerPlay());
    COMPUTERCOUNTER.innerHTML = computerScore;
    PLAYERCOUNTER.innerHTML = playerScore;
    displayFinalWinner();
}

const playScissors = () => {
    playRound('scissors', computerPlay());
    COMPUTERCOUNTER.innerHTML = computerScore;
    PLAYERCOUNTER.innerHTML = playerScore;
    displayFinalWinner();
}

const PLAYERCOUNTER = document.querySelector('#playerscore');
PLAYERCOUNTER.innerHTML = playerScore;

const COMPUTERCOUNTER = document.querySelector('#computerscore');
COMPUTERCOUNTER.innerHTML = computerScore;

function addEvents() {
    ROCK.addEventListener('click', playRock);
    PAPER.addEventListener('click', playPaper);
    SCISSORS.addEventListener('click', playScissors);

}
const ROCK = document.querySelector('#rock');
const PAPER = document.querySelector('#paper');
const SCISSORS = document.querySelector('#scissors');
addEvents();

const RESULTS = document.querySelector('#results');

const NEWGAME = document.createElement("button");
NEWGAME.classList.add('new-game');
NEWGAME.innerHTML = 'NEW GAME';
NEWGAME.addEventListener('click', e => {
    computerScore = 0;
    COMPUTERCOUNTER.innerHTML = 0;
    playerScore = 0;
    PLAYERCOUNTER.innerHTML = 0;    
    FINALWINNER.innerHTML = '';
    PARTIALRESULT.innerHTML = '';
    addEvents();
})