////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    if(move==null || move==undefined) {
        move=getInput();
    }
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move;
}

function getComputerMove(move) {
    if(move==null || move==undefined) {
        move=randomPlay();
    }
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if(playerMove===computerMove){
            winner="tie";
        } else if(playerMove==="rock"){
            if(computerMove==="scissors"){
                winner="player";
            } else{
                winner="computer";
            }
        } else if(playerMove==="scissors"){
            if(computerMove==="rock"){
                winner="computer";
            } else{
                winner="player";
            }
        } else{
            if(computerMove==="rock"){
                winner="player";
            } else{
                winner="computer";
            }
        }
    return winner;
}

function playToFive() {
    var playerWins = 0;
    var computerWins = 0;
    var playerMove;
    var computerMove;
    var winner;
    console.log("Let's play Rock, Paper, Scissors");

    while(playerWins<5 && computerWins<5){
        playerMove=getPlayerMove();
        computerMove=getComputerMove();
        winner=getWinner(playerMove,computerMove);
        
        console.log("The player has selected: "+playerMove+" and the computer has selected: "+computerMove+".")
        
        if(winner==="tie"){
            console.log("The result is a tie! Let's play again!");
        } else if(winner==="player"){
            playerWins+=1;
            console.log("The player has won!")
        } else{
            computerWins+=1;
            console.log("The computer has won!");
        }
        console.log("The current score is Player: "+playerWins+", Computer: "+computerWins);
    }

    if(playerWins===5){
        console.log("The player has won the game by getting 5 wins!");
    }
    if(computerWins===5){
        console.log("The computer has won the game by getting 5 wins!");
    }
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

playToFive();

