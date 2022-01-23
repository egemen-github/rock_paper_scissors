const moves = ["rock", "paper", "scissiors"];

function computerPlay () {
    var selection = Math.floor(Math.random()*3);
    var computerSelection = moves[selection];
    console.log(`Computer: ${computerSelection}, Index: ${moves.indexOf(computerSelection)}`);
    return moves.indexOf(computerSelection);
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
};


const container = document.querySelector('body');
const btn_container = document.createElement('div');

btn_container.classList.toggle('button-container');
container.appendChild(btn_container);

const rock = document.createElement('button');
rock.textContent = "Rock"
rock.id = 0

const paper = document.createElement('button');
paper.textContent = "Paper"
paper.id = 1

const scissors = document.createElement('button');
scissors.textContent = "Scissors"
scissors.id = 2

btn_container.appendChild(rock);
btn_container.appendChild(paper);
btn_container.appendChild(scissors);

const buttons = document.querySelectorAll('button');

var playerSelection

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (player_score === 5 || computer_score === 5) {
            if (player_score > computer_score) {
                result_container.textContent = 'You are the WINNER'
            } else {
                result_container.textContent = 'Computer is the WINNER'
            }
            return
        };
        console.log(playerSelection = parseInt(button.id))
        console.log(playRound(computerPlay(), playerSelection))
        result_container.textContent = `You ${player_score} - Computer: ${computer_score}`

    });

});

const result_container = document.createElement('div')
result_container.textContent = `You ${player_score} - Computer: ${computer_score}`
container.appendChild(result_container)
