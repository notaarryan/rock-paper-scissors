function getComputerChoice() {
  let random = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

  if (random === 1) {
    return "rock";
  } else if (random === 2) {
    return "paper";
  } else if (random === 3) {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = " ";
  while (
    choice.toLowerCase().trim() !== "rock" &&
    choice.toLowerCase().trim() !== "paper" &&
    choice.toLowerCase().trim() !== "scissors"
  ) {
    choice = prompt("Enter your choice(Rock, Paper or Scissors");
  }
  return choice;
}

function playRound(hChoice, cChoice) {
  for (i = 1; i <= 5; i++) {
    console.log(`Round ${i}`);
    let hChoice = getHumanChoice();
    let cChoice = getComputerChoice();
    switch (hChoice) {
      case "rock":
        if (cChoice === "paper") {
          console.log(
            `Computer chose ${cChoice} and you chose ${hChoice}, So computer win!`
          );
          computerScore++;
          console.log(
            `Your score: ${humanScore}, Computer Score: ${computerScore}`
          );
        } else if (cChoice === "scissors") {
          console.log(
            `Computer chose ${cChoice} and you chose ${hChoice}, So you win!`
          );
          humanScore++;
          console.log(
            `Your score: ${humanScore}, Computer Score: ${computerScore}`
          );
        } else if (cChoice === hChoice) {
          console.log(
            `Computer chose ${cChoice} and you chose ${hChoice}, So its a draw!`
          );
          console.log(
            `Your score: ${humanScore}, Computer Score: ${computerScore}`
          );
        }
        break;
      case "paper":
        if (cChoice === "scissors") {
          console.log(
            `Computer chose ${cChoice} and you chose ${hChoice}, So computer win!`
          );
          computerScore++;
          console.log(
            `Your score: ${humanScore}, Computer Score: ${computerScore}`
          );
        } else if (cChoice === "rock") {
          console.log(
            `Computer chose ${cChoice} and you chose ${hChoice}, So you win!`
          );
          humanScore++;
          console.log(
            `Your score: ${humanScore}, Computer Score: ${computerScore}`
          );
        } else if (cChoice === hChoice) {
          console.log(
            `Computer chose ${cChoice} and you chose ${hChoice}, So its a draw!`
          );
          console.log(
            `Your score: ${humanScore}, Computer Score: ${computerScore}`
          );
        }
        break;
      case "scissors":
        if (cChoice === "rock") {
          console.log(
            `Computer chose ${cChoice} and you chose ${hChoice}, So computer win!`
          );
          computerScore++;
          console.log(
            `Your score: ${humanScore}, Computer Score: ${computerScore}`
          );
        } else if (cChoice === "paper") {
          console.log(
            `Computer chose ${cChoice} and you chose ${hChoice}, So you win!`
          );
          humanScore++;
          console.log(
            `Your score: ${humanScore}, Computer Score: ${computerScore}`
          );
        } else if (cChoice === hChoice) {
          console.log(
            `Computer chose ${cChoice} and you chose ${hChoice}, So its a draw!`
          );
          console.log(
            `Your score: ${humanScore}, Computer Score: ${computerScore}`
          );
        }
        break;
    }
  }
}

let humanScore = 0;
let computerScore = 0;
playRound();
