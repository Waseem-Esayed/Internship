let header = document.getElementsByTagName("header")[0];
let playerLabel = document.getElementById("player-label");
let main = document.getElementsByTagName("main")[0];
let playAgainBtn = document.getElementById("play-again-btn");

main.style.height =
  parseFloat(window.getComputedStyle(main).width) * (6 / 7) + "px";
window.onresize = function () {
  main.style.height =
    parseFloat(window.getComputedStyle(main).width) * (6 / 7) + "px";
};

header.style.height =
  parseFloat(window.getComputedStyle(main).width) / 4 + "px";
window.onresize = function () {
  header.style.height =
    parseFloat(window.getComputedStyle(main).width) / 4 + "px";
};

for (let i = 1; i <= 42; i++) {
  let innerBox = document.createElement("div");
  innerBox.classList.add("inner-box");
  innerBox.id = `inner-box-${i}`;
  innerBox.setAttribute("title", `box-${i}`);
  main.appendChild(innerBox);
  // innerBox.innerHTML = i;
}

let playerTurn = 1;
let clickedElement;
let gameOver = false;

setMark();

function setMark() {
  for (let i = 1; i <= 42; i++) {
    document.getElementById(`inner-box-${i}`).onclick = function () {
      if (!gameOver) {
        if (
          !document
            .getElementById(`inner-box-${i}`)
            .classList.contains("marked")
        ) {
          clickedElement = document.getElementById(`inner-box-${i}`);
          if (playerTurn === 1) {
            clickedElement.style.backgroundImage =
              "url('images/christmas tree.png')";

            clickedElement.classList.add("tree-mark");

            playerTurn++;
          } else {
            clickedElement.style.backgroundImage =
              "url('images/santa hat.png')";

            clickedElement.classList.add("hat-mark");
            playerTurn--;
          }
          clickedElement.classList.add("marked");
          playerLabel.innerHTML = `Player - ${playerTurn}`;
          checkWin();
        }
      }
    };
  }
}

