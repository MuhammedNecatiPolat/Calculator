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

const displayOnClick = () =>
