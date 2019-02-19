"use strict";

// SCOPE AND CLOSURES

// FUNCTION SCOPING

// COMPILING FUNCTION SCOPE

// let foo = 'bar';

// function bar() {
//     let foo = 'baz';
// }

// function baz(foo) {
//     foo = 'bam';
//     bam = 'yay'; // NOT A FORMAL DECLARATION OF 'BAM'
// }

// let foo = 'bar';

// function bar() {
//     let foo = 'baz';

//     function baz(foo) {
//         foo = 'bam';
//         bam = 'yay';
//     }
//     baz();
// }

// console.log(bar());
// console.log(foo); // bar
// console.log(bam); // undefined
// console.log(baz()); // undeclared


// assigning function name with function expression.
// let keyHandler = function keyHandler() {

// }

// 1. handy function self-reference
// 2. more debuggable stack traces
// 3. more self-documenting code


// LEXICAL SCOPE

// FUNCTION SCOPING

// FUNCTIONS CAN BE USED TO CREATE SCOPE

// IIFE'S

// let foo = 'foo';

// ( function bob() {
//     let foo = 'foo2';
//     console.log(foo);
// } )();

// console.log(foo);

// let foo = 'foo';

// (function IIFE(bar) {
//     let foo = 'foo2';
//     console.log(foo); // foo2
//     console.log(bar); // bar, bar was not reassigned.
// })(foo);


// for (let i = 0; i < 5; i++) {
//     (function IIFE() {
//         let j = i;
//         console.log(j);
//     })();
// }


// BLOCK SCOPING

// function formatStr(str) {
//     { let prefix, rest;
//         prefix = str.slice(0, 3);
//         rest = str.slice(3);
//         str = prefix.toUpperCase() + rest;
//     }

//     if(/^FOO:/.test(str)) {
//         return str;
//     }

//     return str.slice(4);
// }


// function repeat(fn, n) {
//     var result;

//     for(let i = 0; i < n; i++) {
//         result = fn( result, i );
//     }

//     return result;
// }

// KEEP VARIABLES WITHIN VIEW

// let a = 2;
// console.log(a++); // 3

// const b = 2;
// console.log(b++); // error

// const c = [2];
// console.log(c[0]++); // 3

// HOISTING

// console.log(a); // undefined
// console.log(b); // undefined
// var a = b;
// var b = 2;
// console.log(b); // 2
// console.log(a); // undefined


// var a = b();
// var c = d();

// console.log(a);
// console.log(c);

// function b() {
//     return c;
// }

// var d = function() {
//     return b;
// };