document.addEventListener("DOMContentLoaded", function () {
    let DOMFirstButton = document.getElementById("one");
    let DOMSecondButton = document.getElementById("two");
    let DOMThirdButton = document.getElementById("three");
    let DOMFourthButton = document.getElementById("four");
    let DOMFifthButton = document.getElementById("five");
    let DOMSixthButton = document.getElementById("six");
    let DOMSeventhButton = document.getElementById("seven");
    let DOMEighthButton = document.getElementById("eight");
    let DOMNinthButton = document.getElementById("nine");

    let buttons = document.querySelectorAll(".button");

    let buttonList = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let randomButtonList = buttonList.sort(() => Math.random() - 0.5);

    let slideButton = buttons[randomButtonList[0]];

    let firstButton = buttons[randomButtonList[1]];
    let secondButton = buttons[randomButtonList[2]];
    let thirdButton = buttons[randomButtonList[3]];
    let fourthButton = buttons[randomButtonList[4]];
    let fifthButton = buttons[randomButtonList[5]];
    let sixthButton = buttons[randomButtonList[6]];
    let seventhButton = buttons[randomButtonList[7]];
    let eighthButton = buttons[randomButtonList[8]];

    buttons.forEach(function (element) {
        element.style.cursor = "pointer";
        element.style.transition = "all 0.2s";
    });

    slideButton.style.backgroundColor = "white";
    slideButton.style.cursor = "default";
    slideButton.style.transition = "none";

    firstButton.textContent = "1";
    secondButton.textContent = "2";
    thirdButton.textContent = "3";
    fourthButton.textContent = "4";
    fifthButton.textContent = "5";
    sixthButton.textContent = "6";
    seventhButton.textContent = "7";
    eighthButton.textContent = "8";

    ButtonPosition(DOMFirstButton, DOMSecondButton, DOMFourthButton);
    ButtonPosition(DOMThirdButton, DOMSecondButton, DOMSixthButton);
    ButtonPosition(DOMSeventhButton, DOMFourthButton, DOMEighthButton);
    ButtonPosition(DOMNinthButton, DOMEighthButton, DOMSixthButton);

    ButtonPosition(DOMSecondButton, DOMFirstButton, DOMThirdButton, DOMFifthButton);
    ButtonPosition(DOMFourthButton, DOMFirstButton, DOMSeventhButton, DOMFifthButton);
    ButtonPosition(DOMEighthButton, DOMSeventhButton, DOMNinthButton, DOMFifthButton);
    ButtonPosition(DOMSixthButton, DOMThirdButton, DOMNinthButton, DOMFifthButton);

    ButtonPosition(DOMFifthButton, DOMSecondButton, DOMSixthButton, DOMEighthButton, DOMFourthButton);

    function ButtonPosition(button, first, second, third, fourth) {
        button.onclick = function () {
            if (button.style.backgroundColor !== "white") {
                if (first.style.backgroundColor == "white") {
                    first.style.backgroundColor = "cyan";
                    first.textContent = button.textContent;
                    first.style.cursor = "pointer";
                    button.style.backgroundColor = "white";
                    button.textContent = "";
                    button.style.cursor = "default";
                    if (DOMFirstButton.textContent == "1" && DOMSecondButton.textContent == "2"  && DOMThirdButton.textContent == "3"  && DOMFourthButton.textContent == "4"  && DOMFifthButton.textContent == "5"  && DOMSixthButton.textContent == "6"  && DOMSeventhButton.textContent == "7"  && DOMEighthButton.textContent == "8") {
                        buttons.forEach(function (element) {
                            element.style.backgroundColor = "green";
                            element.style.cursor = "default";
                            element.style.userSelect = "none";
                        });
                    }
                } else if (second.style.backgroundColor == "white") {
                    second.style.backgroundColor = "cyan";
                    second.textContent = button.textContent;
                    second.style.cursor = "pointer";
                    button.style.backgroundColor = "white";
                    button.textContent = "";
                    button.style.cursor = "default";
                    if (DOMFirstButton.textContent == "1" && DOMSecondButton.textContent == "2"  && DOMThirdButton.textContent == "3"  && DOMFourthButton.textContent == "4"  && DOMFifthButton.textContent == "5"  && DOMSixthButton.textContent == "6"  && DOMSeventhButton.textContent == "7"  && DOMEighthButton.textContent == "8") {
                        buttons.forEach(function (element) {
                            element.style.backgroundColor = "green";
                            element.style.cursor = "default";
                            element.style.userSelect = "none";
                        });
                    }
                } else if (third.style.backgroundColor == "white") {
                    third.style.backgroundColor = "cyan";
                    third.textContent = button.textContent;
                    third.style.cursor = "pointer";
                    button.style.backgroundColor = "white";
                    button.textContent = "";
                    button.style.cursor = "default";
                    if (DOMFirstButton.textContent == "1" && DOMSecondButton.textContent == "2"  && DOMThirdButton.textContent == "3"  && DOMFourthButton.textContent == "4"  && DOMFifthButton.textContent == "5"  && DOMSixthButton.textContent == "6"  && DOMSeventhButton.textContent == "7"  && DOMEighthButton.textContent == "8") {
                        buttons.forEach(function (element) {
                            element.style.backgroundColor = "green";
                            element.style.cursor = "default";
                            element.style.userSelect = "none";
                        });
                    }
                } else if (fourth.style.backgroundColor == "white") {
                    fourth.style.backgroundColor = "cyan";
                    fourth.textContent = button.textContent;
                    fourth.style.cursor = "pointer";
                    button.style.backgroundColor = "white";
                    button.textContent = "";
                    button.style.cursor = "default";
                    if (DOMFirstButton.textContent == "1" && DOMSecondButton.textContent == "2"  && DOMThirdButton.textContent == "3"  && DOMFourthButton.textContent == "4"  && DOMFifthButton.textContent == "5"  && DOMSixthButton.textContent == "6"  && DOMSeventhButton.textContent == "7"  && DOMEighthButton.textContent == "8") {
                        buttons.forEach(function (element) {
                            element.style.backgroundColor = "green";
                            element.style.cursor = "default";
                            element.style.userSelect = "none";
                        });
                    }
                }
            }
        }
    }
});