function checkWin() {
  // Rows
  for (let x = 1; x <= 36; x += 7) {
    for (let i = 0; i <= 3; i++) {
      checkGameOver(
        "tree-mark",
        "horizontal",
        x + i,
        x + 1 + i,
        x + 2 + i,
        x + 3 + i
      );
      checkGameOver(
        "hat-mark",
        "horizontal",
        x + i,
        x + 1 + i,
        x + 2 + i,
        x + 3 + i
      );
    }
  }

  // Columns
  for (let x = 1; x <= 7; x++) {
    for (let i = 0; i <= 14; i += 7) {
      checkGameOver(
        "tree-mark",
        "vertical",
        x + i,
        x + 7 + i,
        x + 14 + i,
        x + 21 + i
      );
      checkGameOver(
        "hat-mark",
        "vertical",
        x + i,
        x + 7 + i,
        x + 14 + i,
        x + 21 + i
      );
    }
  }

  // Diagonal -  Bottom Left To Top Right
  checkGameOver("tree-mark", "rise", 22, 16, 10, 4);
  checkGameOver("tree-mark", "rise", 29, 23, 17, 11);
  checkGameOver("tree-mark", "rise", 23, 17, 11, 5);
  checkGameOver("tree-mark", "rise", 36, 30, 24, 18);
  checkGameOver("tree-mark", "rise", 30, 24, 18, 12);
  checkGameOver("tree-mark", "rise", 24, 18, 12, 6);
  checkGameOver("tree-mark", "rise", 37, 31, 25, 19);
  checkGameOver("tree-mark", "rise", 31, 25, 19, 13);
  checkGameOver("tree-mark", "rise", 25, 19, 13, 7);
  checkGameOver("tree-mark", "rise", 38, 32, 26, 20);
  checkGameOver("tree-mark", "rise", 32, 26, 20, 14);
  checkGameOver("tree-mark", "rise", 39, 33, 27, 21);

  checkGameOver("hat-mark", "rise", 22, 16, 10, 4);
  checkGameOver("hat-mark", "rise", 29, 23, 17, 11);
  checkGameOver("hat-mark", "rise", 23, 17, 11, 5);
  checkGameOver("hat-mark", "rise", 36, 30, 24, 18);
  checkGameOver("hat-mark", "rise", 30, 24, 18, 12);
  checkGameOver("hat-mark", "rise", 24, 18, 12, 6);
  checkGameOver("hat-mark", "rise", 37, 31, 25, 19);
  checkGameOver("hat-mark", "rise", 31, 25, 19, 13);
  checkGameOver("hat-mark", "rise", 25, 19, 13, 7);
  checkGameOver("hat-mark", "rise", 38, 32, 26, 20);
  checkGameOver("hat-mark", "rise", 32, 26, 20, 14);
  checkGameOver("hat-mark", "rise", 39, 33, 27, 21);

  // Diagonal -  Top Left To Bottom Right
  checkGameOver("tree-mark", "fall", 15, 23, 31, 39);
  checkGameOver("tree-mark", "fall", 8, 16, 24, 32);
  checkGameOver("tree-mark", "fall", 16, 24, 32, 40);
  checkGameOver("tree-mark", "fall", 1, 9, 17, 25);
  checkGameOver("tree-mark", "fall", 9, 17, 25, 33);
  checkGameOver("tree-mark", "fall", 17, 25, 33, 41);
  checkGameOver("tree-mark", "fall", 2, 10, 18, 26);
  checkGameOver("tree-mark", "fall", 10, 18, 26, 34);
  checkGameOver("tree-mark", "fall", 18, 26, 34, 42);
  checkGameOver("tree-mark", "fall", 3, 11, 19, 27);
  checkGameOver("tree-mark", "fall", 11, 19, 27, 35);
  checkGameOver("tree-mark", "fall", 4, 12, 20, 28);

  checkGameOver("hat-mark", "fall", 15, 23, 31, 39);
  checkGameOver("hat-mark", "fall", 8, 16, 24, 32);
  checkGameOver("hat-mark", "fall", 16, 24, 32, 40);
  checkGameOver("hat-mark", "fall", 1, 9, 17, 25);
  checkGameOver("hat-mark", "fall", 9, 17, 25, 33);
  checkGameOver("hat-mark", "fall", 17, 25, 33, 41);
  checkGameOver("hat-mark", "fall", 2, 10, 18, 26);
  checkGameOver("hat-mark", "fall", 10, 18, 26, 34);
  checkGameOver("hat-mark", "fall", 18, 26, 34, 42);
  checkGameOver("hat-mark", "fall", 3, 11, 19, 27);
  checkGameOver("hat-mark", "fall", 11, 19, 27, 35);
  checkGameOver("hat-mark", "fall", 4, 12, 20, 28);

  function checkGameOver(type, direction, first, second, third, fourth) {
    if (
      document.getElementById(`inner-box-${first}`).classList.contains(type) &&
      document.getElementById(`inner-box-${second}`).classList.contains(type) &&
      document.getElementById(`inner-box-${third}`).classList.contains(type) &&
      document.getElementById(`inner-box-${fourth}`).classList.contains(type)
    ) {
      let positions = [first, second, third, fourth];
      positions.forEach((pos) => {
        let line = document.createElement("div");
        line.classList.add("line-mark");
        if (direction === "horizontal") {
          line.classList.add("horizontal-mark");
        } else if (direction === "vertical") {
          line.classList.add("vertical-mark");
        } else if (direction === "rise") {
          line.classList.add("rise-mark");
        } else {
          line.classList.add("fall-mark");
        }
        document.getElementById(`inner-box-${pos}`).appendChild(line);
      });

      if (type === "tree-mark") {
        playerLabel.innerHTML = "Player 1 Won!";
      } else {
        playerLabel.innerHTML = "Player 2 Won!";
      }
      gameOver = true;
    }
    if (!gameOver) {
      gameOver = true;
      for (let i = 1; i <= 42; i++) {
        if (
          !document
            .getElementById(`inner-box-${i}`)
            .classList.contains("marked")
        ) {
          gameOver = false;
        }
      }
      if (gameOver) playerLabel.innerHTML = "Draw!";
    }
  }
}

playAgainBtn.onclick = resetGame;

function resetGame() {
  gameOver = false;
  playerLabel.innerHTML = `Player - ${playerTurn}`;
  clickedElement = null;
  for (let i = 1; i <= 42; i++) {
    if (
      document.getElementById(`inner-box-${i}`).classList.contains("marked")
    ) {
      document.getElementById(`inner-box-${i}`).style.backgroundImage = "none";
      document.getElementById(`inner-box-${i}`).classList.remove("marked");
      document.getElementById(`inner-box-${i}`).classList.contains("tree-mark")
        ? document
            .getElementById(`inner-box-${i}`)
            .classList.remove("tree-mark")
        : document
            .getElementById(`inner-box-${i}`)
            .classList.remove("hat-mark");
    }

    while (
      document.getElementById(`inner-box-${i}`).querySelector(".line-mark")
    ) {
      document
        .getElementById(`inner-box-${i}`)
        .removeChild(
          document.getElementById(`inner-box-${i}`).querySelector(".line-mark")
        );
    }
  }
}
