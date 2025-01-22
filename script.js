function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}

function populateLeftSection() {
    let buttonArray = [];
    const leftCard = document.querySelector("#left-section");
    for (let i = 0; i < 12; i++) {
        buttonArray[i] = document.createElement("div");
        buttonArray[i].classList.add("button");

        switch (i) {
            case 9:
                buttonArray[i].textContent = 0;
                break;
            case 10:
                buttonArray[i].textContent = ".";
                break;
            case 11:
                buttonArray[i].textContent = "%";
                buttonArray[i].classList.add("operator");
                break;
            default:
                buttonArray[i].textContent = i + 1;
        }

    }
    buttonArray.forEach((button) => leftCard.appendChild(button));
    addNumbersEventListeners(buttonArray);
}


function populateMiddleSection() {
    //add middle section
    let buttonArray = [];
    const operatorArray = ['/', '*', '-', '+'];
    const rightCard = document.querySelector("#right-section");
    for (let i = 0; i < 4; i++) {
        buttonArray[i] = document.createElement("div");
        buttonArray[i].classList.add("button");
        buttonArray[i].classList.add("operator");
        buttonArray[i].textContent = operatorArray[i];
    }

    buttonArray.forEach((button) => rightCard.appendChild(button));
    addOperatorsEventListeners(buttonArray);
    
}


function populateBottomSection(){
    
    const bottomCard = document.querySelector("#bottom-section");
    const clearButton = document.createElement("div");
    clearButton.classList.add("button");
    clearButton.id = "clear-button";
    clearButton.textContent = "clear";
    
    const equalButton = document.createElement("div");
    equalButton.classList.add("button");
    equalButton.id = "equal-button";
    equalButton.textContent= "=";
    
    bottomCard.appendChild(clearButton);
    bottomCard.appendChild(equalButton);

    addEqualEventListener(equalButton);
    addClearEventListenr(clearButton);
}

function updateDisplay(str){
    const display = document.querySelector("#display");
    display.textContent += str;
}

function addNumbersEventListeners(buttonArray){
    for (let i = 0; i < buttonArray.length; i++) {
        buttonArray[i].addEventListener('click', () => {
            updateDisplay(buttonArray[i].textContent);
        });
    }
}

function addOperatorsEventListeners(buttonArray){
    //store firstNum and clear display
    const display = document.querySelector("#display");
    buttonArray.forEach((button) => {
        button.addEventListener('click', () => {
            firstNum = Number(display.textContent);
            operator = button.textContent;
            display.textContent = '';
        });
    });
}

function calculateAndShowResult() {
    const display = document.querySelector("#display");
    secondNum = Number(display.textContent);
    display.textContent = '';
    let result = operate(firstNum,secondNum,operator);
    updateDisplay(result);
    operator = ''; //to reset operator
}

function addEqualEventListener(button) {
    button.addEventListener('click', calculateAndShowResult);
}

function addClearEventListenr(button) {
    button.addEventListener('click', () => {
        firstNum = '';
        secondNum = '';
        operator = '';
        display.textContent = '';
    });
}


function createButtonsGui(){
    populateLeftSection();
    populateMiddleSection();
    populateBottomSection();
}
     
createButtonsGui();
   
let firstNum, secondNum, operator;