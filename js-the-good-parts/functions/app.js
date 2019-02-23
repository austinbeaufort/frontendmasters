// FUNCTIONS

// FUNCTION OBJECTS INHERIT FROM FUNCTION.PROTOTYPE

// VAR STATEMENT CREATES FUNCTION SCOPE

// FUNCTION EXPRESSION VS. FUNCTION STATEMENT

// BLOCK SCOPE VS. FUNCTION SCOPE

// DECLARE ALL VARIABLES AT THE TOP OF THE FUNCTION
// DECLARE ALL FUNCTIONS BEFORE YOU CALL THEM.

// DON'T MAKE FUNCTIONS IN A LOOP

// divs.forEach(function(div) {
//     div.onclick = function () {
//         alert(div.id);
//     };
// });

// EXTRA ARGUMENTS ARE IGNORED. 
// IF TOO FEW ARGUMENTS, PARAMETERS WITH NO VALUE ARE UNDEFINED.

// TWO PSEUDO PARAMETERS (ARGUMENTS, THIS)

// ARGUMENTS CONTAINS ALL OF THE ARGUMENTS FROM THE INVOCATION.

// ARGUMENTS ARRAY IS NOT AN ARRAY, IT IS AN ARRAY-LIKE OBJECT.

// SPREAD ANY AMOUNT OF ARGUMENTS INTO AN ARRAY.
// function sum(...arguments) {
//     var i;
//     let n = arguments.length;
//     var total = 0;

//     for (i = 0; i < n; i++) {
//         total += arguments[i];
//     }
//     return total;
// }

// console.log(sum(1, 2, 3, 4));


// 'THIS'

// WHEN A FUNCTION IS CALLED WITH THE 'NEW' KEYWORD OPERATOR,
// A NEW OBJECT IS CREATED AND ASSIGNED TO 'THIS'.

// IF THERE IS NOT AN EXPLICIT RETURN VALUE, THEN 'THIS' WILL BE RETURNED.

// A FUNCTION'S APPLY OR CALL METHOD ALLOWS FOR CALLLING THE,
// FUNCTION, EXPLICITLY SPECIFYING 'THISOBJECT'.


// RECURSION

// QUICKSORT
// 1. DIVIDE THE ARRAY INTO TWO GROUPS, LOW AND HIGH.
// 2. CALL QUICKSORT ON EACH GROUP CONTAINING MORE THAN ONE ELEMENT.




// CLOSURE

// THE CONTEXT OF AN INNER FUNCTION INCLUDES THE SCOPE OF THE OUTER FUNCTION

// AN INNER FUNCTION ENJOYS THAT CONTEXT EVEN AFTER THE PARENT FUNCTIONS HAVE RETURNED.

// FUNCTION SCOPE WORKS LIKE BLOCK SCOPE.

// let names = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

// let digit_name = function(n) {
//     return names[n];
// };

// console.log(digit_name(3));

// let digit_name = (function() {
//     let names = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

//     return function(n) {
//         return names[n];
//     };
// }());

// console.log(digit_name(3));



// PSEUDOCLASSICAL INHERITANCE

// MODULE PATTERN

// POWER CONSTRUCTORS
// 1. MAKE AN OBJECT.
// 2. DEFINE SOME VARIABLES AND FUNCTIONS
// 3. AUGMENT THE OBJECT WITH PRIVILEGED METHODS
// 4. RETURN THE OBJECT.

// STEP ONE

// ** IF POSSIBLE PASS OBJECT INTO THE CONSTRUCTOR INSTEAD OF ARGUMENTS.


// FUNCTIONAL INHERITANCE

// function constructor(spec) {
//     let that = otherMaker(spec);
//         member;
//         method = function() {
//             // spec, member, method
//         }
//     that.method = method;
//     return that;
// }