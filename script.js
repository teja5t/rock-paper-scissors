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



function playGame(rounds) {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore++;
            alert("You lose! Paper beats Rock.");
        }
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            alert("You win! Rock beats Scissors.");
        }
        else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            alert("You win! Paper beats Rock.");
        }
        else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore++;
            alert("You lose! Scissors beats Paper.");
        }
        else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore++;
            alert("You lose! Rock beats Scissors.");
        }
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            alert("You win! Scissors beats Paper.");
        }
        else {
            alert(`Tie! You both selected ${computerChoice[0].toUpperCase() + computerChoice.substring(1)}.`);
            playRound(getHumanChoice(), getComputerChoice());
        }
    }

    for (let i = 0; i < rounds; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    alert(`You ${humanScore > computerScore ? "won" : "lost"} ${humanScore} to ${computerScore}!`)
}

playGame(5);