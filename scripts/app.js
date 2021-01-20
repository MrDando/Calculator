function add(x,y) {
    return x + y;
}

function subtract (x,y) {
    return x - y;
}

function multiply (x ,y) {
    return x * y;
}

function divide (x, y) {
    return x / y;
}

function operate (op, x , y) {
    if (op === 'add') {
        return add(x,y);
    } else if (op === 'subtract') {
        return subtract(x,y);
    } else if (op === 'multiply') {
        return multiply(x,y);
    } else {
        return divide(x,y);
    }
}
function enterNumber (e) {
    if (displayValue === "0" || displayValue == result) {
        displayValue = e.target.value;
    } else {
        displayValue += e.target.value;
    } 
}
function clear () {
    displayValue = "0";
    result = null;
}
function deleteChar () {
    if (displayValue.length === 1) {
        displayValue = "0";
    } else {
        displayValue = displayValue.slice(0, -1)
    }
}
function performOperation (e) {
    if (!operator) {
        result = Number(displayValue);
        operator = e.target.value;
    } else {
        let x = result;
        let y = Number(displayValue);
        result = operate(operator, x, y);
        operator = e.target.value;
        displayValue = result.toString(10)
    }   
}
function calculate () {
    let x = result;
        let y = Number(displayValue);
        result = operate(operator, x, y);
        displayValue = result.toString(10)
}
function updateDisplay () {
    if (displayValue.length > 16) {
        let subStart = displayValue.length - 17;
        let subEnd = displayValue.length - 1;
        screen.innerText = displayValue.substring(subStart, subEnd)
    } else {
        screen.innerText = displayValue;
    }
}
function addDecimal () {
    if (!(displayValue.includes('.'))) {
        displayValue += "."
    }
}

function keyPress(e) {
    if (e.target.className === 'key num-key') {
        enterNumber (e);
    } else if (e.target.id === "key-C") {
       clear();
    } else if (e.target.id === 'key-del') {
        deleteChar();
    } else if (e.target.className === 'key op-key') {
        performOperation(e);
    } else if (e.target.id === 'key-equal') {
        calculate();
    } else if (e.target.id === 'key-decimal') {
        addDecimal();
    }
    updateDisplay();
}

let screen = document.querySelector('#screen')
let displayValue = "";
let result = null;
let operator;

let keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('click', keyPress))