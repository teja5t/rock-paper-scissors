function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);

    if (x === 0) {
        return "rock";
    }
    if (x == 1) {
        return "paper";
    }
    if (x == 2) {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors? ");
    if (choice.toLowerCase() === "rock") {
        return "rock";
    }
    if (choice.toLowerCase() === "paper") {
        return "paper";
    }
    if (choice.toLowerCase() === "scissors") {
        return "scissors";
    }

    return getHumanChoice();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        console.log("You lose! Paper beats Rock.");
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        console.log("You win! Rock beats Scissors.");
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log("You win! Paper beats Rock.");
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        console.log("You lose! Scissors beats Paper.");
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        console.log("You lose! Rock beats Scissors.");
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log("You win! Scissors beats Paper.");
    }
    else {
        console.log(`Tie! You both selected ${computerChoice[0].toUpperCase() + computerChoice.substring(1)}.`);
        playRound(getHumanChoice(), getComputerChoice());
    }
}

