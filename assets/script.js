const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.selection button');
const showIcon = document.querySelector('.show i');
const computerShowIcon = document.querySelector('.computer i');

let computerScore = 0;
let playerScore = 0;

const rockIcon = "fas fa-hand-rock";
const paperIcon = "fas fa-hand-paper";
const scissorsIcon = "fas fa-hand-scissors";

const randomClasses = [rockIcon, paperIcon, scissorsIcon];
const text2 = document.getElementById('demo2');



const runComp = () => {
    
    let randomNum = Math.floor(Math.random() * randomClasses.length);
    computerShowIcon.className = randomClasses[randomNum];
}

const checkRes = () => {
  
    if (computerShowIcon.className === showIcon.className) {
        tie();
    }
    else if (showIcon.className === paperIcon && computerShowIcon.className === rockIcon) {
        win();
    }
    else if (showIcon.className === scissorsIcon && computerShowIcon.className === paperIcon) {
        win();
    }
    else if (showIcon.className === rockIcon && computerShowIcon.className === scissorsIcon) {
        win();
    }
    else {
        lose();
    }
    
}
const clickedPaper =()=> {
    runComp();
    showIcon.className = paperIcon;
    checkRes();
}

const clickedRock = () => {
    runComp();
    showIcon.className = rockIcon;
    checkRes();
}

const clickedScissor = () => {
    runComp();
    showIcon.className = scissorsIcon;
    checkRes();
}


const checkOverall = () => {
    if (computerScore == 10) {
        alert("Computer Won!")
        playerScore = 0;
        computerScore = 0;
        pScore.innerHTML = playerScore;
        cScore.innerHTML = computerScore;
        text2.innerHTML = "Choose One !"; 
           }
    else if (playerScore == 10) {
        alert("You Won!!")
        playerScore = 0;
        computerScore = 0;
        pScore.innerHTML = playerScore;
        cScore.innerHTML = computerScore;
        text2.innerHTML = "Choose One !"; 
    }
}



const tie = ()=>{
    text2.innerHTML = "It's a Tie ! ";
    text2.style.color = 'orange';
   
}

const win = ()=>{
    text2.innerHTML = "It's a Win ! ";
    text2.style.color = 'rgb(1, 146, 1)';
    playerScore += 1;
    pScore.innerHTML = playerScore;
    cScore.innerHTML = computerScore;
    checkOverall();
}

const lose = ()=>{
    text2.innerHTML = "You Loosed ! ";
    text2.style.color = 'red';
    computerScore += 1;
    pScore.innerHTML = playerScore;
    cScore.innerHTML = computerScore;
    checkOverall();
}

