// Run function to determine what the computer chooses
function getComputerChoice() {
    // Generate integer between 0 and 2. Each possible integer results in a different choice.
    function getRandomInt(max) {
        let choice = Math.floor(Math.random() * max);
        if (choice === 0) {
            return "Rock";
        } else if (choice === 1) {
            return "Paper";
        } else {
            return "Scissors";
        }
    }
    // Write computer choice to the console.
    console.log(getRandomInt(3));
}

// Run getComputerChoice function
getComputerChoice();



/*
Randomly generate a number
If the number is 0, return rock
If the number is 1, return paper
If the number is 3, return scissors
*/