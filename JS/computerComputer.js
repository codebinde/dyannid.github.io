// Rock Paper Scissors

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("computer_1_Display");
const computerDisplay = document.getElementById("computer_2_Display");
const resultDisplay = document.getElementById("resultDisplay");


function playGame() {
    const computer1Choice = choices[Math.floor(Math.random() * 3)];
    const computer2Choice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(computer1Choice === computer2Choice) {
        result = "It's a tie!"
    }
    else
    {
        switch(computer1Choice){
            case "rock":
                result = (computer2Choice === "scissors") ? "Computer_1 Win!" : "Computer_2 Win!";
                break;
            case "paper":
                result = (computer2Choice === "scissors") ? "Computer_2 Win!" : "Computer_1 Win!";
                break;
            case "scissors":
                result = (computer2Choice === "paper") ? "Computer_1 Win!" : "Computer_2 Win!";
                break;
        }
    }

    playerDisplay.textContent = `Computer_1: ${computer1Choice}`;
    computerDisplay.textContent = `Computer_2: ${computer2Choice}`;
    resultDisplay.textContent = `Result: ${result}`;

}
