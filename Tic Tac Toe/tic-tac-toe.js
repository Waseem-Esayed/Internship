let btnReset = document.getElementById("reset");

let contentBtn = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9,]
let contentImg = [img1, img2, img3, img4, img5, img6, img7, img8, img9,]
let contentBtn = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];
let contentImg = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

let selectedFields1 = [];
let selectedFields2 = [];

function initField(btn, img,) {
function initField(btn, img) {
    btn.onclick = function () {
        if (img.getAttribute("src") != "images/X.png" && img.getAttribute("src") != "images/O.png") {
            if (playerTurn % 2 == 0) {
        if (img.getAttribute("src") !== "images/X.png" && img.getAttribute("src") !== "images/O.png") {
            if (playerTurn % 2 === 0) {
                img.setAttribute("src", "images/X.png");
                selectedFields1.push(img.getAttribute("id"));
                console.log(selectedFields1);
                playerTurn++;
                if (checkIfPlayerWon(selectedFields1)) {
                    gameResult.textContent = "Player 1 Won!";
                } else if(!noWin()) {
                    noClick();
                } else if (!noWin()) {
                    gameResult.textContent = "NO WIN";
                };
                    noClick();
                }
            } else {
                img.setAttribute("src", "images/O.png");
                selectedFields2.push(img.getAttribute("id"));
                console.log(selectedFields2);
                playerTurn++;
                if (checkIfPlayerWon(selectedFields2)) {
                    gameResult.textContent = "Player 2 Won!";
                } else if(!noWin()) {
                    noClick();
                } else if (!noWin()) {
                    gameResult.textContent = "NO WIN";
                };
                    noClick();
                }
            }
        }
    }
    };
}

function noWin() {
@@ -74,7 +78,7 @@ function checkIfPlayerWon(selectedFields) {
}

btnReset.onclick = function () {
    for (i = 0; i < 9; i++) {
    for (let i = 0; i < 9; i++) {
        contentImg[i].setAttribute("src", "");
    }
    playerTurn = 1;
@@ -84,12 +88,30 @@ btnReset.onclick = function () {

    gameResult.textContent = "";
    playerTurn = Math.round(Math.random() * (1 + 10) - 10);
}
};

for (i = 0; i < 9; i++) {
for (let i = 0; i < 9; i++) {
    initField(contentBtn[i], contentImg[i]);
}

//contentBtn.forEach((btn, index)=>{
//    initField(btn,contentImg[index] )
//})
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
