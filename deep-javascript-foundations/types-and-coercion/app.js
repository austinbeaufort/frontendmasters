// TYPES, COERCION

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
function isNeg0(x) {
    return x === 0 && (1/x) === -Infinity;
}

console.log(isNeg0(0 / -3)); // true
console.log(isNeg0(0 / 3)); // false

