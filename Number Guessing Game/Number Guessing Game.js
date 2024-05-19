let DOMHigh = document.getElementById("low-high");
let DOMNumber = document.getElementById("number");
let DOMCheck = document.getElementById("check");
let DOMChances = document.getElementById("chances");

let chances = 5;
let attempts = 20;
DOMChances.innerHTML = attempts;

let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

let userGuess;

DOMCheck.onclick = function () {
    if (attempts >= 1) {
        userGuess = Number(DOMNumber.value);
        if (userGuess == randomNumber) {
            window.alert(`It took you ${attempts} to guess the number ${randomNumber}!`);
            DOMNumber.disabled = true;
            DOMCheck.disabled = true;
            DOMNumber.style.cursor = "default";
            DOMCheck.style.cursor = "default";
            DOMCheck.style.backgroundColor = "red";
        } else {
            DOMNumber.value = "";
            attempts--;
            DOMChances.innerHTML = attempts;
            if (userGuess > randomNumber) {
                DOMHigh.textContent = "Your number is high";
            } else {
                DOMHigh.textContent = "Your number is low";
            }
            if (attempts <= 0) {
                DOMNumber.disabled = true;
                DOMCheck.disabled = true;
                DOMNumber.style.cursor = "default";
                DOMCheck.style.cursor = "default";
                DOMCheck.style.backgroundColor = "red";
            }
        }
    }
}
