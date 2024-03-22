/*let max = 100;
let min = 1;
let randNumb;

document.getElementById("myButton").onclick = function() {
    randNumb = Math.round(Math.random() * max - min) + min;
    document.getElementById("myLabel").textContent = randNumb;
}
*/

const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const min = 1;
const max = 6;
let randNumb;

myButton.onclick = function () {
    randNumb = Math.round(Math.random() * max - min) + min;
    myLabel.textContent = randNumb;
}