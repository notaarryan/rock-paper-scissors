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