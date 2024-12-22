let gameContainer = document.getElementsByClassName("game-container")[0];
let playBtn = document.getElementById("play-btn");
let DOMPointsCount = document.getElementById("points-count");
let dropdown = document.getElementById("difficulty");

gameContainer.style.height = window.getComputedStyle(gameContainer).width;
window.onresize = function () {
  gameContainer.style.height = window.getComputedStyle(gameContainer).width;
};

const startGame = () => {
  playBtn.disabled = true;
  dropdown.disabled = true;
  DOMPointsCount.innerHTML = 0;
  let speed;

  let points = 0;
  switch (dropdown.value) {
    case "easy":
      speed = 150;
      break;
    case "medium":
      speed = 120;
      break;
    default:
      speed = 90;
  }

  for (let i = 1; i <= 400; i++) {
    let innerBox = document.createElement("div");
    innerBox.classList.add("box");
    innerBox.id = `box-${i}`;
    // innerBox.setAttribute("title", innerBox.id);
    if (i % 20 === 1) {
      innerBox.classList.add("edge-box");
      innerBox.style.borderLeftWidth = "0";
    }
    if (i % 20 === 0) {
      innerBox.classList.add("edge-box");
      innerBox.style.borderRightWidth = "0";
    }
    if (i <= 20) {
      innerBox.classList.add("edge-box");
      innerBox.style.borderTopWidth = "0";
    }
    if (i >= 381) {
      innerBox.classList.add("edge-box");
      innerBox.style.borderBottomWidth = "0";
    }

    gameContainer.appendChild(innerBox);
  }

  let randFoodPos;
  let snakeHeadPos;
  let foodElement;
  let snakeHead;

  let snakeBody = [];

  setMark();
  SnakeStart();

  function setMark() {
    if (randFoodPos) foodElement.classList.remove("food-element");
    do {
      randFoodPos = Math.floor(Math.random() * 400) + 1;
    } while (
      document
        .getElementById(`box-${randFoodPos}`)
        .classList.contains("edge-box") ||
      document
        .getElementById(`box-${randFoodPos}`)
        .classList.contains("snake-head") ||
      document
        .getElementById(`box-${randFoodPos}`)
        .classList.contains("snake-body")
    );
    foodElement = document.getElementById(`box-${randFoodPos}`);
    foodElement.classList.add("food-element");
  }

  function SnakeStart() {
    snakeHeadPos = Math.floor(Math.random() * 400) + 1;
    while (snakeHeadPos === randFoodPos) {
      snakeHeadPos = Math.floor(Math.random() * 400) + 1;
    }
    snakeBody.push(snakeHeadPos);
    snakeHead = document.getElementById(`box-${snakeHeadPos}`);
    snakeHead.classList.add("snake-head");
    snakeHead.style.borderTopLeftRadius = "50%";
    snakeHead.style.borderTopRightRadius = "50%";
  }

  let moveLeft = false;
  let moveRight = false;
  let moveUp = false;
  let moveDown = false;

  let moveInterval = null;

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft" && !moveLeft && !moveRight) {
      moveByKey("left", false, false, true, false);
    } else if (event.key === "ArrowRight" && !moveRight && !moveLeft) {
      moveByKey("right", false, false, false, true);
    } else if (event.key === "ArrowUp" && !moveUp && !moveDown) {
      moveByKey("up", true, false, false, false);
    } else if (event.key === "ArrowDown" && !moveDown && !moveUp) {
      moveByKey("down", false, true, false, false);
    }
  });

  let hueBase = 0;

  function moveByKey(
    direction,
    firstValue,
    secondValue,
    thirdValue,
    fourthValue
  ) {
    if (moveInterval) clearInterval(moveInterval);
    moveUp = firstValue;
    moveDown = secondValue;
    moveLeft = thirdValue;
    moveRight = fourthValue;

    moveInterval = setInterval(function () {
      snakeHead.classList.remove("snake-head");

      snakeHead.style.borderTopLeftRadius = "0";
      snakeHead.style.borderTopRightRadius = "0";
      snakeHead.style.borderBottomLeftRadius = "0";
      snakeHead.style.borderBottomRightRadius = "0";

      for (let i = 1; i < snakeBody.length; i++) {
        const box = document.getElementById(`box-${snakeBody[i]}`);
        box.classList.remove("snake-body");
        box.style.backgroundColor = "";
      }

      if (direction === "left") {
        if (snakeHeadPos % 20 === 1) {
          snakeHeadPos += 19;
        } else {
          snakeHeadPos -= 1;
        }
      } else if (direction === "right") {
        if (snakeHeadPos % 20 === 0) {
          snakeHeadPos -= 19;
        } else {
          snakeHeadPos += 1;
        }
      } else if (direction === "up") {
        if (snakeHeadPos <= 20) {
          snakeHeadPos += 380;
        } else {
          snakeHeadPos -= 20;
        }
      } else if (direction === "down") {
        if (snakeHeadPos >= 381) {
          snakeHeadPos -= 380;
        } else {
          snakeHeadPos += 20;
        }
      }

      checkCollision();

      for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
      }
      snakeBody[0] = snakeHeadPos;

      checkNewPoint(direction);

      for (let i = 1; i < snakeBody.length; i++) {
        const box = document.getElementById(`box-${snakeBody[i]}`);
        box.classList.add("snake-body");
        let hue = (hueBase + i * 7) % 360;
        box.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
      }

      snakeHead = document.getElementById(`box-${snakeHeadPos}`);
      snakeHead.classList.add("snake-head");

      if (direction === "left") {
        snakeHead.style.borderBottomLeftRadius = "50%";
        snakeHead.style.borderTopLeftRadius = "50%";
      } else if (direction === "right") {
        snakeHead.style.borderTopRightRadius = "50%";
        snakeHead.style.borderBottomRightRadius = "50%";
      } else if (direction === "up") {
        snakeHead.style.borderTopLeftRadius = "50%";
        snakeHead.style.borderTopRightRadius = "50%";
      } else if (direction === "down") {
        snakeHead.style.borderBottomLeftRadius = "50%";
        snakeHead.style.borderBottomRightRadius = "50%";
      }
    }, speed);
  }

  function checkNewPoint(direction) {
    if (snakeHeadPos === randFoodPos) {
      let newSegmentPos;

      if (direction === "left") {
        newSegmentPos = snakeBody[snakeBody.length - 1] + 1;
      } else if (direction === "right") {
        newSegmentPos = snakeBody[snakeBody.length - 1] - 1;
      } else if (direction === "up") {
        newSegmentPos = snakeBody[snakeBody.length - 1] + 20;
      } else if (direction === "down") {
        newSegmentPos = snakeBody[snakeBody.length - 1] - 20;
      }

      if (snakeBody.includes(newSegmentPos)) {
        for (let i = 1; i <= 400; i++) {
          if (!snakeBody.includes(i)) {
            newSegmentPos = i;
            break;
          }
        }
      }

      speed -= 4;
      points++;
      DOMPointsCount.innerHTML = points;
      snakeBody.push(newSegmentPos);
      setMark();
    }
  }

  function checkCollision() {
    if (snakeBody.slice(1).includes(snakeHeadPos)) {
      clearInterval(moveInterval);
      window.alert("Game over! You've bitten yourself.");
      location.reload();
    }
  }

  let startX, startY, endX, endY;
  gameContainer.addEventListener("touchstart", function (e) {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  });
  gameContainer.addEventListener("touchmove", function (e) {
    endX = e.touches[0].clientX;
    endY = e.touches[0].clientY;
  });
  gameContainer.addEventListener("touchend", function () {
    let deltaX = endX - startX;
    let deltaY = endY - startY;
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 0 && !moveRight && !moveLeft) {
        moveByKey("right", false, false, false, true);
      } else if (deltaX < 0 && !moveLeft && !moveRight) {
        moveByKey("left", false, false, true, false);
      }
    } else {
      if (deltaY > 0 && !moveDown && !moveUp) {
        moveByKey("down", false, true, false, false);
      } else if (deltaY < 0 && !moveUp && !moveDown) {
        moveByKey("up", true, false, false, false);
      }
    }
  });
};

playBtn.onclick = startGame;

function createSnowflake() {
  const snowflake = document.createElement("i");
  snowflake.classList.add("fas", "fa-snowflake", "snowflake");
  snowflake.style.left = Math.random() * window.innerWidth + "px";
  snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
  snowflake.style.opacity = Math.random();
  snowflake.style.fontSize = Math.random() * 10 + 10 + "px";

  document.body.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, Math.random() * 3000 + 2000);
}

setInterval(createSnowflake, 200);
