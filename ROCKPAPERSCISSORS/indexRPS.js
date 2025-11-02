let playerValue = document.getElementById("playervalue");
let computerValue = document.getElementById("computervalue")
let iconButtons = document.querySelectorAll(".iconbutton");
let gameList = ["paper","rock","scissors"];
let playerScore = document.getElementById("playerscore");
let computerScore = document.getElementById("computerscore");
let playerScoreValue = 0;
let computerScoreValue = 0;

iconButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let playerChoice =  event.target.getAttribute("data-value");
    let resultValue = document.getElementById("result");
    let index = Math.floor(Math.random()*gameList.length);
    let computerChoice = gameList[index];
    playerValue.textContent=`Player : ${playerChoice}`;
    computerValue.textContent = `Computer : ${computerChoice}`
    resultValue.textContent = "";
    if(playerChoice === computerChoice ){
        resultValue.textContent = "Tie!";
    }
    else if (playerChoice === "rock" && computerChoice === "scissors"){
        resultValue.textContent = "You won!";
        playerScoreValue++;
    }
    else if (playerChoice === "paper" && computerChoice === "rock"){
        resultValue.textContent = "You won!";
        playerScoreValue++;
    }
    else if (playerChoice === "scissors" && computerChoice === "paper"){
        resultValue.textContent = "You won!";
        playerScoreValue++;
    }
    else if (playerChoice === "paper" && computerChoice === "scissors"){
        resultValue.textContent = "Computer wins!";
        computerScoreValue++;
    }

    else if (playerChoice === "scissors" && computerChoice === "rock"){
        resultValue.textContent = "Computer wins!";
        computerScoreValue++;
    }
    else if (playerChoice === "rock" && computerChoice === "paper"){
        resultValue.textContent = "Computer wins!";
        computerScoreValue++;
    }
    playerScore.innerHTML = `Player Score: <b style=color:green>${playerScoreValue}</b>`;
    if (computerScore) {
        computerScore.innerHTML = `Computer Score: <b style=color:red>${computerScoreValue}</b>`;
    } else {
        console.warn('computerscore element not found in DOM');
    }
    }
);
});
