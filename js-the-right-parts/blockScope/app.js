// BLOCK SCOPING

// function foo(x, y) {

//     let z = bar( x * 2 );

//     if (x > y) {
//         let tmp = x;
//         x = y;
//         y = tmp;
//     }

//     for (let i = 0; i < 10; i++) {
    
//     }
// }

// LET KEYWORD ENFORCES WHAT WE ALREADY STYLISTICALLY,
// WERE SIGNALING.

// USE VAR WHEN INTENDING TO USE IT ACROSS MANY SCOPES.

// MAKE FIRST USAGE OF A VARIABLE AS CLOSE AS POSSIBLE,
// TO THE DECLARATION.

// function foo(x, y) {

    // for (let i = 0; i < 10; i++) {
    //     $('#btn' + i).click(function() {
    //         console.log(' button ' + i + ' clicked!');
    //     });
    // }

//     if (x > y) {
//         { let x = 2;

//         }
//     }
// }



// CONST => A VARIABLE THAT CANNOT BE REASSIGNED

// const y = [0, 1, 2];
// y = 2; // error
// y[0] = 42; // works

// const x = Object.freeze([1, 2, 3]); // Shows to other developer,
// that the object / array and it's contents will not change.

