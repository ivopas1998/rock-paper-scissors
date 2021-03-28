//welcome user to the game and let user select amount of rounds to play
let rounds = prompt('Welcome to rock paper scissors! \nHow many rounds would you like to play? \nYou can pick from 3, 5, 7 or 10 rounds!')
rounds = Number(rounds);
//tell the player to pick a valid amount of rounds if they haven't already
//if it's an unvalid amount of rounds, make sure the player selects the right amount
let validRoundsAmount = false;
while(validRoundsAmount == false) {
    if(rounds === 3 || rounds === 5 || rounds === 7 || rounds === 10) {
        alert('You chose to play ' + rounds + ' rounds, good luck!');
        validRoundsAmount = true;
    } else {
        rounds = prompt('That\'s an invalid amount of rounds! \nPlease pick from 3, 5, 7 or 10 rounds!');
        rounds = Number(rounds);
    }
}
//keep track of the player and computer score
let playerScore = 0;
let computerScore = 0;
//make sure the game loops until the player score or computer score reached the maximum amount
while(playerScore !== rounds && computerScore !== rounds) {
//rock paper scissors against a computer. Make function that randomly returns
//either rock paper or scissors. This function is for the computer
    function computerPlay() {
        let computerChoices = ['rock','paper','scissors'];
        let computerRandomResult = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        return computerRandomResult;
    }
//create function that let's the player input their choice.
//make sure the player chooses from either rock, paper or scissors
//if they choose anything else, let them know the choice is invalid
//make sure that the players choice is case insensitive
    function playerPlay() {
        let playerChoices = prompt('Choose from rock, paper or scissors.');
        playerChoices = playerChoices && playerChoices.toLowerCase();
        let validPlayerChoice = false;
        while(validPlayerChoice == false) {
            if(playerChoices === 'rock' || playerChoices === 'paper'|| playerChoices === 'scissors') {
                validPlayerChoice = true;
            } else {
                playerChoices = prompt('That\'s an invalid choice! \nPlease pick from either rock, paper or scissors!');
                playerChoices = playerChoices && playerChoices.toLowerCase();
            }
        }
        return playerChoices;
    }
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();
//make a function that outputs the winner between the player and computer
function game(playerSelection, computerSelection) {
    if((computerSelection === 'scissors' && playerSelection === 'rock') 
    || (computerSelection === 'rock' && playerSelection === 'paper') 
    || (computerSelection === 'paper' && playerSelection === 'scissors')) {
        playerScore ++; 
        alert(`${playerSelection} VS ${computerSelection}. You win! \nYou now have ${playerScore} point(s).`);
    
    } else if((computerSelection === 'rock' && playerSelection === 'scissors')
    || (computerSelection === 'paper' && playerSelection === 'rock')
    || (computerSelection === 'scissors' && playerSelection === 'paper')) {
        computerScore++;
        alert(`${playerSelection} VS ${computerSelection}. You lose! \nComputer now has ${computerScore} point(s).`);
    } else {
        alert(`The computer chose the same, it's a tie! \nThe score is: You: ${playerScore} Computer: ${computerScore}.`);
    }
}
    game(playerSelection, computerSelection);
}
//if player has points equivalent to the number of rounds selected the player wins
//otherwise the computer wins
if(playerScore === rounds) {
    alert('Congratulations, you\'ve won the game!');
} else {
    alert('Unfortunately the computer has won. \nBetter luck next time!');
}
//restarts the game automatically after the game is over
location.reload();