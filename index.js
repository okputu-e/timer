let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let gameStart = false;

function startGame() {
  gameStart = true;
}

function addPoint(a, point) {
  if (gameStart) {
    a === 1
      ? (homeScore.textContent = +homeScore.textContent + point)
      : (guestScore.textContent = +guestScore.textContent + point);
  }
}

function resetGame() {
  homeScore.textContent = "0";
  guestScore.textContent = "0";
}

//Todo: Timer, start button to start the timer
//Todo: Any body that is will the highest value when the timer stops wins

// function addOne(a) {
//   a == 1
//     (homeScore.textContent = +homeScore.textContent + 1)
//     : (guestScore.textContent = +guestScore.textContent + 1);
// }

// function addTwo(b) {
//   b == 1
//     (homeScore.textContent = +homeScore.textContent + 2)
//     : (guestScore.textContent = +guestScore.textContent + 2);
// }

// function addThree(c) {
//   c == 1
//     (homeScore.textContent = +homeScore.textContent + 3)
//     : (guestScore.textContent = +guestScore.textContent + 3);
// }
