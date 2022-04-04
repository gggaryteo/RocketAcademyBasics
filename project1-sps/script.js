/* 
Create a basic version of Scissors Paper Stone where the user inputs one of "scissors", "paper", or "stone", 
the program internally randomly chooses scissors, paper, or stone, and the program outputs whether the user won, the program won, or it's a draw.
Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.
*/

// State global variables
var currentGameMode = "waiting For Username";
var userName = "";
var numUserWins = 0;
var numComputerWins = 0;
var totalGamesPlayed = 0;
var winPercentage = (numUserWins / totalGamesPlayed) * 100;
var losePercentage = (numComputerWins / totalGamesPlayed) * 100;

// Assign scissors, paper, stone to a value respectively.
// Randomize the output given by the computer by creating a helper function with Math.random
// Computer outputs scissors, paper, or stone at random.
var generateRandomInteger = function () {
  return Math.floor(Math.random() * 3 + 1);
};

var generatePaperScissorsStone = function () {
  var randomSignByComputer = generateRandomInteger();
  console.log(`Computer generated sign is ${randomSignByComputer}`);
  if (randomSignByComputer == 1) {
    return `scissors`;
  }
  if (randomSignByComputer == 2) {
    return `paper`;
  } else {
    return `stone`;
  }
};

// Create a Username function
var initialUsername = function (inputName) {
  userName = inputName.charAt(0).toUpperCase() + inputName.slice(1);
  currentGameMode = "Play Scissors, Paper, Stone.";
  return `Hello, ${userName}. Please enter scissors ✂️, paper 📄, or stone 🗿 to start playing.`;
};

// Refactoring Code: Scissors Paper Stone Game Logic
var playPaperScissorsStone = function (userName, userGuess) {
  var userGuess = userGuess.toLowerCase();

  // User input Validation
  if (userGuess != `scissors` && userGuess != `paper` && userGuess != `stone`) {
    return `Hello ${userName}! This is an invalid input. Please enter scissors ✂️, paper 📄, or stone 🗿 only.`;
  }

  // Computer generated Scissors Paper Stone
  var computerObject = generatePaperScissorsStone();
  console.log(`Computer generated sign is ${computerObject}`);
  var genericOutput = `Hi ${userName}, you have chosen ${userGuess}. <br> Bot Lewis picked ${computerObject}.`;

  // Human wins Bot Computer Scenario
  if (
    (userGuess == `scissors` && computerObject == `paper`) ||
    (userGuess == `paper` && computerObject == `stone`) ||
    (userGuess == `stone` && computerObject == `scissors`)
  ) {
    numUserWins++;
    console.log(`The number of times user won: ${numUserWins}`);
    genericOutput += `<br><br> You emerged victorious! <br> <br>`;
  }
  // Human Draws Against Bot Computer Scenario
  else if (userGuess == computerObject) {
    numUserWins;
    numComputerWins;
    genericOutput += `<br><br> This match ends in a draw! <br><br>`;
  }
  // Human Loses Against Bot Computer Default Output
  else {
    numComputerWins++;
    console.log(`The number of times Bot Lewis won: ${numComputerWins}`);
    genericOutput += `<br><br> Don't lose hope... Try again next time. <br> <br>`;
  }
  totalGamesPlayed++;
  console.log(`Total Games: ${totalGamesPlayed}`);
  winPercentage = (numUserWins / totalGamesPlayed) * 100;
  losePercentage = (numComputerWins / totalGamesPlayed) * 100;

  var winLossInfo = `
  Total Games Played: ${totalGamesPlayed} 
  <br><br> Wins: ${numUserWins} (${winPercentage.toFixed(
    2
  )}%) <br> <br> Loss: ${numComputerWins} (${losePercentage.toFixed(2)}%)`;

  return genericOutput + winLossInfo;
};

var main = function (input) {
  // Set to name mode first
  if (currentGameMode == "waiting For Username") {
    return initialUsername(input);
    // Set to Scissors, Paper, Stone Mode
  } else if ((currentGameMode = "Play Scissors, Paper, Stone.")) {
    return playPaperScissorsStone(userName, input);
  }
};
