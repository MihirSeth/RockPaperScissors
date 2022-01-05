function computerPlay(){
    const options = ['Rock','Paper','Scissor']
    let computerChoice = Math.floor(Math.random() * options.length);
    computerChoice = options[computerChoice]
    return computerChoice;
}



let playerScore = 0;
let computerScore = 0;

function playRound (computerSelection, playerSelection){
    let computerChoice = computerSelection;
    computerChoice = computerChoice.toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    // let playerChoice = prompt('What is your choice? Rock, Paper or Scissor?: ','');
    
    if (computerChoice===playerSelection){
        return "It's a Tie! You and the computer both chose " + computerChoice
    } else if (playerSelection==='rock'){
        if (computerChoice=='paper'){
            computerScore++;
            document.getElementById("computerScore").innerHTML = `${computerScore}`;
            document.getElementById("result").innerHTML =  "You Lose! Paper beats Rock";
            console.log("You Lose! Paper beats Rock")
        } else{
            playerScore++;
            document.getElementById("playerScore").innerHTML = `${playerScore}`;
            document.getElementById("result").innerHTML = "You Win! Rock beats Scissor";
            console.log("You Win! Rock beats Scissor")
        }
    } else if (playerSelection==='paper'){
        if (computerChoice=='scissor'){
            computerScore++;
            document.getElementById("computerScore").innerHTML = `${computerScore}`;
            document.getElementById("result").innerHTML = "You Lose! Scissor beats Paper";
            console.log("You Lose! Scissor beats Paper")
        } else{
            playerScore++;
            document.getElementById("playerScore").innerHTML = `${playerScore}`;
            document.getElementById("result").innerHTML = "You Win! Paper beats Rock";
            console.log("You Win! Paper beats Rock")
        }
    } else if (playerSelection==='scissor'){
        if (computerChoice=='rock'){
            computerScore++;
            document.getElementById("computerScore").innerHTML = `${computerScore}`;
            document.getElementById("result").innerHTML = "You Lose! Rock beats Scissor";
            console.log("You Lose! Rock beats Scissor")
        } else{
            playerScore++;
            document.getElementById("playerScore").innerHTML = `${playerScore}`;
            document.getElementById("result").innerHTML = "You Win! Scissor beats Paper";
            console.log("You Win! Scissor beats Paper")
        }
    }

}

// function game(){


//     for(i = 0; i < 5; i++){
//         let computerChoice = computerPlay();

//         let playerChoice = prompt('What is your choice? Rock, Paper or Scissor?: ','');
//         playerChoice = playerChoice.toLowerCase()
//         console.log(playRound(computerChoice, playerChoice))
//     }

//     if (playerScore > computerScore){
//         alert('You win! The score is ' + playerScore + ' to ' + computerScore + 'in your favour.')
//     } else if (computerScore > playerScore) {
//         alert('You lose! The score is ' + computerScore + ' to ' + playerScore + ' in the computer\'s favour.')
 
//     } else {
//         alert('It is a tie, both scores are at '+ playerScore)
//     }
// }


// game();


function game1(){
    playRound(computerPlay(), 'Rock')
}

function game2(){
    playRound(computerPlay(), 'Paper')
}

function game3(){
    playRound(computerPlay(), 'Scissor')
}

const rockbtn = document.querySelector('.rockbtn');
const paperbtn = document.querySelector('.paperbtn');
const scissorbtn = document.querySelector('.scissorbtn');

rockbtn.addEventListener('click', game1);
paperbtn.addEventListener('click', game2);
scissorbtn.addEventListener('click', game3);










