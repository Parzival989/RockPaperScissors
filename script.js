// Global Variables //

const results = ["paper", "scissor", "rock"];
let scorePlayer = 0;
let scoreComputer = 0;
const scoreToWin = 5;

// Functions

const getComputerChoice = () => {
  let computerChoice = Math.floor(Math.random() * 3);
  return results[computerChoice];
};

const playRound = (computerSelection, playerSelection) => {
  let result = "";

  // Computer wins
  if (
    (computerSelection === "scissor" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "rock" && playerSelection === "scissor")
  ) {
    result = "computer";
    //result = `You Lose! ${computerSelection} beats ${playerSelection}`;
  }

  // Player wins
  // Computer wins
  if (
    (playerSelection === "scissor" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissor")
  ) {
    //result = `You Win! ${playerSelection} beats ${computerSelection}`;
    result = `player`;
  }

  // Tie
  if (playerSelection.toLowerCase() === computerSelection) {
    result = `Tie`;
  }

  return result;
};

const getPlayerChoice = () => {
  let validInput = false;
  let result = "";
  let playerSelection = prompt("what is you choice?");
  while (!validInput) {
    if (results.includes(playerSelection.toLowerCase())) {
      result = playerSelection;
      validInput = true;
    } else {
      validInput = false;
      playerSelection = prompt("You can only select scissor,paper,rock");
    }
  }
  return result;
};

const game = () => {
  scoreComputer = 0;
  scorePlayer = 0;
  while (!(scoreComputer == scoreToWin || scorePlayer == scoreToWin)) {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    let result = playRound(computerSelection, playerSelection);

    if (result == "computer") {
      console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
      scoreComputer++;
    } else if ((result = "player")) {
      console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
      scorePlayer++;
    }
    console.log(`Computer ${scoreComputer} Player ${scorePlayer}`);
  }

  if (scoreComputer == 5) {
    console.log("Computer wins");
  } else if (scorePlayer == 5) {
    console.log("Player wins");
  }
};

// Testing

// Computer wins
console.log(playRound("paper", "rock"));
console.log(playRound("rock", "scissor"));
console.log(playRound("scissor", "paper"));
// Player wins
console.log(playRound("rock", "paper"));
console.log(playRound("scissor", "rock"));
console.log(playRound("paper", "scissor"));
// Tie
console.log(playRound("rock", "rock"));
console.log(playRound("scissor", "scissor"));
console.log(playRound("paper", "paper"));
// getPlayerInput

game();
