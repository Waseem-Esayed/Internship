addEventListener("DOMContentLoaded", function () {
    let DOMimages = document.querySelectorAll(".image");
    let DOMrock = document.getElementById("rock");
    let DOMpaper = document.getElementById("paper");
    let DOMscissors = document.getElementById("scissors");
    let DOMPlayerLabel = document.getElementById("player");
    let DOMComputerLabel = document.getElementById("computer");
    let DOMResult = document.getElementById("result");

    DOMPlayerLabel.textContent = "Player: ...";
    DOMComputerLabel.textContent = "Computer: ...";

    DOMResult.style.maxHeight = "30px";
    DOMResult.style.border = "2px solid black";
    DOMResult.style.padding = "10px 20px";
    DOMResult.style.borderRadius = "30px";
    DOMResult.style.fontWeight = "bold";
    DOMResult.style.fontSize = "25px";
    DOMResult.style.backgroundColor = "rgb(255, 0, 0, 0.5)";
    DOMResult.textContent = "...";

    let computerList = ["Rock", "Paper", "Scissors"];
    let computerRandomPick;

    DOMimages.forEach(function (element) {
        element.onclick = function () {
            DOMimages.forEach(function (element) {
                element.style.backgroundColor = "rgba(128, 128, 128, 0.25)";
                element.style.border = "none";
                element.style.pointerEvents = "none";
                element.style.opacity = "0.5";
            })
            element.style.background = "transparent";
            element.style.border = "2px solid blue";
            element.style.opacity = "1";
            if (element == rock) {
                DOMPlayerLabel.textContent = "Player: Rock";
            } else if (element == paper) {
                DOMPlayerLabel.textContent = "Player: Paper";
            } else if (element == scissors) {
                DOMPlayerLabel.textContent = "Player: Scissors";
            }
            computerRandomPick = Math.round(Math.random() * 2);
            DOMComputerLabel.textContent = `Computer: ${computerList[computerRandomPick]}`;

            if (DOMPlayerLabel.textContent == "Player: Rock" && DOMComputerLabel.textContent == "Computer: Rock") {
                DOMResult.textContent = "nobody won!".toUpperCase();
            } else if (DOMPlayerLabel.textContent == "Player: Rock" && DOMComputerLabel.textContent == "Computer: Paper") {
                DOMResult.textContent = "you lose!".toUpperCase();
            } else if (DOMPlayerLabel.textContent == "Player: Rock" && DOMComputerLabel.textContent == "Computer: Scissors") {
                DOMResult.textContent = "you won!".toUpperCase();


            } else if (DOMPlayerLabel.textContent == "Player: Paper" && DOMComputerLabel.textContent == "Computer: Rock") {
                DOMResult.textContent = "you won!".toUpperCase();
            } else if (DOMPlayerLabel.textContent == "Player: Paper" && DOMComputerLabel.textContent == "Computer: Paper") {
                DOMResult.textContent = "nobody won!".toUpperCase();
            } else if (DOMPlayerLabel.textContent == "Player: Paper" && DOMComputerLabel.textContent == "Computer: Scissors") {
                DOMResult.textContent = "you lose!".toUpperCase();
            }


            else if (DOMPlayerLabel.textContent == "Player: Scissors" && DOMComputerLabel.textContent == "Computer: Rock") {
                DOMResult.textContent = "you lose!".toUpperCase();
            } else if (DOMPlayerLabel.textContent == "Player: Scissors" && DOMComputerLabel.textContent == "Computer: Paper") {
                DOMResult.textContent = "you won!".toUpperCase();
            } else if (DOMPlayerLabel.textContent == "Player: Scissors" && DOMComputerLabel.textContent == "Computer: Scissors") {
                DOMResult.textContent = "nobody won!".toUpperCase();
            }
            setTimeout(function () {
                DOMimages.forEach(function (element) {
                    element.style.backgroundColor = "rgba(128, 128, 128, 0.25)";
                    element.style.border = "none";
                    element.style.pointerEvents = "auto";
                    element.style.opacity = "1";

                    DOMPlayerLabel.textContent = "Player: ...";
                    DOMComputerLabel.textContent = "Computer: ...";
                    DOMResult.textContent = "...";
                })
            }, 3000);
        }
    })
})
