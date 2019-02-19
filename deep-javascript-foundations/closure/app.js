// CLOSURE IS WHEN A FUNCTION 'REMEMBERS' IT'S LEXICAL SCOPE 
// EVEN WHEN THE FUNCTION IS EXECUTED OUTSIDE THAT LEXICAL SCOPE.

// function foo() {
//     let bar = 'bar';

//     function baz() {
//         console.log(bar);
//     }

//     bam(baz);
// }

// function bam(baz) {
//     baz();
// }

// foo(); // bar


// function foo() {
//     let bar = 'bar';

//     return function() {
//         console.log(bar);
//     };
// }

// function bam() {
//     foo()();  // gets function, then executes returned function.
// }

// bam(); // bar


// function foo() {
//     let bar = 'bar';

//     setTimeout(function() {
//         console.log(bar);
//     }, 1000);
// }

// foo();


// function foo() {
//     let bar = 0;

//     setTimeout(function() {
//         console.log(bar++);
//     }, 100);
//     setTimeout(function() {
//         console.log(bar++);
//     }, 200);
// }

// foo();


// function foo() {
//     let bar = 0;

//     setTimeout(function() {
//         let baz = 1;
//         console.log(bar++);

//         setTimeout(function() {
//             console.log(bar + baz);
//         }, 200);
//     }, 100);
// }

// foo();


// for (let i = 1; i <= 5; i++) {
//     setTimeout(function() {
//         console.log('i: ' + i);
//     }, i*1000);
// }


// MODULES // MODULE PATTERN

