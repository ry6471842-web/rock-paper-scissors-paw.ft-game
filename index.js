//  ROCK PAPER SCISSORS


//==================GAME SCREEN START SCREEN 
const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");
const startBtn = document.getElementById("startBtn");
//==================START SCREEN==========================
startBtn.addEventListener("click", () => {

    startScreen.classList.add("hidden");

    setTimeout(() => {

        startScreen.style.display = "none";

        gameScreen.style.display = "flex";

        setTimeout(() => {
            gameScreen.classList.add("visible");
        }, 50);

    }, 700);

});
//CAT SLEEPING=========================

const sleepingCat = document.getElementById("sleepingCat");

let catFrame = 1;

setInterval(() => {

    catFrame++;

    if(catFrame > 3){
        catFrame = 1;
    }

    sleepingCat.src = `cat_sleeping/cat_sleeping_${catFrame}.png`;

}, 700);

//===========PAW ANIMATION===========================================
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");


function animatePaw(img, frames, folder, prefix){

    let frame = 1;

    setInterval(() => {

        frame++;

        if(frame > frames){
            frame = 1;
        }

        img.src = `${folder}/${prefix}${frame}.png`;

    }, 280);

}

animatePaw(rockBtn, 3, "rock", "rock-paw_");
animatePaw(paperBtn, 2, "paper", "paper_");
animatePaw(scissorsBtn, 2, "scissors", "scissors_");

//GAME SCREEN=========================================================

const choices = ["rock", "paper", "scissors"];
const playerDisplay= document.getElementById("playerDisplay");
const computerDisplay= document.getElementById("computerDisplay");
const resultDisplay= document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0 ;
let computerScore = 0;


function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3 )];
    let result = "";
    if(playerChoice === computerChoice){
        result = "IT'S A TIE ";
    }
    else{
        switch(playerChoice){
            case "rock":
              result =  (computerChoice === "scissors") ? "U WIN!!" : "U LOSE!";
              break;
            case "paper":
              result =  (computerChoice === "rock") ? "U WIN!!" : "U LOSE!";
              break; 
            case "scissors":
              result =  (computerChoice === "paper") ? "U WIN!!" : "U LOSE!";
              break; 

        }
    }

    playerDisplay.textContent =` YOU: ${playerChoice}`;
    computerDisplay.textContent =`=^•ﻌ•^= : ${computerChoice}`;
    resultDisplay.textContent =result;

    switch(result){
        case "U WIN!!":
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "U LOSE!":
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
    }
}