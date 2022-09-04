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
let counter = 0;
let stringCounter = 0;

numbers.forEach((number) => number.addEventListener('click', () => {
    str += number.textContent;
    if(counter>0){
        const displayedNumbers = document.querySelectorAll('.displayedNumber');
        const lastDisplayedNumber = displayedNumbers[stringCounter]; 
        lastDisplayedNumber.remove();   
        console.log(counter);
        counter--;
    }

    const myString = document.createElement('div');
    myString.textContent = str;
    myString.classList.add('displayedNumber');
    displayScreen.appendChild(myString);
    counter++;
    }))

const operators = document.querySelectorAll('.operator');

operators.forEach( (operator) => operator.addEventListener('click', () => {
    counter = 0;
    stringCounter++;
    myList.push(str);
    str = '';

    myList.push(operator.textContent);
    if (operator.textContent == '='){

    }
}))

let displayNumber = (str) => {
    const divElement = document.createElement('div');
    divElement.textContent = str;
    divElement.classList.add('displayedNumber');
    displayScreen.appendChild(divElement);
}