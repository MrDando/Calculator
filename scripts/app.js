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

function operate (operator, x , y) {
    if (operator === 'add') {
        return add(x,y);
    } else if (operator === 'subtract') {
        return subtract(x,y);
    } else if (operator === 'multiply') {
        return multiply(x,y);
    } else {
        return divide(x,y);
    }
}

function keyPress(e) {
    if (e.target.className === 'key num-key') {
        displayValue += e.target.value;
        screen.innerText = displayValue;
    } else if (e.target.id === "key-C") {
       displayValue = "";
       screen.innerText = displayValue;

    } else if (e.target.id === 'key-del') {
        displayValue = displayValue.slice(0, -1)
        screen.innerText = displayValue;
    }
    
}

let screen = document.querySelector('#screen')
let displayValue = "";

let keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('click', keyPress))