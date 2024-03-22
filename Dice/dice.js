let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let stand1 = document.getElementById("stand1");
let stand2 = document.getElementById("stand2");
let PointsElementPlayer1 = document.getElementById("points1");
let PointsElementPlayer2 = document.getElementById("points2");
let myBtn = document.getElementById("submit");
let myReset = document.getElementById("reset");
let randNumb1;
let randNumb2;
let randomDice1;
let randomImgSource1;
let randomDice2;
let randomImgSource2;
let selectedImage1;
let selectedImage2;
let points_player1 = 0;
let points_player2 = 0;
let max = 6;
let min = 1;

let player1Name;
let player2Name;
let playerTurnsIndex;

let player1TurnsLeft;
let player2TurnsLeft;

let playerTurn = 1;

let image1 = document.querySelectorAll("img")[1];
let image2 = document.querySelectorAll("img")[2];

askQuestions();

myBtn.onclick = function () {
    if (player1TurnsLeft > 0 || player2TurnsLeft > 0) {
        if (playerTurn == 1) {
            randNumb1 = Math.round(Math.random() * (max - min) + min);
            randomDice1 = "wurfel-" + randNumb1 + ".png";
            randomImgSource1 = "images/" + randomDice1;
            image1.setAttribute("src", randomImgSource1);

            selectedImage1 = image1.getAttribute("src");

            switch (selectedImage1) {
                case "images/wurfel-1.png":
                    points_player1++;
                    break;
                case "images/wurfel-2.png":
                    points_player1 += 2;
                    break;
                case "images/wurfel-3.png":
                    points_player1 += 3;
                    break;
                case "images/wurfel-4.png":
                    points_player1 += 4;
                    break;
                case "images/wurfel-5.png":
                    points_player1 += 5;
                    break;
                default:
                    points_player1 += 6;
                    break;
            }

            PointsElementPlayer1.textContent = points_player1;
            playerTurn = 2;
            player1TurnsLeft--;
            stand1.textContent = generateTurnsLeftIndicator(player1TurnsLeft);
        } else {
            randNumb2 = Math.round(Math.random() * (max - min) + min);
            randomDice2 = "wurfel-" + randNumb2 + ".png";
            randomImgSource2 = "images/" + randomDice2;
            image2.setAttribute("src", randomImgSource2);

            selectedImage2 = image2.getAttribute("src");

            switch (selectedImage2) {
                case "images/wurfel-1.png":
                    points_player2++;
                    break;
                case "images/wurfel-2.png":
                    points_player2 += 2;
                    break;
                case "images/wurfel-3.png":
                    points_player2 += 3;
                    break;
                case "images/wurfel-4.png":
                    points_player2 += 4;
                    break;
                case "images/wurfel-5.png":
                    points_player2 += 5;
                    break;
                default:
                    points_player2 += 6;
                    break;
            }
            PointsElementPlayer2.textContent = points_player2;
            playerTurn = 1;
            player2TurnsLeft--;
            stand2.textContent = generateTurnsLeftIndicator(player2TurnsLeft);
        }

    }
};

myReset.onclick = function () {
    playerTurn = 1;
    points_player1 = 0;
    points_player2 = 0;
    PointsElementPlayer1.textContent = 0;
    PointsElementPlayer2.textContent = 0;
    askQuestions();
};

function askQuestions() {
    do {
        player1Name = prompt("Player 1 name:");
        player2Name = prompt("Player 2 name:");
        playerTurnsIndex = parseInt(prompt("Select amount of rolling: "));
    } while (player1Name == "" || player1Name != String(player1Name) || player2Name == "" || player2Name != String(player2Name) || playerTurnsIndex != Number(playerTurnsIndex) || playerTurnsIndex == "" || playerTurnsIndex < 1 || playerTurnsIndex > 50)
    player1TurnsLeft = playerTurnsIndex;
    player2TurnsLeft = playerTurnsIndex;
    stand1.textContent = generateTurnsLeftIndicator(player1TurnsLeft);
    stand2.textContent = generateTurnsLeftIndicator(player2TurnsLeft);
    player1.textContent = player1Name + ":";
    player2.textContent = player2Name + ":";
}

function generateTurnsLeftIndicator(number) {
    let result = "";
    for (let i = 0; i < number; i++) {
        result += "| ";
    }
    return result.trim();
}
