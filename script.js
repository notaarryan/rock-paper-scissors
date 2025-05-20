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