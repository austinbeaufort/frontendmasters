
// CONCISE METHODS

// let a = 1;

// let c = "hello";

// let obj = {
//     a,
//     b() {},
//     [c]: 42
// };


// TEMPLATE LITERALS

// let name = "Kyle";
// let orderNumber = '123';
// let total = 319.7;

// let msg = `Hello, ${name}, your 
// order #${orderNumber} was $${total}.`;
// console.log(msg);

// WE CAN ESCAPE A MULTILINE TEMPLATE LITERAL WITH "\". CAN POSSIBLY
// MAKE CODE MORE READABLE ON SMALLER SCREENS.


// TAG FUNCTIONS

function foo(strings, ...values) {
    let str = '';
    for (let i = 0; i < strings.length; i++) {
        if (i > 0) {
            if(typeof values[i - 1] == 'number') {
                str += values[i - 1].toFixed(2);
            } else {
                str += values[i - 1];
            }
        }
         str += values[i - 1];
        str += strings[i];
    }
    return str;
}

let name = "Kyle";
let orderNumber = '123';
let total = 319.7;

let msg = foo`Hello, ${name}, your 
order #${orderNumber} was $${total}.`;
console.log(msg);