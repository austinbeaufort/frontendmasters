'use strict';

function foo() {
    return [1, 2, 3];
}

// ES5

// let tmp = foo();
// let a = tmp[0];
// let b = tmp[1];
// let c = tmp[2];

// console.log(a, b, c); // 1 2 3




// ES6

// let [a, b, c] = foo();

// console.log(a, b, c);

// let [
//     a,
//     b,
//     c
// ] = foo();

// function foo() {
//     return [1,,3];
// }

// let [
//     a,
//     b = 42, // default value for 'b'.
//     c
//     ...args
// ] = foo() || [];

// console.log(a, b, c);


// ADDING VALUES TO OBJECT THROUGH GATHERING
// let o = {};

// [
//     o.a,
//     o.b = 42,
//     o.c
// ] = foo();

// console.log(o.a, o.b, o.c);


// variable changing
// let x = 10, y = 20;

// [x, y] = [y, x];

// console.log(x, y); // 20, 10


// let a = [1, 2, 3];

// [x, y, ...a] = [0, ...a, 4];

// function foo() {
//     return [1, 2, 3, [4, 5, 6] ];
// }

// let [
//         ,,, 
//         [c, d] 
//     ] =

// [a, b ...args] = foo();



// let x = [a, b] = foo();
// console.log(x) // [1, 2, 3[4, 5, 6]];

// let a, b, c, args, d, e;

// [
//     a,
//     b = 42,
//     c,
//     [
//         d,
//         ,
//         e
//     ]
// ] = foo() || [];

// console.log(a, b, c, d, e); // 1, 2, 3, 4, 6

// OBJECT DESTRUCTURING

// function foo() {
//     return { a:1, b:2, c:3,
//         d: {
//             e: 4
//         } 
//     };
// }

// let {
//     a = 10,
//     b: X = 42,
//     c,
//     d: {
//         e
//     } = {} // <--- Default empty object value
// } = foo();

// console.log(a, X, c);

// let {
//     a: a,
//     b: b,
//     c: c
// } = foo();

// console.log(a, b, c); // 1, 2, 3


// function foo( [a, b, c] = [] ) {
//     console.log(a, b, c);
// }

// foo(1, 2, 3); // undefined
// foo( [1, 2, 3] ); // 1, 2, 3

// MIXING 2 OBJECTS TOGETHER

// let defaults = {
//     method: 'POST',
//     callback: function() {}
//     headers: {
//         "content-type": "text/plain"
//     }
// };

// let config = {
//     url: "http://some.url",
//     callback: foo,
//     headers: {
//         "x-requested-with": "foo"
//     }
// };

// {
//     let {
//         methods = defaults.method,
//         url,
//         callback = defaults.callback,
//         headers: {
//             "content-type": contentType = defaults.headers["content-type"],
//             "x-requested-with": xRequestedWith
//         }
//     } = config;

//     config = {
//         method,
//         url,
//         callback,
//         headers: {
//             "content-type": contentType,
//             "x-requested-with": xRequestedWith
//         }
//     };
// }

