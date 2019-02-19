// MODULE PATTERNS

// let foo = (function() {
//     let o = { bar: 'bar' };

//     return {
//         bar: function() {
//             console.log(o.bar);
//         }
//     };
// })();

// console.log(foo.bar());

// MODERN MODULE PATTERN

// define('foo', function() {
//     let o = { bar: 'bar' };

//     return {
//         bar: function() {
//             console.log(o.bar);
//         }
//     };
// });


// let o = { bar: 'bar' };

// export function bar() {
//     return o.bar;
// };

// import { bar } from 'foo.js';

// console.log(bar());

// import * as foo from 'foo.js';

// console.log(foo.bar());

// MODULES ARE FILE BASED
// MODULES ARE BY DEFAULT SINGLETONS

// CLOSURE: A FUNCTION RETURNS A FUNCTION THAT CAN ACCESS VARIABLES
// WHEN RUNNING IN A DIFFERENT SCOPE.

// THE SCOPE STAYS AROUND UNTIL THERE ARE NO REFERENCES LEFT TO THE CLOSURE.

// MODULE PATTERN
// 1. OUTER ENCLOSING FUNCTION THAT RUNS AT LEAST ONCE.
// 2. AT LEAST ONE INTERNAL FUNCTION THAT RETURNS WITH 
// IT'S BACKPACK / CLOSURE.

// RESTRICTS ACCESS TO CERTAIN PARTS OF THE CODE VIA ENCAPSULATION.

