const options = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    return options[choice];
}

function getHumanChoice() {
    let choice = parseInt(prompt("Please type in a number to represent your choice, rock [1], paper [2], or scissors [3]."));

    return options[choice - 1];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tie");
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("Loss. Computer chose paper.");
            computerScore++;
        } else {
            console.log("Win. Computer chose scissors.");
            humanScore++;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("Win. Computer chose rock.");
            humanScore++;
        } else {
            console.log("Loss. Computer chose scissors.");
            computerScore++;
        }
    } else {
        if (computerChoice === "rock") {
            console.log("Loss. Computer chose rock.");
            computerScore++;
        } else {
            console.log("Win. Computer chose paper.");
            humanScore++;
        }
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    let humanScorePara = document.querySelector(".human-score");
    let computerScorePara = document.querySelector(".computer-score");

    humanScorePara.textContent += humanScore;
    computerScorePara.textContent += computerScore;
}

let button = document.querySelector(".start-game");
button.addEventListener("click", playGame);