const btnContent = document.querySelector('.content');
const preDisplay = document.querySelector('.previous-display');
const curDisplay = document.querySelector('.current-display');

console.log(curDisplay);


let currentNumber = '';
let previousNumber = '';

btnContent.addEventListener('click', (e) => {
    if (e.target.classList.contains("num")){
        updateNumber(e.target.textContent)
        updateDisplay()
    }

    if (e.target.classList.contains("operator")){
        updateNumber(e.target.textContent)
        updateDisplay()
    }
});

function updateNumber(num) {
    // preventing multiple dots
    if (num === "." && currentNumber.includes('.')) return;

    // preventing leading 0
    if (!currentNumber && num === '0') return;

    // limiting maximum input length to 7
    // if (currentNumber.length > 6) return;

    // appending the added num to currentNumber
    currentNumber += num
}

function updateDisplay() {
    curDisplay.textContent = currentNumber;
}