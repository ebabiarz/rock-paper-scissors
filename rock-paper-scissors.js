const humanScoreTracker = document.querySelector("#Your-Score");
const computerScoreTracker = document.querySelector("#Computer-Score");
const finalResult = document.querySelector("#Final-Result");
const result = document.querySelector("#Result");
const buttons = document.querySelectorAll("button");

let humanScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {

        if (humanScore < 5 && computerScore < 5) {
            const computerSelection = getComputerChoice();
            const humanSelection = button.id;

            playRound(humanSelection, computerSelection);
            let roundResult = playRound(humanSelection, computerSelection);
            changeScore(roundResult, humanSelection, computerSelection);
            let scoreAdjustment = changeScore(roundResult, humanSelection, computerSelection);

            if (scoreAdjustment === "win") {
                humanScore = humanScore +1;
            } else if (scoreAdjustment === "lose") {
                computerScore = computerScore + 1;
            };
        result.textContent = roundResult;
        humanScoreTracker.textContent = "Your Score: " + humanScore;
        computerScoreTracker.textContent = "Computer Score: " + computerScore;
        };

        if (humanScore === 5) {
            finalResult.textContent = "You Win! Congratulations!";
        } else if (computerScore === 5) {
            finalResult.textContent = "You Lose! Bummer...";
        };
    });
});



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
