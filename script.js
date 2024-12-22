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
}