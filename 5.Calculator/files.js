// var display = document.querySelector(".display");

// const clicked=document.querySelectorAll("span");
// console.log(display)
// let displayValue = 0;
// let pendingValue;
// let evalStringArray = [];

// for(let i=0;i<clicked.length;i++){
//     clicked[i].addEventListener("click",function(){
//         const buttonValue = this.innerHTML;
//         if(buttonValue=='C'){
//           display.innerText=0;
//           displayValue=0;
//         }else if(buttonValue<=9 && buttonValue>=0){
//             displayValue+=buttonValue;
//             display.innerText=displayValue;
//         }
//         console.log(display.innerText);
//     })
   
// }
const display = document.querySelector('.display');
const keys = document.getElementById('keys');

let operand1 = null;
let operator = null;
let operand2 = null;

keys.addEventListener('click', (event) => {
  if (event.target.matches('span')) {
    const key = event.target;
    const keyValue = key.textContent;
    
    if (keyValue === 'C') {
      clearDisplay();
    } else if (keyValue === '←') {
      deleteLastChar();
    } else if (keyValue === '=') {
      calculate();
    } else if (/[0-9]/.test(keyValue)) {
      updateDisplay(keyValue);
    } else {
      handleOperator(keyValue);
    }
  }
});

function clearDisplay() {
  display.textContent = '0';
  operand1 = null;
  operator = null;
  operand2 = null;
}

function deleteLastChar() {
  display.textContent = display.textContent.slice(0, -1);
}

function updateDisplay(value) {
  if (display.textContent === '0') {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

function handleOperator(value) {
  if (operator !== null) {
    calculate();
  }
  operand1 = Number(display.textContent);
  operator = value;
  display.textContent = '0';
}

function calculate() {
  operand2 = Number(display.textContent);
  let result = 0;
  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    case '/':
      result = operand1 / operand2;
      break;
  }
  display.textContent = result;
  operand1 = result;
  operator = null;
  operand2 = null;
}