const rockBtn = document.getElementById("rock-btn");
const scissorBtn = document.getElementById("scissor-btn");
const paperBtn = document.getElementById("paper-btn");
const resultElement = document.getElementById("result");
const computerScoreElement = document.getElementById("score-computer");
const userScoreElement = document.getElementById("score-user");
const rulesButton = document.getElementById("rules");
const popupBanner = document.getElementById("popup-banner");
const popupContent = document.getElementById("popup-content");
const closeBtn = document.getElementById("close-btn");
const nextButton = document.getElementById("next");
const playAgainButton = document.getElementById("play-again");

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
    userScore++;
    if(userScore>0){
      nextButton.style.display = "block";
    }
    resultElement.innerHTML= "YOU WON AGAINST PC!";
  } else {
    computerScore++;
    resultElement.innerHTML= "YOU LOST AGAINST PC";
  }
}

//userchoice
function handleUserChoice(userChoice) {
  // Generate computer's choice
  const computerChoice = generateComputerChoice();
  const result = determineWinner(userChoice, computerChoice);

  computerScoreElement.textContent = computerScore;
  userScoreElement.textContent = userScore;

  // Store the scores in local storage
  localStorage.setItem("computerScore", computerScore);
  localStorage.setItem("userScore", userScore);
  playAgainButton.style.display = "block";
}

// Add event listeners to buttons
rockBtn.addEventListener("click", () => handleUserChoice("rock"));
scissorBtn.addEventListener("click", () => handleUserChoice("scissor"));
paperBtn.addEventListener("click", () => handleUserChoice("paper"));

rulesButton.addEventListener("click", () => {
    popupBanner.style.display = "block";
  });
  
  // Event listener for the close button
  closeBtn.addEventListener("click", () => {
    popupBanner.style.display = "none";
  });
  

  nextButton.addEventListener("click", () => {
    if (userScore > 0) {
      window.location.href = "win.html";
    }
  });
  function handlePlayAgain() {
    // Reset the scores to 0
    computerScore = 0;
    userScore = 0;
  
    // Update the scores on the page
    computerScoreElement.textContent = computerScore;
    userScoreElement.textContent = userScore;
  
    // Hide the "PLAY AGAIN" button
    playAgainButton.style.display = "none";
    
    // Show the user's choice buttons
    rockBtn.style.display = "inline-block";
    scissorBtn.style.display = "inline-block";
    paperBtn.style.display = "inline-block";
  
    // Clear the result
    resultElement.textContent = "";
  }