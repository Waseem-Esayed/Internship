body = document.getElementById("body");

green = document.getElementById("green");
red = document.getElementById("red");
blue = document.getElementById("blue");
random = document.getElementById("random");

let redCol;
let greenCol;
let blueCol;

changeColor(green);
changeColor(red);
changeColor(blue);

random.onclick = randomColor;

function changeColor(color) {
    color.onclick = function () {
        body.style.backgroundColor = color.id;
    }
}

function randomColor() {
    redCol = Math.round(Math.random() * 255);
    greenCol = Math.round(Math.random() * 255);
    blueCol = Math.round(Math.random() * 255);

    body.style.backgroundColor = `rgb(${redCol}, ${greenCol}, ${blueCol})`;
}
