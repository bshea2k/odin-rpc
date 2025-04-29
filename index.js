const options = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    return options[choice];
}

function getHumanChoice() {
    let choice = prompt("Please type in a number to represent your choice, rock [1], paper [2], or scissors [3].");

    return options[choice - 1];
}