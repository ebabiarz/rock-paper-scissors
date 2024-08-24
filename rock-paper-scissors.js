// Initialize variables for human and computer scores
let humanScore = 0;
let computerScore = 0;
// Create the computer's choice
const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();
console.log(computerSelection);
playRound(humanSelection, computerSelection);
console.log(playRound());
changeScore();
console.log("You: " + humanScore);
console.log("Computer: " + computerScore);


// Function that determines computer choice
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "Rock";
    } else if (computerChoice === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// Function that takes user choice
function getHumanChoice() {
    let userChoice = prompt("Rock, Paper, or Scissors?");
    if (userChoice.toLowerCase() === "rock") {
        return "Rock";
    } else if (userChoice.toLowerCase() === "paper") {
        return "Paper";
    } else if (userChoice.toLowerCase() === "scissors") {
        return "Scissors";
    } else if (userChoice === "") {
        return "Undefined";
    } else {
        return "Invalid Choice";
    }
}

// Function that determines the winner of the round and updates the score.
function playRound(humanChoice, computerChoice) {
        if ((humanSelection === "Rock" && computerSelection === "Scissors")
            ||(humanSelection === "Paper" && computerSelection === "Rock")
            ||(humanSelection === "Scissors" && computerSelection === "Paper")) {
                return ("You win! " + humanSelection + " beats " + computerSelection + ".");
        } else if ((humanSelection === "Rock" && computerSelection === "Paper")
            ||(humanSelection === "Paper" && computerSelection === "Scissors")
            ||(humanSelection === "Scissors" && computerSelection === "Rock")) {
                return ("You lose! " + computerSelection + " beats " + humanSelection + ".");  
        } else if (humanSelection === "Undefined") {
                return ("Please choose an option.");            
        } else if (humanChoice === computerChoice) {
                return ("You both chose " + humanSelection + ". Try Again!");
        } else {
            return "Your choice is invalid. Try again.";
        }
}

function changeScore() {
    if (playRound() === ("You win! " + humanSelection + " beats " + computerSelection + ".")) {
        return humanScore += 1;
    } else if (playRound() === ("You lose! " + computerSelection + " beats " + humanSelection + ".")) {
        return computerScore += 1;
    }
}



/*
Set humanChoice variable to returned value of function humanChoicePrompt()
Set computerChoice variable to returned value of function getRandomInt()
Use if, else statement to determine the winner
    Use OR (||) and AND (&&) to shorten code
Log result message to console
Add 1 to humanScore or computerScore based on the results
*/