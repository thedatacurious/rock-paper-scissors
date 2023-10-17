function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  let index = Math.floor(Math.random() * 3);
  return choices[index];
}

function playRound(playerSelection, computerSelection) {
playerSelection = playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1).toLowerCase();
  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}!`;
  } else if (playerSelection === computerSelection){
    return "It's a tie, please try again!"
  }
  else {
    return `You lose! ${computerSelection} beats ${playerSelection}!`;
  }
}


function game(){
    let winRate  = 0;
    for(count = 1; count < 6; count ++){
        console.log("We're playing round", count, "out of 5");
        let playerSelection = prompt("Pick your weapon (Rock, Scissors, or Paper)")
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection,computerSelection);
        if (result.includes("win")){
            winRate += 1;
        }
        console.log(result);
    }
    console.log("You've won", winRate, "x")

}

game();