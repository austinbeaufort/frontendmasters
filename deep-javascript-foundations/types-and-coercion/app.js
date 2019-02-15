// TYPES
// TYPES
// TYPES

// PRIMITIVE TYPES
// NATIVES
// COERCION
// EQUALITY


// PRIMITIVE TYPES
// UNDEFINED
// STRING
// NUMBER
// BOOLEAN
// OBJECT
// NULL*
// FUNCTION*

// console.log(typeof foo); // undefined
// console.log(typeof 'foo'); // string
// console.log(typeof 123); // number
// console.log(typeof true); // boolean
// console.log(typeof { a: 1 }); // object
// console.log(typeof function() { console.log(e); }); // function
// console.log(typeof null); // object

// let foo; // foo gets declared.
// console.log(typeof foo); // foo has already been declared, but it is "undefined";

// let bar = typeof bar; // cannot access bar before initialization, error.
// bar;        
// console.log(typeof bar);

// console.log(typeof typeof 2); // "Number" // string


// SPECIAL VALUES

// NaN ('not a number')
// Infinity, -Infinity
// null
// undefined (void)
// +0, -0

// let a = 'a' / 2;

// console.log(a); // NaN
// console.log(typeof a); // number
// console.log(isNaN(a));  // true
// console.log(Number.isNaN('foo')); // false

// USE Number.isNaN() WHEN CHECKING FOR NaN.



// NEGATIVE ZERO

// let foo = 0 / -3;

// console.log(foo === -0); // true
// console.log(foo === 0); // true
// console.log(0 === -0); // true
// console.log((0/-3) === (0/3)); // true

// console.log(foo); // -0


//RELIABLE CHECK FOR NEGATIVE ZERO
// function isNeg0(x) {
//     return x === 0 && (1/x) === -Infinity;
// }

// console.log(isNeg0(0 / -3)); // true
// console.log(isNeg0(0 / 3)); // false



// OBJECT.IS()
// console.log(Object.is( 'foo', NaN )); // false
// console.log(Object.is( NaN, NaN )); // true

// console.log(Object.is( 0, -0 )); // false
// console.log(Object.is( -0, -0 )); // true


// QUIZ
// let baz = 2;
// console.log(typeof baz); // "number"

// let baz;
// console.log(typeof baz); // "undefined"

// baz = null;
// console.log(typeof baz); // "object"

// baz = 'baz' * 3; 
// console.log(baz); // NaN
// console.log(typeof baz); // 'number'

// baz = 1 / 0;
// console.log(baz); // Infinity
// console.log(typeof baz); // 'number'



// NATIVE FUNCTIONS

/*
String
Number
Boolean
Function
Object
Array
RegExp
Date
Error
*/


// QUIZ

// WHEN STRING IS CALLED WITH 'NEW' IN FRONT, CREATES AN OBJECT WRAPPER.
// WHEN STRING CALLED WITHOUT 'NEW', CREATES A STRING
// PUTTING NEW KEYWORD IN FRONT OF A NATIVE FUNCTION
// PRODUCES AN OBJECT


// let foo = new String('foo');
// console.log(foo); // {"foo"}
// console.log(typeof foo); // object
// console.log(foo instanceof String); // true
// console.log(foo instanceof string); // string is not defined

// foo = String('foo');
// console.log(typeof foo); // string

// foo = new Number(37);
// console.log(foo); // {37}
// console.log(typeof foo); // object


// USE LITERAL SYNTAX OVER CONSTRUCTOR FORM

// let foo = [1, 2, 3];

// let foo = { a:1, b:2, c:3 };


// REGEX

// let foo;

// foo = new RegExp("a*b", "g");

// foo = /a*b/g;

// foo = new Date();





// COERCION
// COERCION
// COERCION


// ABSTRACT OPERATIONS

// FALSY VALUES THAT WILL ALWAYS PRODUCE FALSE IF BOOLEAN() IS INVOKED:
// ""
// 0, +0, -0
// null
// undefined
// NaN
// false


// EXPLICIT COERCION

// EXPLICIT => IT'S OBVIOUS FROM THE CODE THAT YOU ARE DOING CONVERSION.

// STRINGS TO NUMBERS AND NUMBERS TO STRINGS

// let foo = '123';
// let baz = parseInt(foo, 10);
// console.log(baz); // parsed foo to create a number

// baz = Number(foo);
// console.log(baz); // number

// baz = +foo;
// console.log(baz); // number

// baz = 456;
// foo = baz.toString();
// console.log(foo); // string

// foo = String(baz);
// console.log(foo); // string


// JAVASCRIPT AUTOMATICALLY (IMPLICITLY) COERCES PRIMITIVES TO IT'S 
// OBJECT WRAPPER COUNTERPART SO WE CAN CALL METHODS ON IT.

// let foo = '123';
// let baz = Boolean(foo); 
// console.log(baz); // true

// baz = !!foo; // initially opposite of true if false, then negate the false back to true.
// console.log(baz); // true

// explicitly implicit!
//  baz = foo ? true : false;
//  console.log(baz); // true

 // CODE THAT YOU DO NOT UNDERSTAND, IS CODE THAT YOU CANNOT TRUST.


 
 // DATE TO NUMBER AND ~

//  let now = +new Date(); 

 // USE DATE.NOW() // NOT the above.

//  let foo = 'foo';

//  if (foo.indexOf('f') != -1) {
//     console.log('found it!');
//  }

// if (foo.includes('f')) {
//     console.log('yay i found it!');
// }


// BAD PARTS OF COERCION
/*
Number("") === 0
Number(false) === 0
Number(true) === 1
Number(null) === 0

String([]) === ""
String([null]) === ""
String([undefined]) === ""
*/



// IMPLICIT COERCION

