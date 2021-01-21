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
function enterNumber (value) {
    if (displayValue === "0" || displayValue == result) {
        displayValue = value;
    } else {
        displayValue += value;
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
function performOperation (value) {
    if (!operator) {
        result = Number(displayValue);
        operator = value;
    } else {
        let x = result;
        let y = Number(displayValue);
        result = operate(operator, x, y);
        operator = value;
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

function mousePress(e) {
    let val = e.target.value;
    if (e.target.className === 'key num-key') {
        enterNumber (val);
    } else if (e.target.id === "key-C") {
       clear();
    } else if (e.target.id === 'key-del') {
        deleteChar();
    } else if (e.target.className === 'key op-key') {
        performOperation(val);
    } else if (e.target.id === 'key-equal') {
        calculate();
    } else if (e.target.id === 'key-decimal') {
        addDecimal();
    }
    updateDisplay();
}

function keyPress(e) {
    let numKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    let opKeys = ["+", "-", "*", "/"];
    
    if (numKeys.includes(e.key)) {
        enterNumber(e.key);
    } else if (e.key === 'Delete') {
        clear();
    } else if (e.key === 'Backspace') {
        deleteChar();
    }
    else if (opKeys.includes(e.key)) {
        if (e.key === "+") {
            performOperation('add');
        } else if (e.key === "-") {
            performOperation('subtract');
        } else if (e.key === "*") {
            performOperation('multiply');
        } else {
            performOperation('divide');
        }
    } else if (e.key === 'Enter' || e.key === '=') {
        calculate();
    } else if (e.key === '.') {
        addDecimal();
    }
    updateDisplay();
}

let screen = document.querySelector('#screen')
let displayValue = "";
let result = null;
let operator;

let keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('click', mousePress))

window.addEventListener('keydown', keyPress)