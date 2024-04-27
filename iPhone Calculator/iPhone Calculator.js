let btnAc = document.getElementById("btn-ac");
let btnSign = document.getElementById("btn-sign");
let btnPercent = document.getElementById("btn-percent");
let btnDivide = document.getElementById("btn-divide");

let btnMultiply = document.getElementById("btn-multiply");

let btnMinus = document.getElementById("btn-minus");

let btnPlus = document.getElementById("btn-plus");

let btnComma = document.getElementById("btn-comma");
let btnEqual = document.getElementById("btn-equal");

let display = document.getElementById("display");
let currentNumber = "";
let previousNumber = "";
let operation = "";

function updateDisplay() {
    display.textContent = currentNumber;
}

function appendNumber(number) {
    if (number === '.' && currentNumber.includes('.')) return;
    if (currentNumber === "0") {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
    updateDisplay();
}

function clearDisplay() {
    currentNumber = "";
    updateDisplay();
}

function clearAll() {
    currentNumber = "";
    previousNumber = "";
    operation = "";
    updateDisplay();
}

function operate() {
    let result;
    const num1 = parseFloat(previousNumber);
    const num2 = parseFloat(currentNumber);
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case 'x':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }
    currentNumber = result.toString();
    previousNumber = "";
    operation = "";
    updateDisplay();
}

document.querySelectorAll('.gray').forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.textContent);
    });
});

document.querySelectorAll('.orange').forEach(button => {
    button.addEventListener('click', () => {
        if (currentNumber === "") return;
        if (previousNumber !== "") {
            operate();
        }
        operation = button.textContent;
        previousNumber = currentNumber;
        currentNumber = "";
    });
});

btnEqual.addEventListener('click', () => {
    if (previousNumber === "" || currentNumber === "") return;
    operate();
});

btnAc.addEventListener('click', function() {
    currentNumber = "0";
    previousNumber = "";
    operation = "";
    updateDisplay();
});


btnSign.addEventListener('click', () => {
    if (currentNumber === "") return;
    currentNumber = (parseFloat(currentNumber) * -1).toString();
    updateDisplay();
});

btnPercent.addEventListener('click', () => {
    if (currentNumber === "") return;
    currentNumber = (parseFloat(currentNumber) / 100).toString();
    updateDisplay();
});
