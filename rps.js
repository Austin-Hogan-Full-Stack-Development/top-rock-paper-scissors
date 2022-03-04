// console.log("External JS")

function cpuPlay() {
    // TODO: CPU Handling
    return;
}

function playRound(playerSelection, cpuSelection) {
    if (playerSelection === cpuSelection){
        return 0;
    } else if ((playerSelection === "rock" && cpuSelection === "scissors") || (playerSelection === "scissors" && cpuSelection === "paper") || (playerSelection === "paper" && cpuSelection === "rock")) {
        return 1;
    }
    return -1;
}

// playRound Testing

console.log("Human: Rock vs. CPU: Scissors EXPECTED: 1")
console.log(playRound("rock", "scissors"))
console.log("Human: scissors vs. CPU: paper EXPECTED: 1")
console.log(playRound("scissors", "paper"))
console.log("Human: paper vs. CPU: rock EXPECTED: 1")
console.log(playRound("paper", "rock"))

console.log("Human: Scissors vs. CPU: Rock EXPECTED: -1")
console.log(playRound("scissors", "rock"))
console.log("Human: paper vs. CPU: scissors EXPECTED: -1")
console.log(playRound("paper", "scissors"))
console.log("Human: rock vs. CPU: paper EXPECTED: -1")
console.log(playRound("rock", "paper"))

console.log("Human: Rock vs. CPU: Rock EXPECTED: 0")
console.log(playRound("rock", "rock"))
console.log("Human: scissors vs. CPU: scissors EXPECTED: 0")
console.log(playRound("scissors", "scissors"))
console.log("Human: paper vs. CPU: paper EXPECTED: 0")
console.log(playRound("paper", "paper"))