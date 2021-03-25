//welcome user to the game and let user select amount of rounds to play
let rounds = prompt('Welcome to rock paper scissors! How many rounds would you like to play? You can pick from 3, 5, 7 or 10 rounds!')
rounds = Number(rounds);
//tell the player to pick a valid amount of rounds if they haven't already
//if it's an unvalid amount of rounds, make sure the player selects the right amount
let validRoundsAmount = false;
while(validRoundsAmount == false) {
    if(rounds === 3 || rounds === 5 || rounds === 7 || rounds === 10) {
        alert('You chose to play ' + rounds + ' rounds, good luck!');
        validRoundsAmount = true;
    } else {
    rounds = prompt('That\'s an invalid amount of rounds! Please pick 3, 5, 7 or 10 rounds!');
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
        let playerChoices = prompt('Choose rock, paper or scissors');
        playerChoices = playerChoices.toLowerCase();
        let validPlayerChoice = false;
        while(validPlayerChoice == false) {
            if(playerChoices === 'rock' || playerChoices === 'paper'|| playerChoices === 'scissors') {
                validPlayerChoice = true;
            } else{
                playerChoices = prompt('That is an invalid choice! Please pick from either rock, paper or scissors!');
                playerChoices = playerChoices.toLowerCase();
            }
        }
        return playerChoices;
    }
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();
//make a function that outputs the winner between the player and computer
    function game(playerSelection, computerSelection) {
        if(computerSelection === 'scissors' && playerSelection === 'rock') {
            playerScore ++; 
            alert('You chose rock, computer chose scissors. Rock wins from scissors! You now have ' + playerScore + ' point(s)');
        } else if(computerSelection === 'rock' && playerSelection === 'paper') {
            playerScore ++;
            alert('You chose paper, computer chose rock. Paper wins from rock! You now have ' + playerScore + ' point(s)');
        } else if(computerSelection === 'paper' && playerSelection === 'scissors') {
            playerScore ++;
            alert('You chose scissors, computer chose paper. Scissors wins from paper! You now have ' + playerScore + ' point(s)');
        } else if(computerSelection === 'rock' && playerSelection === 'scissors') {
            computerScore ++;
            alert('You chose scissors, computer chose rock. Rock wins from scissors! The computer now has ' + computerScore + ' point(s)');
        } else if(computerSelection === 'paper' && playerSelection === 'rock') {
            computerScore ++;
            alert('You chose rock, computer chose paper. Paper wins from rock! The computer now has ' + computerScore + ' point(s)');
        } else if(computerSelection === 'scissors' && playerSelection === 'paper') {
            computerScore ++;
            alert('You chose paper, computer chose scissors. Scissors wins from paper! The computer now has ' + computerScore + ' point(s)');
        } else {
            alert('The computer chose the same as you, it\'s a tie! The score is: Player: ' + playerScore + ' Computer: ' + computerScore);
        }
    }
    game(playerSelection, computerSelection);
}
//if player has points equivalent to the number of rounds selected the player wins
//otherwise the computer wins
if(playerScore === rounds) {
    alert('Congratulations, you\'ve won the game!');
} else {
    alert('Unfortunately the computer has won, better luck next time!');
}
//restarts the game automatically after the game is over
location.reload();