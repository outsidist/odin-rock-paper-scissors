/* the task is to create a game of rock paper scissors
that you play entirely within the console against
the computer. 

To do this I will need to do the following:
1) Start a game 
function PlayGame() {}
2) Get the computer to choose rock/paper/scissors
    choices = ['rock', 'paper', 'scissors'] 
    function computerChoice() {
        const choose = Math.Floor(Math.Random()) * choices.length);
        return choices[choose];
    }
    const computerSelection = computerChoice();
    console.log(computerSelection)

3) 
5) Have the player select "rock" "paper" or "scissors" prompt("choose rock, paper or scissors")
6) Compare the variables
    if (userSelection === computerSelection) {
        console.log("we drew")
    } else if (userSelection === "paper") {
            if (computerSelection === "scissors") {
                console.log("ha you lost")
             } else {
                console.log("okay you won")
             }
    } else if (userSelection === "rock") {
            if (computerSelection === "paper" {
                console.log("ha you lost")
            } else {
                console.log("okay you won")
            }
        }
    else {
            if (computerSelection === "rock") {
                console.log("ha you lost")
            } else {
                console.log("okay you won")
            }
            }
    }
    }

function getComputerChoice() {
    // code
} 

*/

function playGame(){
choices = ['rock', 'paper', 'scissors'] 
function computerChoice() {
    const choose = Math.floor(Math.random() * choices.length);
    return choices[choose];
}
const computerSelection = computerChoice();
console.log(computerSelection)

}


playGame()