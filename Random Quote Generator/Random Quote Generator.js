quote = document.getElementById("quote");
button = document.getElementById("button");
reset = document.getElementById("reset");

let quotes = ["Give someone a program; you frustrate them for a day; teach them how to program, and you frustrate them for a lifetime",
    "Don’t comment bad code - rewrite it",
    "No one in the brief history of computing has ever written a piece of perfect software. It’s unlikely that you’ll be the first",
    "A programming language is for thinking about programs, not for expressing programs you’ve already thought of. It should be a pencil, not a pen",
    "Sometimes it pays to stay in bed on Monday rather than spending the rest of the week debugging Monday’s code",
    "Bad programmers worry about the code. Good programmers worry about data structures and their relationships",
    "Debugging becomes significantly easier if you first admit that you are the problem",
    "It´s better to wait for a productive programmer to become available than it is to wait for the first available programmer to become productive",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand",
    "One of my most productive days was throwing away 1000 lines of code",
];

let randomNumb;
let randomQuote;
let index;
let checkFirstUse = true;
let numbers = [];

initProgram();

function initProgram() {

    resetProgram();

    reset.onclick = resetProgram;

    function resetProgram() {
        if (!checkFirstUse) {
            quote.innerHTML = "";
            if (numbers.length === 0) {
                reset.setAttribute("disabled", "");
                reset.style.backgroundColor = "#b5b5b5";
                reset.style.cursor = "not-allowed";
                reset.addEventListener("mouseout", function() {
                    reset.style.transform = "scale(1)";
                  });

            }
        } else {
            reset.setAttribute("disabled", "");
            reset.style.backgroundColor = "#b5b5b5";
            reset.style.cursor = "not-allowed";
            reset.addEventListener("mouseover", function() {
                reset.style.transform = "scale(1)";
              });
        }
        if (numbers.length === 0) {
            for (let i = 0; i <= quotes.length - 1; i++) {
                numbers.push(i);
            }
            reset.addEventListener("mouseover", function() {
                reset.style.transform = "scale(1)";
              });
        }
    }

    button.onclick = function () {
        if (numbers.length !== 0) {
            //checkFirstUse = true
            reset.setAttribute("disabled", "");
            reset.style.backgroundColor = "#b5b5b5";
            reset.style.cursor = "not-allowed";
            reset.addEventListener("mouseover", function() {
                reset.style.transform = "scale(1)";
              });
            do {
                randomNumb = Math.round(Math.random() * quotes.length);
            } while (!numbers.includes(randomNumb));
            index = numbers.indexOf(randomNumb);
            numbers.splice(index, 1);
            quote.innerHTML = (quotes[randomNumb]);
            if (numbers.length === 0) {
                reset.removeAttribute("disabled");
                reset.style.backgroundColor = "#ff4343";
                reset.style.cursor = "pointer";
                checkFirstUse = false;
                reset.addEventListener("mouseover", function() {
                    reset.style.transform = "scale(1.1)";
                  });
                  reset.addEventListener("mouseout", function() {
                    reset.style.transform = "scale(1)";
                  });
            }
        } else {
            reset.removeAttribute("disabled");
            reset.style.backgroundColor = "#ff4343";
            reset.style.cursor = "pointer";
            checkFirstUse = false;
            window.alert("You have generated all quotes! Reset to play again!");
            reset.addEventListener("mouseover", function() {
                reset.style.transform = "scale(1.1)";
              });
              reset.addEventListener("mouseout", function() {
                reset.style.transform = "scale(1)";
              });
        }
    }
}
