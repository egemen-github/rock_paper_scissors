const moves = ["rock", "paper", "scissiors"];

function computerPlay () {
    var selection = Math.floor(Math.random()*3);
    var computerSelection = moves[selection];
    console.log(`Computer: ${computerSelection}, Index: ${moves.indexOf(computerSelection)}`);
    return moves.indexOf(computerSelection);
};


function playerPlay() {
    var playerSelection = prompt("Your choice Rock/Paper/Scissiors?: ");
    console.log(`Player: ${playerSelection.toLowerCase()}, Index: ${moves.indexOf(playerSelection.toLowerCase())}`);
    return moves.indexOf(playerSelection.toLowerCase())
};

var computer_score = 0
var player_score = 0

function playRound(computerSelection, playerSelection) {
    if (playerSelection === computerSelection) {
        var result = "It's a draw!!!";
    }
    else if (playerSelection === 0 & computerSelection === 1){
        var result = "You Lose! Rock cannot beat Paper.";
        computer_score += 1 ;
    }
    else if (playerSelection === 0 & computerSelection === 2){
        var result = "You Win! Rock beats Scissior.";
        player_score += 1;
    }
    else if (playerSelection === 1 & computerSelection === 0){
        var result = "You Win! Paper beats Rock.";
        player_score += 1;
    }
    else if (playerSelection === 1 & computerSelection === 2){
        var result = "You Lose! Paper cannot beat Scissor.";
        computer_score += 1;
    }
    else if (playerSelection === 2 & computerSelection === 0){
        var result = "You Lose! Rock beats Scissor.";
        computer_score += 1;
    }
    else if (playerSelection === 2 & computerSelection === 1){
        var result = "You Win! Scissors beats Paper.";
        player_score += 1;
    }
    return `Result: ${result} Player Score: ${player_score} - Computer Score: ${computer_score}`;
}


var round = 0
while (round < 5) {

    var computerSelection = computerPlay();
    var playerSelection = playerPlay();
    console.log(playRound(computerSelection, playerSelection));
    round += 1;
};

if (player_score > computer_score) {
    console.log("YOU ARE THE WINNER!")
} else {
    console.log("YOU ARE THE LOOSER!")
}