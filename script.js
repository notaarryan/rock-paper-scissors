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

let getHumanChoice = () => {
  let humanChoice = prompt("Enter your choice (Rock/Paper/Scissors)");
  humanChoice = humanChoice.toUpperCase();
  if (
    humanChoice !== "ROCK" &&
    humanChoice !== "PAPER" &&
    humanChoice !== "SCISSORS"
  ) {
    alert("Error invalid input");
    return getHumanChoice();
  } else {
    return humanChoice;
  }
};

let playRound = (humanChoice, computerChoice) => {
  humanChoice = humanChoice.toUpperCase();
  computerChoice = computerChoice.toUpperCase();

  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both chose ${humanChoice}`);
    return "Tie";
  }

  if (
    (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (humanChoice === "PAPER" && computerChoice === "ROCK") ||
    (humanChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    return "Win";
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    return "Lose";
  }
};

let playGame = () => {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  console.log("Final Scores:");
  console.log("Human:", humanScore);
  console.log("Computer:", computerScore);

  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (humanScore < computerScore) {
    console.log("Computer won the game!");
  } else {
    console.log("It's a tie game!");
  }
};

playGame();
