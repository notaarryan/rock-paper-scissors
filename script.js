let getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "ROCK";
  } else if (randomNumber === 1) {
    return "PAPER";
  } else if (randomNumber === 2) {
    return "SCISSORS";
  }
};

let checkWinner = () => {
  if (humanScore == 5 || computerScore == 5) {
    if (humanScore > computerScore) {
      resultDiv.innerText = `Your score = ${humanScore} Computer Score = ${computerScore}\nYou Win`;
    } else if (humanScore < computerScore) {
      resultDiv.innerText = `Your score = ${humanScore} Computer Score = ${computerScore}\nComputer Wins`;
    } else if (humanScore === computerScore) {
      resultDiv.innerText = `Your score = ${humanScore} Computer Score = ${computerScore}\nIt is a tie`;
    } else {
      resultDiv.innerText = `Your score = ${humanScore} Computer Score = ${computerScore}\nError`;
    }
    computerScore = 0;
    humanScore = 0;
  }
};

let playRound = (humanChoice, computerChoice) => {
  humanChoice = humanChoice.toUpperCase();
  computerChoice = computerChoice.toUpperCase();

  if (humanChoice === computerChoice) {
    resultDiv.innerText = `It's a tie! Both chose ${humanChoice}\nYour score = ${humanScore} Computer Score = ${computerScore}`;
  } else if (
    (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (humanChoice === "PAPER" && computerChoice === "ROCK") ||
    (humanChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    humanScore++;
    resultDiv.innerText = `You win! ${humanChoice} beats ${computerChoice}\nYour score = ${humanScore} Computer Score = ${computerScore}`;
  } else {
    computerScore++;
    resultDiv.innerText = `You lose! ${computerChoice} beats ${humanChoice}\nYour score = ${humanScore} Computer Score = ${computerScore}`;
  }
};

let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const resultDiv = document.querySelector(".results");
console.log(rock);

rock.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
  checkWinner();
});
paper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
  checkWinner();
});
scissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
  checkWinner();
});
