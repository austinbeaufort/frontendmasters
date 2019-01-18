// conditional statements.

// if statements.

/*
falsy values:
0
-0
""
false
null
undefined
NaN
*/

// let a = 10;

// if (a) {  // a is truthy.
//     a = a * 2;
//     console.log(a);
// }

// let a = 0; // a is a falsy value, the if statement doesn't run. 

// if(a) {
//     a = a * 2;
//     console.log(a);
// }
// alert(a);


// LOOPS

// for (let a = 5; a < 10; a = a + 1) {
//     console.log(a);
// }

// let a = 5;
// while (true) {
//     if (a >= 10) {
//         break; // break statement stops the loop.
//     }
//     console.log(a);
//     a = a + 1;
// }


// FUNCTIONS

// toFixed() is a method that takes a number, turns it to a string, and truncates it to decimal value as given.

//ex..
// let a = 3.1415926;

// console.log(a.toFixed(3)); // to 3 decimal places, rounds the third place ... 3.142


// for money
// let a = 3.5;
// console.log(a.toFixed(2)); // gives an extra decimal place to simulate cents amount. // 3.50


// let a = 0;
// function add2() {
//     a = a + 2;
// }

// add2();
// add2();
// add2();
// add2();
// add2();

// console.log(a); // a = 10;

// function add10() {
//     add2();
//     add2();
//     add2();
//     add2();
//     add2();
// }

// add10();
// add10();
// add10();
// add10();

// console.log(a) // a = 50;


// PARAMETERS

// let a = 10;

// function foo(b) {  // parameters are made when declaring the function
//     a = a * 2;
//     a = a + b;
//     return a / 2;
// }

// let b = foo(3); // makes a = 23, but returns 11.5 to variable b.

// console.log(a);  // still logs 23
// console.log(b); // b is assigned the return value of the function, 11.5
// foo(5);
// foo(25);
// foo(100); // arguments are passed into the function.

// function bar() {...};
// function ( bar() );
// to pass the result of a function call on bar, must include ();



// PHONE PURCHASE CHALLANGE

// variables
const taxRate = 0.08;
const phonePrice = 599;
const accessories = 89;
let bankAccountBalance = parseInt(prompt('Enter imaginary Bank Account Balance', '5000'));
let fixedBank = bankAccountBalance;

// total in money format
function formatGrandTotal(totalAmount) {
    let prettyGrandTotal = `$${totalAmount.toFixed(2)}`
    return prettyGrandTotal;
}

// calculate tax
function getTax(subTotal) {
    let taxAmount = subTotal * taxRate;
    return taxAmount;
}

// calculate total + tax
let nonTaxTotal = phonePrice + accessories;
let grandTotal = getTax(nonTaxTotal) + nonTaxTotal;

// logs # of phones bought, total spent,and bank account balance.
function buyPhones() {
   
    let phonesPurchased = 0;
    let spentTotal = 0;
    let spendingThreshold = parseInt(prompt('Enter amount you are willing to spend on phones', '3000'));
    while(bankAccountBalance > fixedBank - spendingThreshold) {
        bankAccountBalance = bankAccountBalance - grandTotal;
        phonesPurchased++;
        spentTotal = spentTotal + grandTotal;
        }
    return `Phones Purchased: ${phonesPurchased} 
Total Spent: ${formatGrandTotal(spentTotal)} 
New Bank Account Balance: ${formatGrandTotal(bankAccountBalance)}`
    }

let receipt = buyPhones();

let container = document.getElementById('container');

container.append(receipt);







