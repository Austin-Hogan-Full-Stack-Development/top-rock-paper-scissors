// console.log("External JS")


/*
    Generate a random number 0 to 2
    0 = rock, 1 = paper, 2 = scissors
    Return corresponding string
*/
function cpuPlay() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
    
}


/*
    Accept user decision.
    Accept CPU decision.
    Return result. 1 for user win, 0 for tie, -1 for cpu win.
*/
function playRound(playerSelection, cpuSelection) {
    if (playerSelection === cpuSelection){
        return 0;
    } else if ((playerSelection === "rock" && cpuSelection === "scissors") || (playerSelection === "scissors" && cpuSelection === "paper") || (playerSelection === "paper" && cpuSelection === "rock")) {
        return 1;
    }
    return -1;
}

function displayResult(result) {
    switch (result) {
        case 1:
            alert("Player Wins!")
            break;
        case -1:
            alert("CPU Wins!")
            break;
        case 0:
            alert("DRAW! Try again.")
            break;
    }
}

const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
console.log(`Player: ${playerSelection}`)
const cpuSelection = cpuPlay()
console.log(`CPU: ${cpuSelection}`)
const roundResult = playRound(playerSelection, cpuSelection);
displayResult(roundResult);




