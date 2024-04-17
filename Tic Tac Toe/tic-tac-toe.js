let btn1 = document.getElementById("button1");
let btn2 = document.getElementById("button2");
let btn3 = document.getElementById("button3");
let btn4 = document.getElementById("button4");
let btn5 = document.getElementById("button5");
let btn6 = document.getElementById("button6");
let btn7 = document.getElementById("button7");
let btn8 = document.getElementById("button8");
let btn9 = document.getElementById("button9");

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");
let img6 = document.getElementById("img6");
let img7 = document.getElementById("img7");
let img8 = document.getElementById("img8");
let img9 = document.getElementById("img9");

let gameResult = document.getElementById("gameResult");

let btnReset = document.getElementById("reset");

let contentBtn = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];
let contentImg = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

for (let i = 0; i < 9; i++) {
        contentImg[i].setAttribute("src", "");
        contentBtn[i].onclick = null;
        initField(contentBtn[i], contentImg[i]);
    }
    playerTurn = 1;

    selectedFields1 = [];
    selectedFields2 = [];

    gameResult.textContent = "";
    playerTurn = Math.round(Math.random() * (1 + 10) - 10);
};

function initField(btn, img) {
    btn.onclick = function () {
        if (img.getAttribute("src") !== "images/X.png" && img.getAttribute("src") !== "images/O.png") {
            if (playerTurn % 2 === 0) {
                img.setAttribute("src", "images/X.png");
                selectedFields1.push(img.getAttribute("id"));
                console.log(selectedFields1);
                playerTurn++;
                if (checkIfPlayerWon(selectedFields1)) {
                    gameResult.textContent = "Player 1 Won!";
                    noClick();
                } else if (!noWin()) {
                    gameResult.textContent = "NO WIN";
                    noClick();
                }
            } else {
                img.setAttribute("src", "images/O.png");
                selectedFields2.push(img.getAttribute("id"));
                console.log(selectedFields2);
                playerTurn++;
                if (checkIfPlayerWon(selectedFields2)) {
                    gameResult.textContent = "Player 2 Won!";
                    noClick();
                } else if (!noWin()) {
                    gameResult.textContent = "NO WIN";
                    noClick();
                }
            }
        }
    };
}

function noWin() {
    return selectedFields1.length + selectedFields2.length < 9;
}

function checkIfPlayerWon(selectedFields) {
    return (selectedFields.includes("img1") && selectedFields.includes("img2") && selectedFields.includes("img3"))
        || (selectedFields.includes("img4") && selectedFields.includes("img5") && selectedFields.includes("img6"))
        || (selectedFields.includes("img7") && selectedFields.includes("img8") && selectedFields.includes("img9"))
        || (selectedFields.includes("img1") && selectedFields.includes("img4") && selectedFields.includes("img7"))
        || (selectedFields.includes("img2") && selectedFields.includes("img5") && selectedFields.includes("img8"))
        || (selectedFields.includes("img3") && selectedFields.includes("img6") && selectedFields.includes("img9"))
        || (selectedFields.includes("img1") && selectedFields.includes("img5") && selectedFields.includes("img9"))
        || (selectedFields.includes("img3") && selectedFields.includes("img5") && selectedFields.includes("img7"));
}

btnReset.onclick = function () {
    for (let i = 0; i < 9; i++) {
        contentImg[i].setAttribute("src", "");
        contentBtn[i].onclick = null;
        initField(contentBtn[i], contentImg[i]);
    }
    playerTurn = 1;

    selectedFields1 = [];
    selectedFields2 = [];

    gameResult.textContent = "";
    playerTurn = Math.round(Math.random() * (1 + 10) - 10);
};

function noClick() {
    getBtn(btn1);
    getBtn(btn2);
    getBtn(btn3);
    getBtn(btn4);
    getBtn(btn5);
    getBtn(btn6);
    getBtn(btn7);
    getBtn(btn8);
    getBtn(btn9);
}

function getBtn(btn) {
    btn.onclick = function () {
        img.setAttribute("src", img.getAttribute("src"));
    };
}
