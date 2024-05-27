let humanScore = 0
let computerScore = 0
getComputerChoice();
getHumanChoice();


// Function that determines computer choice
function getComputerChoice() {
    // Generate integer between 0 and 2. Each possible integer results in a different choice.
    function getRandomInt() {
        let computerChoice = Math.floor(Math.random() * 3);
        if (computerChoice === 0) {
            return "Rock";
        } else if (computerChoice === 1) {
            return "Paper";
        } else {
            return "Scissors";
        }
    }
    // Write computer choice to the console.
    console.log(getRandomInt());
}

// Function that takes user choice
function getHumanChoice() {
    function humanChoicePrompt() {
        let userChoice = prompt("Rock, Paper, or Scissors?");
        if (userChoice.toLowerCase() === "rock") {
            return "Rock";
        } else if (userChoice.toLowerCase() === "paper") {
            return "Paper";
        } else if (userChoice.toLowerCase() === "scissors") {
            return "Scissors";
        } else {
            return "Invalid Choice";
        }
    }
    console.log(humanChoicePrompt());
}



/*

*/