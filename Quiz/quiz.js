document.addEventListener("DOMContentLoaded", function () {
    let DOMQuestion = document.getElementById("question");
    let DOMButtons = document.querySelectorAll(".button");
    let DOMNext = document.getElementById("next");
    let DOMIndex = document.getElementById("index");

    let currentQuestionIndex = 0;

    let questions = [
        {
            question: "Which mountain is the highest in the world?",
            answer: "Mount Everest",
            options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"]
        },
        {
            question: "What do you call a male pig?",
            answer: "Boar",
            options: ["Boar", "Sow", "Piglet", "Hog"]
        },
        {
            question: "How many Oscars did the movie Titanic win?",
            answer: "11 Oscars",
            options: ["10 Oscars", "11 Oscars", "12 Oscars", "13 Oscars"]
        },
        {
            question: "Who are the best friends of Harry Potter?",
            answer: "Hermione Granger and Ron Weasley",
            options: ["Hermione Granger and Ron Weasley", "Draco Malfoy and Pansy Parkinson", "Neville Longbottom and Luna Lovegood", "Fred and George Weasley"]
        },
        {
            question: "When was Queen Elizabeth II crowned?",
            answer: "1953",
            options: ["1952", "1953", "1954", "1955"]
        },
        {
            question: "How many individual bones are there in a human hand?",
            answer: "27",
            options: ["27", "28", "29", "30"]
        },
        {
            question: "What is a sonnet?",
            answer: "A form of poem",
            options: ["A play", "A musical piece", "A form of poem", "A novel"]
        },
        {
            question: "What do the Olympic rings represent?",
            answer: "The 5 continents",
            options: ["The 5 continents", "The 5 Olympiads", "The 5 disciplines", "The 5 rings in the logo"]
        },
        {
            question: "Who was the first President of the United States?",
            answer: "George Washington",
            options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"]
        },
        {
            question: "How many states does Germany have?",
            answer: "16",
            options: ["14", "15", "16", "17"]
        }
    ];

    function loadQuestion(index) {
        let question = questions[index];
        DOMQuestion.textContent = question.question;
        DOMButtons.forEach(function (button, i) {
            button.textContent = question.options[i];
            button.style.backgroundColor = "white";
            button.style.pointerEvents = "all";
        });
        DOMNext.style.pointerEvents = "none";
        DOMNext.style.backgroundColor = "white";
        DOMNext.style.color = "darkblue";
        DOMIndex.textContent = index + 1;
    }

    function checkAnswer(element) {
        let correctAnswer = questions[currentQuestionIndex].answer;
        if (element.textContent === correctAnswer) {
            element.style.backgroundColor = "lightgreen";
            element.onmouseleave = function () {
                element.style.backgroundColor = "lightgreen";
            }
        } else {
            element.style.backgroundColor = "rgb(255, 131, 131)";
            DOMButtons.forEach(function (btn) {
                if (btn.textContent === correctAnswer) {
                    btn.style.backgroundColor = "lightgreen";
                }
            });
            element.onmouseleave = function () {
                element.style.backgroundColor = "rgb(255, 131, 131)";
            }
        }
        DOMButtons.forEach(function (btn) {
            btn.style.pointerEvents = "none";
        });
        DOMNext.style.pointerEvents = "all";
        DOMNext.style.backgroundColor = "darkblue";
        DOMNext.style.color = "white";
    }

    DOMButtons.forEach(function (element) {
        element.style.transition = "all 0.1s";
        element.onmouseenter = function () {
            DOMButtons.forEach(function (btn) {
                btn.style.backgroundColor = "white";
            });
            element.style.backgroundColor = "rgb(132, 132, 255)";
            element.onmouseleave = function () {
                DOMButtons.forEach(function (element) {
                    element.style.backgroundColor = "white";
                })
            };
        };
        element.onclick = function () {
            checkAnswer(element);
        };
    });

    DOMNext.onclick = function () {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion(currentQuestionIndex);
        } else {
            DOMButtons.forEach(function (element) {
                element.style.pointerEvents = "none";
            });
            DOMNext.style.color = "darkblue";
            DOMNext.style.background = "white";
            DOMNext.style.pointerEvents = "none";
        }
    };

    loadQuestion(currentQuestionIndex);
});
