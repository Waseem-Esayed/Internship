let answer = 0;
document.getElementById("myH1").textContent = answer;


document.getElementById("decrease").onclick = function() {
    answer--;
    document.getElementById("myH1").textContent = answer;
}

document.getElementById("reset").onclick = function() {
    answer = 0;
    document.getElementById("myH1").textContent = 0;
}

document.getElementById("increase").onclick = function() {
    answer++;
    document.getElementById("myH1").textContent = answer;
}