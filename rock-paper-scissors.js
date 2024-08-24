console.log("Rock, Paper, Scissors. Best 3 out of 5.")
// Play 5-round game
playGame();

// Function for playing a full 5-round game
function playGame() {
    // Initialize humanScore, computerScore, and roundCount
    let humanScore = 0;
    let computerScore = 0;
    let roundCount = (humanScore + computerScore);
    // Loop all functions for a single round until the round count reaches 5
    do {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);
        let roundResult = playRound(humanSelection, computerSelection);
        console.log(roundResult);
        changeScore(roundResult, humanSelection, computerSelection);
        let scoreAdjustment = changeScore(roundResult, humanSelection, computerSelection);
        if (scoreAdjustment === "win") {
            humanScore = humanScore + 1;
            roundCount = roundCount + 1;
        } else if (scoreAdjustment === "lose") {
            computerScore = computerScore + 1;
            roundCount = roundCount + 1;
        }
        console.log("You: " + humanScore);
        console.log("Computer: " + computerScore);
    } while (roundCount < 5);
    if (humanScore > computerScore) {
        console.log("Congratulations! You won! Your score: " + humanScore + " Computer score: " + computerScore);
    } else {
        console.log("You lose! Bummer.. Your score: " + humanScore + " Computer score: " + computerScore);
    }
}

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
function playRound(humanSelection, computerSelection) {
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
        } else if (humanSelection === computerSelection) {
                return ("You both chose " + humanSelection + ". Try Again!");
        } else {
            return "Your choice is invalid. Try again.";
        }
}

function changeScore(roundResult, humanSelection, computerSelection) {
    if (roundResult === ("You win! " + humanSelection + " beats " + computerSelection + ".")) {
        return "win";
    } else if (roundResult === ("You lose! " + computerSelection + " beats " + humanSelection + ".")) {
        return "lose";
    } else {
        return "no change";
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