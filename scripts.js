let compScore = 0;
let humanScore = 0;


function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3);
    let compHandChoice;

    if(randomNum === 0){
        compHandChoice = `rock`;
    }else if(randomNum === 1){
        compHandChoice = `paper`;
    }else if(randomNum === 2){
        compHandChoice = `scissors`;
    }
    return compHandChoice.toUpperCase();
}

let compSelection = getComputerChoice();

function getHumanChoice(){
    let humanHandChoice = prompt(`Choose Rock,Paper or Scissors`);
    return humanHandChoice.toUpperCase();
}

let humanSelection = getHumanChoice();

// rock beats scissors
// paper beats rock
// scissor beats paper

function playGame(rounds){
    
    function playRound(humanChoice, compChoice) {
        console.log(humanChoice,compChoice);
        if(humanChoice == compChoice){
            console.log(`It's a draw ${humanChoice} and ${compChoice} are equal`);
        }else if(humanChoice === `ROCK` && compChoice === `SCISSORS` ){
            humanScore++
            console.log(`You Win! ${humanChoice} beats ${compChoice}`);
        }else if(humanChoice === `PAPER` && compChoice === `ROCK`){
            humanScore++
            console.log(`You Win! ${humanChoice} beats ${compChoice}`);
        }else if(humanChoice === `SCISSORS` && compChoice === `PAPER`){
            humanScore++
            console.log(`You Win! ${humanChoice} beats ${compChoice}`);
        }else{
            compScore++;
            console.log(`You Lose! ${compChoice} beats ${humanChoice}`);
        }
    }

    for(i = 1;i <= rounds; i++){
        playRound(getHumanChoice(),getComputerChoice());
        console.log(`ROUND = ${i} Your Score = ${humanScore} Computers Score = ${compScore}`);
    }
    

}

playGame(5);




