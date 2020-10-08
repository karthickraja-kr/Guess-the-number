// Variable for store the correct random number
let correctNumber = getRandomNumber();
let guesses = [];

window.onload = function () {
  document.getElementById("number-submit").addEventListener("click", playGame);
  document.getElementById("restart-game").addEventListener("click", initGame);
  document.getElementById("number-guess").focus();
  var input = document.getElementById("number-guess");
  input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("number-submit").click();
    }
  });
};
// get Value
function playGame() {
  let numberGuess = document.getElementById("number-guess").value;
  displayResult(numberGuess);
  document.getElementById("number-guess").value = "";
  document.getElementById("number-guess").focus();
}
// Display Alert
function displayResult(numberGuess) {
  let type, message;
  storeGuesses(numberGuess);
  if (numberGuess >= 0 && numberGuess <= 99) {
    if (numberGuess > correctNumber) {
      type = "warning";
      message = "Your number is too high";
    } else if (numberGuess < correctNumber) {
      type = "warning";
      message = "Your number is too low";
    } else {
      message = "Awesome you find it";
      type = "success";
    }
  } else {
    type = "warning";
    message = "Please, Enter number in between 0 - 99";
  }
  getDialog(type, message);
  displayHistory();
}
//
function initGame() {
  correctNumber = getRandomNumber();
  guesses = [];
  getDialog("success", "Restarted : )");
  displayHistory();
  document.getElementById("number-guess").focus();
}

/**
 * Reset the HTML content for guess history
 */
function resetResultContent() {
  document.getElementById("result").innerHTML = "";
}
// Random Value
function getRandomNumber() {
  let correctValue = Math.floor(Math.random() * 100);
  return correctValue;
}
// store History
function storeGuesses(guess) {
  guesses.unshift(guess);
}
// History
function displayHistory() {
  let sample = "<ul class='list-group'>";
  guesses.forEach((item) => {
    sample += `<li class="list-group-item list-group-item-dark"> You Guessed ${item} </li>`;
  });
  document.getElementById("history").innerHTML = sample + "</ul>";
}
// Alert Dialog
function getDialog(dialogType, text) {
  let dialog;
  switch (dialogType) {
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>";
      break;
    case "success":
      dialog = "<div class='alert alert-success' role='alert'>";
      break;
  }
  dialog += text;
  dialog += "</div>";
  document.getElementById("result").innerHTML = dialog;
}
