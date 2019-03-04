// DEFAULT VALUES

// function foo(x) {
//     x = x || 42;
// }

// function foo(x = 42) {

// }


// LAZY EXPRESSIONS

// function bar() {
//     console.log('!');
// }

// function foo(x = bar()) {

// }

// console.log(foo()); // !
// console.log(foo()); // !
// console.log(foo()); // !



// function foo(x = 2, f = function() { return x; }) {
//     var x = 5;
//     console.log( f() );
// }

// foo();


// GATHER AND SPREAD OPERATORS

// function foo() {
//     let args = [].slice.call( arguments );
//     bar.apply( null, args );
// }


// REST (GATHER) OPERATOR
// gathering the arguments into a single array.
// function foo( ...args ) {
//     bar( 42, ... args );
// }

// USE ABSTRACTION AND DECLARATIVE STYLE TO COMMUNICATE MORE CLEARLY.


// let x = [1, 2, 3];
// let y = [4, 5];
// let z = [0].concat(x, y, [6]); // concatenates array

let x = [1, 2, 3];
let y = [4, 5];
let z = [0, ...x, ...y, 6];

function foo(x, y, ...rest)