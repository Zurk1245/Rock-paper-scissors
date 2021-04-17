function computerPlay() {
    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";
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

    //console.log(numberDecider);
    
    return computerChoice;
}
console.log(computerPlay());