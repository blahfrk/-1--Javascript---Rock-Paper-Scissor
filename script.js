let userScore = 0;
let computerScore = 0;

document.querySelector("#rockBtn").addEventListener(`click`, () => {
  selectChoice("rock");
});
document.querySelector("#paperBtn").addEventListener(`click`, () => {
  selectChoice("paper");
});
document.querySelector("#scissorBtn").addEventListener(`click`, () => {
  selectChoice("scissor");
});

/*
document.querySelector('#rockBtn').addEventListener(`click`, selectChoice);
document.querySelector('#paperBtn').addEventListener(`click`, selectChoice);
document.querySelector('#scissorBtn').addEventListener(`click`, selectChoice);
*/

function selectChoice(choice) {
  const computerChoice = makeComputerChoice();

  // Draw
  if (choice === computerChoice) {
    alert(`You both selected ${choice}. No points to both player.`);

    // Checks and compares the two players choices for scoring
  } else if (choice === "rock") {
    if (computerChoice === "paper") {
      alert(
        `You selected ${choice} and the computer selected ${computerChoice}. The computer won and scored 1 point`
      );
      computerScore++;
    } else if (computerChoice === "scissor") {
      alert(
        `You selected ${choice} and the computer selected ${computerChoice}. The user won and scored 1 point`
      );
      userScore++;
    }
  } else if (choice === "paper") {
    if (computerChoice === "scissor") {
      alert(
        `You selected ${choice} and the computer selected ${computerChoice}. The computer won and scored 1 point`
      );
      computerScore++;
    } else if (computerChoice === "rock") {
      alert(
        `You selected ${choice} and the computer selected ${computerChoice}. The user won and scored 1 point`
      );
      userScore++;
    }
  } else if (choice === "scissor") {
    if (computerChoice === "rock") {
      alert(
        `You selected ${choice} and the computer selected ${computerChoice}. The computer won and scored 1 point`
      );
      computerScore++;
    } else if (computerChoice === "paper") {
      alert(
        `You selected ${choice} and the computer selected ${computerChoice}. The user won and scored 1 point`
      );
      userScore++;
    }
  }

  updateScores();

  // Check if any player reached the score of 3
  if (computerScore === 3 || userScore === 3) {
    const winnerModal = new bootstrap.Modal(
      document.querySelector("#winnerModal")
    );
    if (userScore > computerScore) {
      document.querySelector("#gameOverTitle").innerHTML = "User Wins!";
      document.querySelector("#gameOverEmoji").innerHTML = "🎉";
      document.querySelector("#gameOverMessage").innerHTML =
        "Congratulations! You have won the game";
    } else if (computerScore > userScore) {
      document.querySelector("#gameOverTitle").innerHTML = "Game Over!";
      document.querySelector("#gameOverEmoji").innerHTML = "😭";
      document.querySelector("#gameOverMessage").innerHTML =
        "Oops! You have lost the game";
    }
    winnerModal.show();

    // Reset the scores after game over
    userScore = 0;
    computerScore = 0;
    updateScores();
  }
}

function updateScores() {
  document.querySelector("#userPlayerScore").innerHTML = userScore;
  document.querySelector("#computerPlayerScore").innerHTML = computerScore;
}

/* Function for computer making a choice */
function makeComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const choice = choices[Math.floor(Math.random() * 3)];
  return choice;
}
