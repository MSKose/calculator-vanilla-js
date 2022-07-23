const btnContent = document.querySelector('.content');
const preDisplay = document.querySelector('.previous-display');
const curDisplay = document.querySelector('.current-display');

let currentNumber = '';
let previousNumber = '';
let operation = '';

btnContent.addEventListener('click', (e) => {
    if (e.target.classList.contains("num")){
        updateNumber(e.target.textContent);
        updateDisplay();
    }

    if (e.target.classList.contains("operator")){
        addOperator(e.target.textContent);
        updateDisplay();
    }

    if (e.target.classList.contains("equal")){
        calculate();
        updateDisplay();
    }
    
    if (e.target.classList.contains("ac")){
        currentNumber = '';
        previousNumber = '';
        operation = '';
        updateDisplay();
    }

    if (e.target.classList.contains("abs")){
        if(!currentNumber) return;
        currentNumber *= -1;
        updateDisplay();
    }

    if (e.target.classList.contains('percent')) {
        if (!currentNumber) return;
        currentNumber = currentNumber / 100;
        updateDisplay();
        equalOrPercentPressed = true;
    }
});

function updateNumber(num) {
    // preventing multiple dots
    if (num === "." && currentNumber.includes('.')) return;

    // preventing leading 0
    if (currentNumber === '0' && num === '0') return;

    // only allowing 0. lead
    if (currentNumber === '0' && num !== '.') {
        currentNumber = num;
        return;
    }

    // limiting maximum input length to 7
    // if (currentNumber.length > 6) return;

    // appending the added num to currentNumber
    currentNumber += num
}

function updateDisplay() {
    curDisplay.textContent = currentNumber;
    preDisplay.textContent = `${previousNumber} ${operation}`
}

function addOperator(op) {
    // head to calculate function only if previousNumber exists:
    if (previousNumber){
        calculate();
    }
    
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculate () {
    let calculation = 0;

    // converting strings to numbers
    const pre = Number(previousNumber);
    const curr = Number(currentNumber);

    // console.log(operation);
    switch (operation) {
        case '+':
          calculation = pre + curr;
          break;
        case '-':
          calculation = pre - curr;
          break;
        case 'x':
          calculation = pre * curr;
          break;
        case '÷':
          calculation = pre / curr;
          break;
        default:
          return;
    }
    currentNumber = calculation;

    previousNumber = '';
    operation = '';
}
