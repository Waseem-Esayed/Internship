let contentContainer = document.getElementsByClassName("container")[0];
let resetBtn = document.getElementById("reset-btn");
let gameContainer = document.getElementsByTagName("main")[0];
let movesCounter = document.getElementById("moves-counter");
let timeCounter = document.getElementById("time-counter");
let star_1 = document.getElementById("star1");
let star_2 = document.getElementById("star2");
let star_3 = document.getElementById("star3");

let iconContainer = [
  "fa-tree",
  "fa-tree",
  "fa-snowflake",
  "fa-snowflake",
  "fa-cookie-bite",
  "fa-cookie-bite",
  "fa-holly-berry",
  "fa-holly-berry",
  "fa-gift",
  "fa-gift",
  "fa-candy-cane",
  "fa-candy-cane",
  "fa-mitten",
  "fa-mitten",
  "fa-sleigh",
  "fa-sleigh",
];

contentContainer.style.height = window.getComputedStyle(contentContainer).width;
gameContainer.style.minHeight = window.getComputedStyle(gameContainer).width;

window.onresize = function () {
  contentContainer.style.height =
    window.getComputedStyle(contentContainer).width;
  gameContainer.style.minHeight = window.getComputedStyle(gameContainer).width;
};

for (let i = 1; i <= 16; i++) {
  let innerBox = document.createElement("div");
  innerBox.classList.add("inner-box");
  innerBox.id = `inner-box-${i}`;
  gameContainer.appendChild(innerBox);

  let randomIndex = Math.floor(Math.random() * iconContainer.length);
  let icon = document.createElement("i");
  icon.classList.add("fa-solid", `${iconContainer[randomIndex]}`, "icon");
  icon.style.fontSize = "0rem";
  icon.style.transition = "100ms font-size ease-in-out";
  innerBox.appendChild(icon);
  iconContainer.splice(randomIndex, 1);
}

let selectedElement;
let firstPickElement = null;
let secondPickElement = null;
let moves = 0;
let timeInterval;

for (let i = 1; i <= 16; i++) {
  document.getElementById(`inner-box-${i}`).style.transition =
    "250ms background ease-in-out";
  document.getElementById(`inner-box-${i}`).onclick = function () {
    if (
      !document.getElementById(`inner-box-${i}`).classList.contains("solved")
    ) {
      if (firstPickElement === null) {
        if (moves === 0) startCountingTime();
        selectedElement = document.getElementById(`inner-box-${i}`);
        selectedElement.style.background = "rgb(135, 206, 235)";
        selectedElement.querySelector(".fa-solid").style.fontSize = "2rem";

        firstPickElement = document.getElementById(`inner-box-${i}`);
        secondPickElement = null;
      } else if (secondPickElement === null) {
        selectedElement = document.getElementById(`inner-box-${i}`);
        if (firstPickElement !== selectedElement) {
          selectedElement.style.background = "rgb(135, 206, 235)";
          selectedElement.querySelector(".fa-solid").style.fontSize = "2rem";

          secondPickElement = document.getElementById(`inner-box-${i}`);

          moves++;
          movesCounter.innerHTML = moves;
          checkComparison();
        }
      }
      checkGameOver();
    }
  };
}

function checkComparison() {
  if (
    firstPickElement !== secondPickElement &&
    firstPickElement.querySelector(".fa-solid").className ===
      secondPickElement.querySelector(".fa-solid").className
  ) {
    firstPickElement.classList.add("solved");
    secondPickElement.classList.add("solved");
    setTimeout(function () {
      firstPickElement.style.background = "rgb(4, 172, 54)";
      secondPickElement.style.background = "rgb(4, 172, 54)";
      firstPickElement = null;
    }, 300);
  } else {
    setTimeout(function () {
      firstPickElement.style.background = "red";
      secondPickElement.style.background = "red";
    }, 500);
    setTimeout(function () {
      firstPickElement.style.background =
        "linear-gradient(to top, black, rgb(69, 72, 77))";
      secondPickElement.style.background =
        "linear-gradient(to top, black, rgb(69, 72, 77))";

      firstPickElement.querySelector(".fa-solid").style.fontSize = "0rem";
      secondPickElement.querySelector(".fa-solid").style.fontSize = "0rem";
      firstPickElement = null;
    }, 1000);
  }
}

function checkGameOver() {
  let gameOver = true;
  for (let i = 1; i <= 16; i++) {
    if (
      !document.getElementById(`inner-box-${i}`).classList.contains("solved")
    ) {
      gameOver = false;
      break;
    }
  }
  if (gameOver) {
    for (let i = 1; i <= 16; i++) {
      document.getElementById(`inner-box-${i}`).style.cursor = "default";
      clearInterval(timeInterval);
    }
  }
}

function startCountingTime() {
  let time = 0;
  timeInterval = setInterval(() => {
    time++;
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    timeCounter.innerHTML = `${minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
    if (seconds >= 30) star_3.style.display = "none";
    if (seconds >= 50) star_2.style.display = "none";
    if (minutes >= 1 && seconds >= 10) star_1.style.display = "none";
  }, 1000);
}

function resetGame() {
  gameOver = false;
  star_1.style.display = "inline";
  star_2.style.display = "inline";
  star_3.style.display = "inline";
  firstPickElement = null;
  secondPickElement = null;
  moves = 0;
  movesCounter.innerHTML = moves;
  time = 0;
  timeCounter.innerHTML = "0:00";
  if (timeInterval) clearInterval(timeInterval);
  for (let i = 1; i <= 16; i++) {
    document.getElementById(`inner-box-${i}`).style.cursor = "pointer";
    document.getElementById(`inner-box-${i}`).classList.remove("solved");
    document.getElementById(`inner-box-${i}`).style.background =
      "linear-gradient(to top, black, rgb(69, 72, 77))";
    document
      .getElementById(`inner-box-${i}`)
      .querySelector(".fa-solid").style.fontSize = "0rem";
  }
}

resetBtn.onclick = resetGame;
