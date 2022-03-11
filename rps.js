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

function checkGameResult(playerScore, cpuScore) {
    if (playerScore === 5)
        return 1;
    else if (cpuScore === 5)
        return -1;
    else
        return 0;
}

function game() {
    let playerScore = 0;
    let cpuScore = 0
    const display = document.querySelector('#display');

    let playerSelection = "";
    const game_btns = document.querySelectorAll('button');
    game_btns.forEach((button) => {
        button.addEventListener('click', () => {
            const playerSelection = document.querySelector('#playerSelection')
            playerSelection.textContent = `Player: ${button.id}`;

            const cpuChoice = cpuPlay();
            const cpuSelection = document.querySelector('#cpuSelection')
            cpuSelection.textContent = `CPU: ${cpuChoice}`;
            
            const roundResult = playRound(button.id, cpuChoice);
            const header = document.querySelector('#headerText')
            if (roundResult === 1) {
                header.textContent = "Player wins the round!"
                playerScore++;
            } else if (roundResult === -1) {
                header.textContent = "CPU wins the round!"
                cpuScore++;
            }
            // displayRoundResult(roundResult);

            const playerScoreLabel = document.querySelector('#playerScore')
            playerScoreLabel.textContent = `Player: ${playerScore}`;
            const cpuScoreLabel = document.querySelector('#cpuScore')
            cpuScoreLabel.textContent = `Player: ${cpuScore}`;
            
            let seriesResult = checkGameResult(playerScore, cpuScore);
            if (seriesResult === 1)
                alert('Player Wins');
            else if(seriesResult === -1)
                alert('CPU Wins');
        });
    });
}

game();


