let num1 = window.prompt('Please add a number', '1,2,3..');
let num2 = window.prompt('Please add another number','1,2,3..');
num1 = parseFloat(num1);
num2 = parseFloat(num2);
const result = num1 + num2;


let sum = document.querySelector('#sum').innerHTML = result;
