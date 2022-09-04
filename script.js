const add = (a, b) => {return a + b};
const subtract = (a, b) => {return a - b};
const multiply = (a, b) => {return a * b};
const divide = (a, b) => {return a / b};

const operate = (a, b, operator) => {
    if (operator == '+') return add(a, b);
    if (operator =='-') return subtract(a, b);
    if (operator == '*') return multiply(a, b);
    if (operator == '/') return divide(a, b);
} 

let str = '';
let myList = [];
const numbers = document.querySelectorAll('.number')
const displayScreen = document.querySelector('.display');
let counter = 0;
let stringCounter = 0;
let operatorCounter = 0;

numbers.forEach((number) => number.addEventListener('click', () => {
    str += number.textContent;
    if(counter>0){
        const displayedNumbers = document.querySelectorAll('.displayedNumber');
        const lastDisplayedNumber = displayedNumbers[stringCounter]; 
        lastDisplayedNumber.remove();   
        console.log(counter);
        counter--;
    }

    displayNumber(str);
    counter++;
    }))

const operators = document.querySelectorAll('.operator');

operators.forEach( (operator) => operator.addEventListener('click', () => {
    
    counter = 0;
    stringCounter++;
    myList.push(str);
    str = '';

    
    if (operator.textContent == '=' || operator.textContent == 'clear'){
        removeDisplayedNumbers();
        removeDisplayedOperators();
        console.log(myList);

        if(operator.textContent == 'clear'){
            myList = [];
            stringCounter = 0;
        }
        if(operator.textContent == '='){
            stringCounter = 0;
            result = calculateResult(myList);
            str = result;
            displayNumber(result);
        }
    }
    else {
        myList.push(operator.textContent);
        operatorCounter++;
        displayOperator(operator.textContent);
    }
}))


let displayOperator = (str) => {
    const divElement = document.createElement('div');
    divElement.textContent = str;
    divElement.classList.add('displayedOperator');
    displayScreen.appendChild(divElement);
}

let displayNumber = (str) => {
    const divElement = document.createElement('div');
    divElement.textContent = str;
    divElement.classList.add('displayedNumber');
    displayScreen.appendChild(divElement);
}

const removeDisplayedNumbers = () => {
    const displayedNumbers = document.querySelectorAll('.displayedNumber');
    displayedNumbers.forEach((displayedNumber) => displayedNumber.remove())
}

const removeDisplayedOperators = () => {
    const displayedOperator = document.querySelectorAll('.displayedOperator');
    displayedOperator.forEach((displayedOperator) => displayedOperator.remove())
}

const calculateResult = (lst) => {
    while(operatorCounter>0){
        num1 = +lst.shift();
        operator = lst.shift();
        num2 = +lst.shift();
        if(num1 == 0 && num2 == 0 && operator == '/') return 'no such shit';
        result = operate(num1, num2, operator);
        lst.unshift(result);
        operatorCounter--;
    }

    result = +lst.shift();
    return result;
}