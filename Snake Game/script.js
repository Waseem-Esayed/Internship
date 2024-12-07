let gameContainer = document.getElementsByClassName('container')[0];

for (let i = 1; i <= 400; i++) {
  let innerBox = document.createElement('div');
  innerBox.classList.add('box');
  innerBox.id = `box-${i}`;
  innerBox.setAttribute('title', innerBox.id);
  if (i % 20 === 1) innerBox.style.borderLeftWidth = '0';
  if (i % 20 === 0) innerBox.style.borderRightWidth = '0';
  if (i <= 20) innerBox.style.borderTopWidth = '0';
  if (i >= 381) innerBox.style.borderBottomWidth = '0';

  gameContainer.appendChild(innerBox);
}

let markSetted = false;
let randFoodPos;
let snakeHeadPos;
let foodElement;
let snakeHead;

let snakeBody = [];

setMark();
SnakeStart();

function setMark() {
  if (randFoodPos) foodElement.classList.remove('food-element');
  randFoodPos = Math.floor(Math.random() * 400) + 1;
  foodElement = document.getElementById(`box-${randFoodPos}`);
  foodElement.classList.add('food-element');
}

function SnakeStart() {
  snakeHeadPos = Math.floor(Math.random() * 400) + 1;
  while (snakeHeadPos === randFoodPos) {
    snakeHeadPos = Math.floor(Math.random() * 400) + 1;
  }
  snakeBody.push(snakeHeadPos);
  snakeHead = document.getElementById(`box-${snakeHeadPos}`);
  snakeHead.classList.add('snake-head');
}

let moveLeft = false;
let moveRight = false;
let moveUp = false;
let moveDown = false;

let moveInterval = null;

let speed = 100;

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft' && !moveLeft && !moveRight) {
    moveByKey('left', false, false, true, false);
  } else if (event.key === 'ArrowRight' && !moveRight && !moveLeft) {
    moveByKey('right', false, false, false, true);
  } else if (event.key === 'ArrowUp' && !moveUp && !moveDown) {
    moveByKey('up', true, false, false, false);
  } else if (event.key === 'ArrowDown' && !moveDown && !moveUp) {
    moveByKey('down', false, true, false, false);
  }
})

let hueBase = 0;

function moveByKey(direction, firstValue, secondValue, thirdValue, fourthValue) {
  if (moveInterval) clearInterval(moveInterval);
  moveUp = firstValue;
  moveDown = secondValue;
  moveLeft = thirdValue;
  moveRight = fourthValue;

  moveInterval = setInterval(function() {
    snakeHead.classList.remove('snake-head');

    for (let i = 1; i < snakeBody.length; i++) {
      const box = document.getElementById(`box-${snakeBody[i]}`);
      box.classList.remove('snake-body');
      box.style.backgroundColor = '';
    }

    if (direction === 'left') {
      if (snakeHeadPos % 20 === 1) {
        snakeHeadPos += 19;
      } else {
        snakeHeadPos -= 1;
      }
    } else if (direction === 'right') {
      if (snakeHeadPos % 20 === 0) {
        snakeHeadPos -= 19;
      } else {
        snakeHeadPos += 1;
      }
    } else if (direction === 'up') {
      if (snakeHeadPos <= 20) {
        snakeHeadPos += 380;
      } else {
        snakeHeadPos -= 20;
      }
    } else if (direction === 'down') {
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
      box.classList.add('snake-body');
      let hue = (hueBase + i * 30) % 360;
      box.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
    }

    hueBase = (hueBase + 5) % 360;

    snakeHead = document.getElementById(`box-${snakeHeadPos}`);
    snakeHead.classList.add('snake-head');
  }, speed);
}

function checkNewPoint(direction) {
  if (snakeHeadPos === randFoodPos) {
    let newSegmentPos;

    if (direction === 'left') {
      newSegmentPos = snakeBody[snakeBody.length - 1] + 1;
    } else if (direction === 'right') {
      newSegmentPos = snakeBody[snakeBody.length - 1] - 1;
    } else if (direction === 'up') {
      newSegmentPos = snakeBody[snakeBody.length - 1] + 20;
    } else if (direction === 'down') {
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

    snakeBody.push(newSegmentPos);
    setMark();
  }
}

function checkCollision() {
  if (snakeBody.slice(1).includes(snakeHeadPos)) {
    clearInterval(moveInterval);
    window.alert("Game Over! Du hast dich selbst gebissen.");
    location.reload();
  }
}
