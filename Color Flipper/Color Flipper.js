body = document.getElementById("body");

green = document.getElementById("green");
red = document.getElementById("red");
blue = document.getElementById("blue");

changeColor(green);
changeColor(red);
changeColor(blue);

function changeColor(color) {
    color.onclick = function() {
        body.style.backgroundColor = color.id;
    }
}
