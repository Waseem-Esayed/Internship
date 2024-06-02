document.addEventListener("DOMContentLoaded", function () {
    let DOMButtons = document.querySelectorAll(".button");
    let buttonContainer = document.getElementsByClassName("buttonContainer")[0];

    buttonContainer.style.maxWidth = "250px";

    DOMButtons.forEach(function (element) {
        element.style.cursor = "default";
        element.style.pointerEvents = "none";
        element.style.height = "75px";
        element.style.width = "75px";
        element.innerHTML = "";
    });

    let startBtn = document.getElementById("startBtn");
    let timeLabel = document.getElementById("timeLabel");

    startBtn.textContent = startBtn.textContent.toUpperCase();

    startBtn.style.cursor = "pointer";

    startBtn.onclick = function () {
        startBtn.style.cursor = "default";
        startBtn.style.pointerEvents = "none";
        startBtn.style.backgroundColor = "#fff8df";
        startBtn.textContent = "...";

        timeLabel.innerHTML = 3;

        for (let i = 1; i <= 3; i++) {
            setTimeout(function () {
                timeLabel.innerHTML -= 1;
                if (i == 3) {
                    timeLabel.parentNode.removeChild(timeLabel);
                    startGame();
                }
            }, 1000 * i);
        }
    };

    function startGame() {
        DOMButtons.forEach(function (element) {
            element.style.height = "100px";
            element.style.width = "100px";
        });

        let button_1 = document.getElementById("button-1");
        let button_2 = document.getElementById("button-2");
        let button_3 = document.getElementById("button-3");
        let button_4 = document.getElementById("button-4");

        button_1.textContent = 1;
        button_2.textContent = 2;
        button_3.textContent = 3;
        button_4.textContent = 4;

        let buttonListAll = [];
        let buttonListCurrent = [];

        let randIndex;

        let points = 0;

        startBtn.textContent = points;
        startBtn.style.fontSize = "35px";

        setTimeout(function () {
            genNewButton();
        }, 1000);

        function changeBackgroundColor(button) {
            button.style.backgroundColor = "#363949";
            setTimeout(function () {
                button.style.backgroundColor = "#f6f6f9";
                DOMButtons.forEach(function (element) {
                    element.style.pointerEvents = "all";
                    element.style.cursor = "pointer";
                });
            }, 750);
        }

        function genNewButton() {
            let index = buttonListAll.length;
            randIndex = Math.floor(Math.random() * 4) + 1;

            let buttonToAdd = null;

            switch (randIndex) {
                case 1:
                    buttonToAdd = button_1;
                    break;
                case 2:
                    buttonToAdd = button_2;
                    break;
                case 3:
                    buttonToAdd = button_3;
                    break;
                case 4:
                    buttonToAdd = button_4;
                    break;
            }

            buttonListAll.push(buttonToAdd);
            showSequence();
        }

        function showSequence() {
            buttonListAll.forEach(function (button, index) {
                setTimeout(function () {
                    changeBackgroundColor(button);
                    if (index === buttonListAll.length - 1) {
                        setTimeout(function () {
                            enableUserInput();
                        }, 1000);
                    } else {
                        DOMButtons.forEach(function (element) {
                            element.style.cursor = "default";
                            element.style.pointerEvents = "none";
                        });
                    }
                }, 1500 * index);
            });
        }

        function enableUserInput() {
            DOMButtons.forEach(function (element) {
                element.style.cursor = "pointer";
            });
        }

        DOMButtons.forEach(function (element) {
            element.onclick = function () {
                if (element.style.cursor == "pointer") {
                    if (buttonListAll[buttonListCurrent.length] == element) {
                        element.style.backgroundColor = "lightgreen";
                        DOMButtons.forEach(function (element) {
                            element.style.cursor = "default";
                            element.style.pointerEvents = "none";
                        });
                        setTimeout(function () {
                            element.style.backgroundColor = "#f6f6f9";
                            DOMButtons.forEach(function (element) {
                                element.style.cursor = "pointer";
                                element.style.pointerEvents = "all";
                            });
                        }, 750);
                        buttonListCurrent.push(element);
                        if (buttonListCurrent.length === buttonListAll.length) {
                            points++;
                            startBtn.textContent = points;
                            setTimeout(function () {
                                buttonListCurrent = [];
                                genNewButton();
                            }, 2000);
                        }
                    } else {
                        setTimeout(function () {
                            element.style.backgroundColor = "#f6f6f9";
                            buttonListCurrent = [];
                            DOMButtons.forEach(function (element) {
                                element.style.backgroundColor = "rgba(255, 0, 0, 0.529)";
                                element.style.cursor = "default";
                                element.style.pointerEvents = "none";
                            });
                        }, 500);
                        window.alert("Make a screenshot and send me ur score :)");
                    }
                }
            };
        });
    }
});
