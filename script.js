const add = (a, b) => {return a + b};
const subtract = (a, b) => {return a - b};
const multiply = (a, b) => {return a * b};
const divide = (a, b) => {return a / b};

const operate = (a, b, operator) => {
    if (operator = '+') return add(a, b);
    if (operator = '-') return subtract(a, b);
    if (operator = '*') return multiply(a, b);
    if (operator = '/') return divide(a, b);
} 

let str = '';
let myList = [];
const numbers = document.querySelectorAll('.number')
const displayScreen = document.querySelector('.display');


numbers.forEach((number) => number.addEventListener('click', () => {
    str += number.textContent;
    myString = document.createElement('div');
    myString.textContent = str;
    displayScreen.appendChild(myString);

    }))

const operators = document.querySelectorAll('.operator');

operators.forEach( (operator) => operator.addEventListener('click', () => {
    myList.push(str);
    str = '';
    myList.push(operator.textContent);
    if (operator.textContent == '='){

    }
}))