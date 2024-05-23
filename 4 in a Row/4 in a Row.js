document.addEventListener("DOMContentLoaded", function () {
    let DOMBoard = document.getElementsByClassName("board")[0];
    let DOMPlayerLabel = document.getElementsByClassName("player")[0];
    let DOMPlayAgainButton = document.getElementsByClassName("play-again-btn")[0];


    for (let i = 1; i <= 42; i++) {
        let innerBoard = document.createElement("div");
        innerBoard.classList.add("innerboard");
        innerBoard.id = "inner-" + i;
        DOMBoard.appendChild(innerBoard);
        if (i < 8) {
            innerBoard.style.cursor = "pointer";
            innerBoard.style.backgroundColor = "rgba(0, 191, 255, 0.5)";
        }
    }

    DOMPlayerLabel.textContent = "Player - 1";

    let gameOver = false;

    let inner_1 = document.getElementById("inner-1");
    let inner_2 = document.getElementById("inner-2");
    let inner_3 = document.getElementById("inner-3");
    let inner_4 = document.getElementById("inner-4");
    let inner_5 = document.getElementById("inner-5");
    let inner_6 = document.getElementById("inner-6");
    let inner_7 = document.getElementById("inner-7");
    let inner_8 = document.getElementById("inner-8");
    let inner_9 = document.getElementById("inner-9");
    let inner_10 = document.getElementById("inner-10");
    let inner_11 = document.getElementById("inner-11");
    let inner_12 = document.getElementById("inner-12");
    let inner_13 = document.getElementById("inner-13");
    let inner_14 = document.getElementById("inner-14");
    let inner_15 = document.getElementById("inner-15");
    let inner_16 = document.getElementById("inner-16");
    let inner_17 = document.getElementById("inner-17");
    let inner_18 = document.getElementById("inner-18");
    let inner_19 = document.getElementById("inner-19");
    let inner_20 = document.getElementById("inner-20");
    let inner_21 = document.getElementById("inner-21");
    let inner_22 = document.getElementById("inner-22");
    let inner_23 = document.getElementById("inner-23");
    let inner_24 = document.getElementById("inner-24");
    let inner_25 = document.getElementById("inner-25");
    let inner_26 = document.getElementById("inner-26");
    let inner_27 = document.getElementById("inner-27");
    let inner_28 = document.getElementById("inner-28");
    let inner_29 = document.getElementById("inner-29");
    let inner_30 = document.getElementById("inner-30");
    let inner_31 = document.getElementById("inner-31");
    let inner_32 = document.getElementById("inner-32");
    let inner_33 = document.getElementById("inner-33");
    let inner_34 = document.getElementById("inner-34");
    let inner_35 = document.getElementById("inner-35");
    let inner_36 = document.getElementById("inner-36");
    let inner_37 = document.getElementById("inner-37");
    let inner_38 = document.getElementById("inner-38");
    let inner_39 = document.getElementById("inner-39");
    let inner_40 = document.getElementById("inner-40");
    let inner_41 = document.getElementById("inner-41");
    let inner_42 = document.getElementById("inner-42");

    let player = 1;

    buttonOnclick(inner_1, inner_36, inner_29, inner_22, inner_15, inner_8);
    buttonOnclick(inner_2, inner_37, inner_30, inner_23, inner_16, inner_9);
    buttonOnclick(inner_3, inner_38, inner_31, inner_24, inner_17, inner_10);
    buttonOnclick(inner_4, inner_39, inner_32, inner_25, inner_18, inner_11);
    buttonOnclick(inner_5, inner_40, inner_33, inner_26, inner_19, inner_12);
    buttonOnclick(inner_6, inner_41, inner_34, inner_27, inner_20, inner_13);
    buttonOnclick(inner_7, inner_42, inner_35, inner_28, inner_21, inner_14);





    function buttonOnclick(inner, inner1, inner2, inner3, inner4, inner5) {
        inner.onclick = function () {
            if (!gameOver) {
                if (!inner.querySelector(".circle")) {
                    let circle = document.createElement("div");
                    circle.classList.add("circle");
                    inner.appendChild(circle);
                    player++;
                    if (player % 2 == 0) {
                        circle.style.backgroundColor = "red";
                        DOMPlayerLabel.textContent = "Player - 2";
                    } else {
                        circle.style.backgroundColor = "blue";
                        DOMPlayerLabel.textContent = "Player - 1";
                    }
                    removeAdd(inner, inner1, circle);
                    removeAdd(inner, inner2, circle);
                    removeAdd(inner, inner3, circle);
                    removeAdd(inner, inner4, circle);
                    removeAdd(inner, inner5, circle);
                }
            }
        }
    }

    function removeAdd(inner, newInner, circle) {
        if (!newInner.querySelector(".circle")) {
            inner.removeChild(circle);
            newInner.appendChild(circle);
        }

        setTimeout(drawLines, 200);

        function drawLines() {
            /*Senkrecht*/

            //senkrecht -> 1 Reihe
            checkWin(inner_36, inner_29, inner_22, inner_15, "blue", "line-senkrecht");
            checkWin(inner_36, inner_29, inner_22, inner_15, "red", "line-senkrecht");

            checkWin(inner_29, inner_22, inner_15, inner_8, "blue", "line-senkrecht");
            checkWin(inner_29, inner_22, inner_15, inner_8, "red", "line-senkrecht");

            checkWin(inner_22, inner_15, inner_8, inner_1, "blue", "line-senkrecht");
            checkWin(inner_22, inner_15, inner_8, inner_1, "red", "line-senkrecht");

            //senkrecht -> 2 Reihe
            checkWin(inner_37, inner_30, inner_23, inner_16, "blue", "line-senkrecht");
            checkWin(inner_37, inner_30, inner_23, inner_16, "red", "line-senkrecht");

            checkWin(inner_30, inner_23, inner_16, inner_9, "blue", "line-senkrecht");
            checkWin(inner_30, inner_23, inner_16, inner_9, "red", "line-senkrecht");

            checkWin(inner_23, inner_16, inner_9, inner_2, "blue", "line-senkrecht");
            checkWin(inner_23, inner_16, inner_9, inner_2, "red", "line-senkrecht");

            //senkrecht -> 3 Reihe
            checkWin(inner_38, inner_31, inner_24, inner_17, "blue", "line-senkrecht");
            checkWin(inner_38, inner_31, inner_24, inner_17, "red", "line-senkrecht");

            checkWin(inner_31, inner_24, inner_17, inner_10, "blue", "line-senkrecht");
            checkWin(inner_31, inner_24, inner_17, inner_10, "red", "line-senkrecht");

            checkWin(inner_24, inner_17, inner_10, inner_3, "blue", "line-senkrecht");
            checkWin(inner_24, inner_17, inner_10, inner_3, "red", "line-senkrecht");

            //senkrecht -> 4 Reihe
            checkWin(inner_39, inner_32, inner_25, inner_18, "blue", "line-senkrecht");
            checkWin(inner_39, inner_32, inner_25, inner_18, "red", "line-senkrecht");

            checkWin(inner_32, inner_25, inner_18, inner_11, "blue", "line-senkrecht");
            checkWin(inner_32, inner_25, inner_18, inner_11, "red", "line-senkrecht");

            checkWin(inner_25, inner_18, inner_11, inner_4, "blue", "line-senkrecht");
            checkWin(inner_25, inner_18, inner_11, inner_4, "red", "line-senkrecht");

            //senkrecht -> 5 Reihe
            checkWin(inner_40, inner_33, inner_26, inner_19, "blue", "line-senkrecht");
            checkWin(inner_40, inner_33, inner_26, inner_19, "red", "line-senkrecht");

            checkWin(inner_33, inner_26, inner_19, inner_12, "blue", "line-senkrecht");
            checkWin(inner_33, inner_26, inner_19, inner_12, "red", "line-senkrecht");

            checkWin(inner_26, inner_19, inner_12, inner_5, "blue", "line-senkrecht");
            checkWin(inner_26, inner_19, inner_12, inner_5, "red", "line-senkrecht");

            //senkrecht -> 6 Reihe
            checkWin(inner_41, inner_34, inner_27, inner_20, "blue", "line-senkrecht");
            checkWin(inner_41, inner_34, inner_27, inner_20, "red", "line-senkrecht");

            checkWin(inner_34, inner_27, inner_20, inner_13, "blue", "line-senkrecht");
            checkWin(inner_34, inner_27, inner_20, inner_13, "red", "line-senkrecht");

            checkWin(inner_27, inner_20, inner_13, inner_6, "blue", "line-senkrecht");
            checkWin(inner_27, inner_20, inner_13, inner_6, "red", "line-senkrecht");

            //senkrecht -> 7 Reihe
            checkWin(inner_42, inner_35, inner_28, inner_21, "blue", "line-senkrecht");
            checkWin(inner_42, inner_35, inner_28, inner_21, "red", "line-senkrecht");

            checkWin(inner_35, inner_28, inner_21, inner_14, "blue", "line-senkrecht");
            checkWin(inner_35, inner_28, inner_21, inner_14, "red", "line-senkrecht");

            checkWin(inner_28, inner_21, inner_14, inner_7, "blue", "line-senkrecht");
            checkWin(inner_28, inner_21, inner_14, inner_7, "red", "line-senkrecht");


            /*Waagerecht*/

            //waagerecht -> 1 Reihe
            checkWin(inner_1, inner_2, inner_3, inner_4, "blue", "line-waagerecht");
            checkWin(inner_1, inner_2, inner_3, inner_4, "red", "line-waagerecht");

            checkWin(inner_2, inner_3, inner_4, inner_5, "blue", "line-waagerecht");
            checkWin(inner_2, inner_3, inner_4, inner_5, "red", "line-waagerecht");

            checkWin(inner_3, inner_4, inner_5, inner_6, "blue", "line-waagerecht");
            checkWin(inner_3, inner_4, inner_5, inner_6, "red", "line-waagerecht");

            checkWin(inner_4, inner_5, inner_6, inner_7, "blue", "line-waagerecht");
            checkWin(inner_4, inner_5, inner_6, inner_7, "red", "line-waagerecht");

            //waagerecht -> 2 Reihe
            checkWin(inner_8, inner_9, inner_10, inner_11, "blue", "line-waagerecht");
            checkWin(inner_8, inner_9, inner_10, inner_11, "red", "line-waagerecht");

            checkWin(inner_9, inner_10, inner_11, inner_12, "blue", "line-waagerecht");
            checkWin(inner_9, inner_10, inner_11, inner_12, "red", "line-waagerecht");

            checkWin(inner_10, inner_11, inner_12, inner_13, "blue", "line-waagerecht");
            checkWin(inner_10, inner_11, inner_12, inner_13, "red", "line-waagerecht");

            checkWin(inner_11, inner_12, inner_13, inner_14, "blue", "line-waagerecht");
            checkWin(inner_11, inner_12, inner_13, inner_14, "red", "line-waagerecht");

            //waagerecht -> 3 Reihe
            checkWin(inner_15, inner_16, inner_17, inner_18, "blue", "line-waagerecht");
            checkWin(inner_15, inner_16, inner_17, inner_18, "red", "line-waagerecht");

            checkWin(inner_16, inner_17, inner_18, inner_19, "blue", "line-waagerecht");
            checkWin(inner_16, inner_17, inner_18, inner_19, "red", "line-waagerecht");

            checkWin(inner_17, inner_18, inner_19, inner_20, "blue", "line-waagerecht");
            checkWin(inner_17, inner_18, inner_19, inner_20, "red", "line-waagerecht");

            checkWin(inner_18, inner_19, inner_20, inner_21, "blue", "line-waagerecht");
            checkWin(inner_18, inner_19, inner_20, inner_21, "red", "line-waagerecht");

            //waagerecht -> 4 Reihe
            checkWin(inner_22, inner_23, inner_24, inner_25, "blue", "line-waagerecht");
            checkWin(inner_22, inner_23, inner_24, inner_25, "red", "line-waagerecht");

            checkWin(inner_23, inner_24, inner_25, inner_26, "blue", "line-waagerecht");
            checkWin(inner_23, inner_24, inner_25, inner_26, "red", "line-waagerecht");

            checkWin(inner_24, inner_25, inner_26, inner_27, "blue", "line-waagerecht");
            checkWin(inner_24, inner_25, inner_26, inner_27, "red", "line-waagerecht");

            checkWin(inner_25, inner_26, inner_27, inner_28, "blue", "line-waagerecht");
            checkWin(inner_25, inner_26, inner_27, inner_28, "red", "line-waagerecht");

            //waagerecht -> 5 Reihe
            checkWin(inner_29, inner_30, inner_31, inner_32, "blue", "line-waagerecht");
            checkWin(inner_29, inner_30, inner_31, inner_32, "red", "line-waagerecht");

            checkWin(inner_30, inner_31, inner_32, inner_33, "blue", "line-waagerecht");
            checkWin(inner_30, inner_31, inner_32, inner_33, "red", "line-waagerecht");

            checkWin(inner_31, inner_32, inner_33, inner_34, "blue", "line-waagerecht");
            checkWin(inner_31, inner_32, inner_33, inner_34, "red", "line-waagerecht");

            checkWin(inner_32, inner_33, inner_34, inner_35, "blue", "line-waagerecht");
            checkWin(inner_32, inner_33, inner_34, inner_35, "red", "line-waagerecht");

            //waagerecht -> 6 Reihe
            checkWin(inner_36, inner_37, inner_38, inner_39, "blue", "line-waagerecht");
            checkWin(inner_36, inner_37, inner_38, inner_39, "red", "line-waagerecht");

            checkWin(inner_37, inner_38, inner_39, inner_40, "blue", "line-waagerecht");
            checkWin(inner_37, inner_38, inner_39, inner_40, "red", "line-waagerecht");

            checkWin(inner_38, inner_39, inner_40, inner_41, "blue", "line-waagerecht");
            checkWin(inner_38, inner_39, inner_40, inner_41, "red", "line-waagerecht");

            checkWin(inner_39, inner_40, inner_41, inner_42, "blue", "line-waagerecht");
            checkWin(inner_39, inner_40, inner_41, inner_42, "red", "line-waagerecht");

            /*Schräg: unten links nach oben rechts*/

            checkWin(inner_22, inner_16, inner_10, inner_4, "blue", "line-unten-links-nach-oben-rechts");
            checkWin(inner_22, inner_16, inner_10, inner_4, "red", "line-unten-links-nach-oben-rechts");

            checkWin(inner_29, inner_23, inner_17, inner_11, "blue", "line-unten-links-nach-oben-rechts");
            checkWin(inner_29, inner_23, inner_17, inner_11, "red", "line-unten-links-nach-oben-rechts");

            checkWin(inner_23, inner_17, inner_11, inner_5, "blue", "line-unten-links-nach-oben-rechts");
            checkWin(inner_23, inner_17, inner_11, inner_5, "red", "line-unten-links-nach-oben-rechts");

            checkWin(inner_36, inner_30, inner_24, inner_18, "blue", "line-unten-links-nach-oben-rechts");
            checkWin(inner_36, inner_30, inner_24, inner_18, "red", "line-unten-links-nach-oben-rechts");

            checkWin(inner_30, inner_24, inner_18, inner_12, "blue", "line-unten-links-nach-oben-rechts");
            checkWin(inner_30, inner_24, inner_18, inner_12, "red", "line-unten-links-nach-oben-rechts");

            checkWin(inner_24, inner_18, inner_12, inner_6, "blue", "line-unten-links-nach-oben-rechts");
            checkWin(inner_24, inner_18, inner_12, inner_6, "red", "line-unten-links-nach-oben-rechts");

            checkWin(inner_37, inner_31, inner_25, inner_19, "blue", "line-unten-links-nach-oben-rechts");
            checkWin(inner_37, inner_31, inner_25, inner_19, "red", "line-unten-links-nach-oben-rechts");

            checkWin(inner_31, inner_25, inner_19, inner_13, "blue", "line-unten-links-nach-oben-rechts");
            checkWin(inner_31, inner_25, inner_19, inner_13, "red", "line-unten-links-nach-oben-rechts");

            checkWin(inner_25, inner_19, inner_13, inner_7, "blue", "line-unten-links-nach-oben-rechts");
            checkWin(inner_25, inner_19, inner_13, inner_7, "red", "line-unten-links-nach-oben-rechts");

            checkWin(inner_38, inner_32, inner_26, inner_20, "blue", "line-unten-links-nach-oben-rechts");
            checkWin(inner_38, inner_32, inner_26, inner_20, "red", "line-unten-links-nach-oben-rechts");

            checkWin(inner_32, inner_26, inner_20, inner_14, "blue", "line-unten-links-nach-oben-rechts");
            checkWin(inner_32, inner_26, inner_20, inner_14, "red", "line-unten-links-nach-oben-rechts");

            checkWin(inner_39, inner_33, inner_27, inner_21, "blue", "line-unten-links-nach-oben-rechts");
            checkWin(inner_39, inner_33, inner_27, inner_21, "red", "line-unten-links-nach-oben-rechts");

            /*Schräg: unten rechts nach oben links*/

            checkWin(inner_15, inner_23, inner_31, inner_39, "blue", "line-unten-rechts-nach-oben-links");
            checkWin(inner_15, inner_23, inner_31, inner_39, "red", "line-unten-rechts-nach-oben-links");

            checkWin(inner_8, inner_16, inner_24, inner_32, "blue", "line-unten-rechts-nach-oben-links");
            checkWin(inner_8, inner_16, inner_24, inner_32, "red", "line-unten-rechts-nach-oben-links");

            checkWin(inner_16, inner_24, inner_32, inner_40, "blue", "line-unten-rechts-nach-oben-links");
            checkWin(inner_16, inner_24, inner_32, inner_40, "red", "line-unten-rechts-nach-oben-links");

            checkWin(inner_1, inner_9, inner_17, inner_25, "blue", "line-unten-rechts-nach-oben-links");
            checkWin(inner_1, inner_9, inner_17, inner_25, "red", "line-unten-rechts-nach-oben-links");

            checkWin(inner_9, inner_17, inner_25, inner_33, "blue", "line-unten-rechts-nach-oben-links");
            checkWin(inner_9, inner_17, inner_25, inner_33, "red", "line-unten-rechts-nach-oben-links");

            checkWin(inner_17, inner_25, inner_33, inner_41, "blue", "line-unten-rechts-nach-oben-links");
            checkWin(inner_17, inner_25, inner_33, inner_41, "red", "line-unten-rechts-nach-oben-links");

            checkWin(inner_2, inner_10, inner_18, inner_26, "blue", "line-unten-rechts-nach-oben-links");
            checkWin(inner_2, inner_10, inner_18, inner_26, "red", "line-unten-rechts-nach-oben-links");

            checkWin(inner_10, inner_18, inner_26, inner_34, "blue", "line-unten-rechts-nach-oben-links");
            checkWin(inner_10, inner_18, inner_26, inner_34, "red", "line-unten-rechts-nach-oben-links");

            checkWin(inner_18, inner_26, inner_34, inner_42, "blue", "line-unten-rechts-nach-oben-links");
            checkWin(inner_18, inner_26, inner_34, inner_42, "red", "line-unten-rechts-nach-oben-links");

            checkWin(inner_3, inner_11, inner_19, inner_27, "blue", "line-unten-rechts-nach-oben-links");
            checkWin(inner_3, inner_11, inner_19, inner_27, "red", "line-unten-rechts-nach-oben-links");

            checkWin(inner_11, inner_19, inner_27, inner_35, "blue", "line-unten-rechts-nach-oben-links");
            checkWin(inner_11, inner_19, inner_27, inner_35, "red", "line-unten-rechts-nach-oben-links");

            checkWin(inner_4, inner_12, inner_20, inner_28, "blue", "line-unten-rechts-nach-oben-links");
            checkWin(inner_4, inner_12, inner_20, inner_28, "red", "line-unten-rechts-nach-oben-links");
        }
    }

    let CheckLineCounter = 1;

    function checkWin(first, second, third, fourth, color, line) {
        if ((first.querySelector(".circle") && first.querySelector(".circle").style.backgroundColor == color) && (second.querySelector(".circle") && second.querySelector(".circle").style.backgroundColor == color) && (third.querySelector(".circle") && third.querySelector(".circle").style.backgroundColor == color) && (fourth.querySelector(".circle") && fourth.querySelector(".circle").style.backgroundColor == color)) {
            let allButtons = document.querySelectorAll(".innerboard");
            allButtons.forEach(function (element) {
                element.style.cursor = "default";

                if (CheckLineCounter == 1) {
                    let firstLine = document.createElement("div");
                    firstLine.classList.add(line);
                    first.appendChild(firstLine);
                    let secondLine = document.createElement("div");
                    secondLine.classList.add(line);
                    second.appendChild(secondLine);
                    let thirdLine = document.createElement("div");
                    thirdLine.classList.add(line);
                    third.appendChild(thirdLine);
                    let fourthLine = document.createElement("div");
                    fourthLine.classList.add(line);
                    fourth.appendChild(fourthLine);

                    if (color == "red") {
                        DOMPlayerLabel.textContent = "Player 1 Won!";
                    } else {
                        DOMPlayerLabel.textContent = "Player 2 Won!";
                    }

                    gameOver = true;

                    DOMPlayAgainButton.onclick = function () {
                        if ((first.querySelector(".circle") && first.querySelector(".circle").style.backgroundColor == color) && (second.querySelector(".circle") && second.querySelector(".circle").style.backgroundColor == color) && (third.querySelector(".circle") && third.querySelector(".circle").style.backgroundColor == color) && (fourth.querySelector(".circle") && fourth.querySelector(".circle").style.backgroundColor == color)) {
                            firstLine.remove();
                            secondLine.remove();
                            thirdLine.remove();
                            fourthLine.remove();

                            circleElements = document.querySelectorAll(".circle");

                            circleElements.forEach(function (element) {
                                element.remove();
                            })
                            console.log(player);

                            if (player % 2 == 0) {
                                DOMPlayerLabel.textContent = "Player - 2";
                            } else {
                                DOMPlayerLabel.textContent = "Player - 1";
                            }

                            for (i = 0; i < 7; i++) {
                                allButtons[i].style.cursor = "pointer";
                            }
                            CheckLineCounter = 1;
                            gameOver = false;
                        }
                    }
                    CheckLineCounter++;
                }
            })
        }
    }
});
