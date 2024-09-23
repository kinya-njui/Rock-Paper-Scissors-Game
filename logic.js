// Array for player options
const playerOption = ["rock", "paper", "scissor", "paper", 
    "rock", "scissor", "paper", "rock", "scissor", "rock", 
    "paper", "scissor", "rock", "scissor", "paper", 
    "rock", "paper", "scissor"];

// Object for player option icons
const playerOptionIcon = {
    rock: "&#9994;",
    paper: "&#9995;",
    scissor: "&#9996;"
};

// DOM Elements
const computerDispayChoice = document.getElementsByClassName("computer-dispay-choice")[0];
const scoreResult = document.getElementsByClassName("result")[0];
const playerDispayChoice = document.getElementsByClassName("player-dispay-choice")[0];
const computerCount = document.getElementsByClassName("computer-count")[0];
const playerCount = document.getElementsByClassName("player-count")[0];

// Default choice
let defaultChoice = "scissor";

// Initialize default choices for both player and computer
function initializeDefaultChoice() {
    playerDispayChoice.innerHTML = playerOptionIcon[defaultChoice];
    computerDispayChoice.innerHTML = playerOptionIcon[defaultChoice];
    scoreResult.textContent = "currently draw";
}

// Initialize the game with default values
console.log(initializeDefaultChoice());

// Game logic function
function playgame(playerChoice) {
    const computerChoice = playerOption[Math.floor(Math.random() * 3)];
    let result;

    // Determine the result of the game
    if (computerChoice === playerChoice) {
        result = "draw";
    } else if (computerChoice === "rock" && playerChoice === "scissor") {
        result = "computer wins";
    } else if (computerChoice === "scissor" && playerChoice === "rock") {
        result = "player wins";
    } else if (computerChoice === "paper" && playerChoice === "scissor") {
        result = "player wins";
    } else if (computerChoice === "rock" && playerChoice === "paper") {
        result = "player wins";
    } else if (computerChoice === "scissor" && playerChoice === "paper") {
        result = "computer wins";
    } else if (computerChoice === "paper" && playerChoice === "rock") {
        result = "computer wins";
    }

    // Update the choices on the UI
    playerDispayChoice.innerHTML = playerOptionIcon[playerChoice];
    computerDispayChoice.innerHTML = playerOptionIcon[computerChoice];
    scoreResult.textContent = result;

    // Update the score based on the result
    if (result === "computer wins") {
        computerCount.textContent = parseInt(computerCount.textContent) + 1;
    } else if (result === "player wins") {
        playerCount.textContent = parseInt(playerCount.textContent) + 1;
    }
}
