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


//available choices
choices = ['rock', 'paper', 'scissors'] 

//computer choice
function computerChoice() {
    const choose = Math.floor(Math.random() * choices.length);
    return choices[choose];
}

const computerSelection = computerChoice();
//user choice
const userSelection = userChoice()

function userChoice () {
    //need to include a way of weeding out entries that aren't rock, paper or scissors, maybe checking whether or not the userSelection variable is equivalent to an item in the choices array
    const userSelection = prompt('Please choose rock, paper or scissors').toLowerCase();
    console.log('You chose '+ userSelection +';');
    alert('You chose ' + userSelection);
    return userSelection;
}


