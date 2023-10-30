const container = document.querySelector("#container");
const resultDisplay = document.createElement("div");

const rock = document.createElement("button");
rock.textContent = "Rock";
rock.setAttribute("id", "rock");

const scissors = document.createElement("button");
scissors.textContent = "Scissors";
scissors.setAttribute("id", "scissors");

const paper = document.createElement("button");
paper.textContent = "Paper";
paper.setAttribute("id", "paper");

container.appendChild(resultDisplay);
container.appendChild(rock);
container.appendChild(scissors);
container.appendChild(paper);

const record = {
  winRate: 0,
  count: 1,
  result: "",
};

container.addEventListener("click", (e) => {
  let target = e.target;
  let playerSelection;
  let computerSelection = getComputerChoice();
  switch (target.id) {
    case "rock":
      playerSelection = "Rock";
      break;
    case "scissors":
      playerSelection = "Scissors";
      break;
    case "paper":
      playerSelection = "Paper";
      break;
  }

  record.result = playRound(playerSelection, computerSelection);
  record.count += 1;
  resultDisplay.textContent = `${record.result} Pick again for round ${record.count} out of 5.`;

  if (record.result.includes("win")) {
    record.winRate += 1;
  }

  if (record.count === 6) {
    resultDisplay.textContent = `${record.result} 
    Game over. You've won ${record.winRate}x.`;
    container.removeChild(rock);
    container.removeChild(scissors);
    container.removeChild(paper);
  }
});

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  let index = Math.floor(Math.random() * 3);
  return choices[index];
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}!`;
  } else if (playerSelection === computerSelection) {
    return `It's a tie! The computer chose ${playerSelection} too.`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}!`;
  }
}



  resultDisplay.textContent = `Pick an option.This is round ${record.count} out of 5.`;




