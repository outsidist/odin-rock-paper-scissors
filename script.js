
//available choices
const choices = ['rock', 'paper', 'scissors'] 

//computer choice
function computerChoice() {
    const choose = Math.floor(Math.random() * choices.length);
    return choices[choose];
}

function userChoice () {
    //need to include a way of weeding out entries that aren't rock, paper or scissors, maybe checking whether or not the userSelection variable is equivalent to an item in the choices array
    let userSelection = '';

    // Keep prompting until the user enters a valid choice
    while (!choices.includes(userSelection)) {
        userSelection = prompt('Please choose rock, paper, or scissors').toLowerCase();
    }

    console.log('You chose ' + userSelection + ';');
    return userSelection;
}

//compare user choice with computer choice
function compareSelections(userSelection, computerSelection) {
    if (userSelection === computerSelection) {
        console.log("we drew")
    } else if (userSelection === "paper") {
            if (computerSelection === "scissors") {
                console.log("ha you lost")
                computerWin++; 
            } else {
                console.log("okay you won")
                userWin++;
            }
    } else if (userSelection === "rock") {
            if (computerSelection === "paper") {
                console.log("ha you lost")
                computerWin++;
            } else {
                console.log("okay you won")
                userWin++;
            }
        }
    else { if (computerSelection === "rock") {
                console.log("ha you lost")
                computerWin++;
            } else 
            {
                console.log("okay you won")
                userWin++;
            }
            }

}

function playRound () {
    const computerSelection = computerChoice();
    console.log(computerSelection);
    const userSelection = userChoice();
    compareSelections(userSelection,computerSelection);
}

function declareWinner() {
    if (userWin>computerWin) {
        alert("You, a puny human, won this game, your score was "+ userWin + ".")
    }
    else if (userWin<computerWin) {
        alert("The mighty computer won this game, your score was "+ userWin + ".")
    }
    else {
        alert("What a coincidence, we drew, your score was "+ userWin + ".")
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound()
        console.log(userWin + ' user wins || ' + computerWin + ' computer wins')
    }
    declareWinner();
}

let userWin = 0
let computerWin = 0

game()



