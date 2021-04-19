let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";
let winner;
let playerScore = 0;
let computerScore = 0;

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
function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() == "rock" && computerSelection == paper) {
        winner = "Computer";
        computerScore++;
        return "You lost! Paper beats rock D:";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == scissors) {
        winner = "Player";
        playerScore++;
        return "You won! Rock beats scissors :D";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == rock) {
        winner = "Nobody";
        return "It's a tie! -.-";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == scissors) {
        winner = "Nobody";
        return "It's a tie! -.-";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == paper) {
        winner = "Player";
        playerScore++;
        return "You won! Scissors beats paper :D";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == rock) {
        winner = "Computer";
        computerScore++;
        return "You lost! Rock beats scissors D:";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == rock) {
        winner = "Player";
        playerScore++;
        return "You won! Paper beats rock :D";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == scissors) {
        winner = "Computer";
        computerScore++;
        return "You lost! Scissors beats paper D:";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == paper) {
        winner = "Nobody";
        return "It's a tie! -.-";
    } 
}   

function game() {
    let finalWinner;
    while (computerScore < 3 && playerScore < 3) {
    console.log(playRound(prompt("What do you choose?"), computerPlay()));
    }
    if (computerScore === 3) {
        finalWinner = "Computer";
    } else if (playerScore === 3) {
        finalWinner = "Player";
    }
    let finalScore = `The result is ${playerScore} to ${computerScore}!`;
    return finalScore + ' ' + finalWinner + ' wins'; 
} 
console.log(game()); 