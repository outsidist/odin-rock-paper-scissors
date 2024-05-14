# odin-rock-paper-scissors
The Odin Project - Rock Paper Scissors in Javascript
This is a repo for the Odin Project's Rock Paper Scissors assignment. The task is to make a version of rock paper scissors in javascript.
At this time in the course the game does not need a graphical interface.


Notes during development
/* the task is to create a game of rock paper scissors
that you play entirely within the console against
the computer. 

To do this I will need to do the following:
1) DONE Start a game 
function PlayGame() {}
2) DONE Get the computer to choose rock/paper/scissors
    choices = ['rock', 'paper', 'scissors'] 
    function computerChoice() {
        const choose = Math.Floor(Math.Random()) * choices.length);
        return choices[choose];
    }
    const computerSelection = computerChoice();
    console.log(computerSelection)
3) Have the player select "rock" "paper" or "scissors" prompt("choose rock, paper or scissors")
4) Compare the variables in a function
function checkWinner(playerSelection, computerSelection) {
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
}

} 

Overall game structure:
1) playGame()
2) start counter
3) define choices
4) computerChoice() to produce computerSelection
5) userChoice() to produce userSelection
6) compare userSelection with computerSelection and output winner/loser text
7) add result to counter
8) when counter at 3 declare overall winner

*/

