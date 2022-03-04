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

function displayRoundResult(result) {
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

function displayGameResult(playerScore, cpuScore) {
    if (playerScore > cpuScore) {
        alert(`Player Wins\nPlayer: ${playerScore} CPU: ${cpuScore}`)
    } else if (playerScore < cpuScore) {
        alert(`CPU Wins\nPlayer: ${playerScore} CPU: ${cpuScore}`)
    } else {
        alert(`DRAW\nPlayer: ${playerScore} CPU: ${cpuScore}`)
    }
}

function game() {
    let playerScore = 0;
    let cpuScore = 0
    for (let round = 1; round <= 5; round++){
        const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
        console.log(`Player: ${playerSelection}`);
        const cpuSelection = cpuPlay();
        console.log(`CPU: ${cpuSelection}`);
        const roundResult = playRound(playerSelection, cpuSelection);
        if (roundResult === 1)
            playerScore++;
        else if (roundResult === -1)
            cpuScore++;
        displayRoundResult(roundResult);
    }
    displayGameResult(playerScore, cpuScore);
}

game();


