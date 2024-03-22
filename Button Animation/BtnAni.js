let myText = document.getElementById("myText");
let myCircle = document.getElementById("myCircle");
let myBtn = document.getElementById("myButton");
let isMoved = false;

myBtn.style.backgroundImage = "url('images/sunset.jpg')";

myCircle.addEventListener('click', function () {
    if (!isMoved) {
        myCircle.style.transform = "translateX(100px)";
        myBtn.style.backgroundImage = "url('images/night.jpg')";
        myText.textContent = "Night";
    } else {
        myCircle.style.transform = "none";
        myBtn.style.backgroundImage = "url('images/sunset.jpg')";
        myText.textContent = "Day";
    }
    isMoved = !isMoved;
});