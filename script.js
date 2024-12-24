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

let humanScore = 0;
let computerScore = 0;

function updateScores() {
    document.querySelector(".hscore").textContent = humanScore;
    document.querySelector(".cscore").textContent = computerScore;
}

const display = document.querySelector(".display");

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        display.textContent = "You lose! Paper beats Rock.";
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        display.textContent = ("You win! Rock beats Scissors.");
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        display.textContent = ("You win! Paper beats Rock.");
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        display.textContent = ("You lose! Scissors beats Paper.");
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        display.textContent = ("You lose! Rock beats Scissors.");
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        display.textContent = ("You win! Scissors beats Paper.");
    }
    else {
        display.textContent = (`Tie! You both selected ${computerChoice[0].toUpperCase() + computerChoice.substring(1)}.`);
    }

    updateScores();
}

const rockBtn = document.querySelector(".rock");
rockBtn.addEventListener("click", () => playRound("rock"));

const paperBtn = document.querySelector(".paper");
paperBtn.addEventListener("click", () => playRound("paper"));

const scissorsBtn = document.querySelector(".scissors");
scissorsBtn.addEventListener("click", () => playRound("scissors"));
