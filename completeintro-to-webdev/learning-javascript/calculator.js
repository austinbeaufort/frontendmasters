// selecting the container
let container = document.querySelector('.grid-container');

// selecting display
let display = document.querySelector('.display');



// selecting special operators
let clear = document.querySelector('.clear');  
let backspace = document.querySelector('.backspace');
let equals = document.querySelector('.equals');

// assigning all grid numbers to a single variable..
let number = document.querySelectorAll('.number');

// numbers object
let numbers = {
    zerobtn: document.querySelector('.zero'),
    onebtn: document.querySelector('.one'),
    twobtn: document.querySelector('.two'),
    threebtn: document.querySelector('.three'),
    fourbtn: document.querySelector('.four'),
    fivebtn: document.querySelector('.five'),
    sixbtn: document.querySelector('.six'),
    sevenbtn: document.querySelector('.seven'),
    eightbtn: document.querySelector('.eight'),
    ninebtn: document.querySelector('.nine')
}

// selecting operators
    operators = {
    divide: document.querySelector('.divide'),
    multiply: document.querySelector('.multiply'),
    subtract: document.querySelector('.subtract'),
    add: document.querySelector('.add')
    }

// operator functions
function addition(a, b) {
    return parseInt(a.innerText) + parseInt(b.innerText);
}

function division(a, b) {
    return parseInt(a.innerText / b.innerText);
}

function subtraction(a, b) {
    return parseInt(a.innerText - b.innerText);
}

function multiplication(a, b) {
    return parseInt(a.innerText * b.innerText);
}


// if button clicked, display the number.
container.addEventListener('click', function(event) {
    if(event.target.className.includes('number')) {
        display.innerText += event.target.innerText;
    }
});