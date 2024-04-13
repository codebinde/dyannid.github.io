// Rock Paper Scissors

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");


function playGame(playerChoices) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoices === computerChoice) {
        result = "It's a tie!"
    }
    else
    {
        switch(playerChoices){
            case "rock":
                result = (computerChoice === "scissors") ? "You Win!" : "You Loose!";
                break;
            case "paper":
                result = (computerChoice === "scissors") ? "You Loose!" : "You Win!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You Win!" : "You Loose!";
                break;
        }
    }

    playerDisplay.textContent = `Player: ${playerChoices}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = `Result: ${result}`;

}
