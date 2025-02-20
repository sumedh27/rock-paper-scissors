const rockButton = document.querySelector(`#rock`);
const paperButton = document.querySelector(`#paper`);
const scissorsButton = document.querySelector(`#scissors`);

let result = document.querySelector(`.result`);
let resultChoice = document.createElement(`p`)
let selection = document.createElement(`p`);
let score = document.createElement(`h2`);


rockButton.addEventListener(`click`, (e) => {
    playRound(`rock`,getComputerChoice());
});

paperButton.addEventListener(`click`, (e) => {
    playRound(`paper`,getComputerChoice());
});

scissorsButton.addEventListener(`click`, (e) => {
    playRound(`scissors`,getComputerChoice());
});



result.appendChild(resultChoice);
result.appendChild(selection);
result.appendChild(score);

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
    return compHandChoice;
}

let humanScore = 0;
let compScore = 0;


function playRound(humanChoice, compChoice) {
    console.log(humanChoice,compChoice);

    if(humanChoice === `rock` && compChoice === `paper`){
        selection.textContent = `You loose! Paper beats Rock`;
        compScore++;
        console.log(`You loose! Paper beats Rock`);
    }else if(humanChoice === `rock` && compChoice === `paper`){
        selection.textContent = `You Win! Rock beats Paper`;
        humanScore++;
        console.log(`You Win! Rock beats Paper`);
    }else if(humanChoice === `rock` && compChoice ===`rock`){
        selection.textContent = `Its a tie!`;
        console.log(`Its a tie!`);
    }else if(humanChoice === `rock` && compChoice === `scissors`){
        selection.textContent = `You Win! Rock beats Scissors`;
        humanScore++;
        console.log(`You Win! Rock beats Scissors`);
    }else if(humanChoice === `rock` && compChoice ===`rock`){
        selection.textContent = `Its a tie!`;
        console.log(`Its a tie!`);
    }else if(humanChoice === `paper` && compChoice === `rock`){
        selection.textContent = `You Win! Paper beats Paper`;
        humanScore++;
        console.log(`You Win! Paper beats Paper`);
    }else if(humanChoice === `paper` && compChoice ===`paper`){
        selection.textContent = `Its a tie!`;
        console.log(`Its a tie!`);
    }else if(humanChoice === `paper` && compChoice === `scissors`){
        selection.textContent = `You Loose! Scissors beats Paper`;
        compScore++;
        console.log(`You Loose! Scissors beats Paper`);

    }else if(humanChoice === `scissors` && compChoice ===`rock`){
        selection.textContent = `You Loose! Rock beats Scissors`;
        compScore++;
        console.log(`You Loose! Rock beats Scissors`);
    }else if(humanChoice === `scissors` && compChoice ===`paper`){
        selection.textContent = `You Win! Scissors beats Paper`;
        humanScore++;
        console.log(`You Win! Scissors beats Paper`);
    }else if(humanChoice === `scissors` && compChoice ===`scissors`){
        selection.textContent = `It's a tie!`;
        console.log(`It's a tie!`);
    }
    resultChoice.textContent = `You: ${humanChoice.toUpperCase()}, Computer: ${compChoice.toUpperCase()}`;
    score.textContent= `Your Score: ${humanScore} Computers Score: ${compScore}`;
}
