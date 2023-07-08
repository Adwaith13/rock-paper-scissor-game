const rockBtn = document.getElementById("rock-btn");
const scissorBtn = document.getElementById("scissor-btn");
const paperBtn = document.getElementById("paper-btn");
const resultElement = document.getElementById("result");
const computerScoreElement = document.getElementById("score-computer");
const userScoreElement = document.getElementById("score-user");

//storing score in localstorage
let computerScore = localStorage.getItem("computerScore") || 0;
let userScore = localStorage.getItem("userScore") || 0;

// Updating scores 
computerScoreElement.textContent = computerScore;
userScoreElement.textContent = userScore;

// computers choice
function generateComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// winner
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    resultElement.innerHTML= "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissor") ||
    (userChoice === "scissor" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    return "You win!"
  } else {
    return "Computer wins!"
  }
}

//userchoice
function handleUserChoice(userChoice) {
  // Generate computer's choice
  const computerChoice = generateComputerChoice();

  const result = determineWinner(userChoice, computerChoice);


  // Update the scores
  if (result === "You win!") {
    userScore++;
    resultElement.innerHTML= "YOU WON AGAINST PC!";
  } else if (result === "Computer wins!") {
    computerScore++;
    resultElement.innerHTML= "YOU LOST AGAINST PC";
  }

  // Update the scores on the page
  computerScoreElement.textContent = computerScore;
  userScoreElement.textContent = userScore;

  // Store the scores in local storage
  localStorage.setItem("computerScore", computerScore);
  localStorage.setItem("userScore", userScore);
}

// Add event listeners to buttons
rockBtn.addEventListener("click", () => handleUserChoice("rock"));
scissorBtn.addEventListener("click", () => handleUserChoice("scissor"));
paperBtn.addEventListener("click", () => handleUserChoice("paper"));
