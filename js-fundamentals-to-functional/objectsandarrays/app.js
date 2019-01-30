// OBJECTS
// let person = {};

// person.name = 'Mrs. White';

// console.log(person);
// console.log(person.name);

// let who = person.name;

// console.log(who);

// person.name = "Mr. White";
// console.log(person.name); // mr white // reassigned.
// console.log(who); // mrs. white // 'who' was stored in memory and did not change.


// ARRAYS   
// let person = [];

// // ARRAYS ARE OBJECTS
// // RULES ARE SAME AS OBJECTS
// person.name = "Mrs. White";

// let who = person.name;

// console.log(who);

// ARRAYS ARE OBJECTS
// ARRAYS ARE OBJECTS WITH EXTRA METHODS
// console.log( typeof person === 'array' ); // false
// console.log( typeof person === 'object' ); // true


// BRACKET NOTATION
// use brackets when value is not supposed to be a string literal.

// let person = [];
// let plea = 'wouldShe'

// person.name = 'Mrs. White';

// person[plea] = "I would never!"; // 'wouldShe' is the property name, not plea.

// console.log(person[plea]); // i would never.

// console.log(person);


// NON-VALID CHARACTERS


// characters
// weapons
// rooms

// confidential card
   // murderer
   // room 
   // weapon



   // clue as an object, my solution.

// clue = {
//     confidentialCard: {
//         weapon: 'knife',
//         room: 'kitchen',
//         murderer: 'Professor Plum'
//     },
//     characters: ['Mrs. White', 'Mrs. Peacock', 'Professor Plum',
// 'Mr. Green', 'Miss Scarlet', 'Colonel Mustard'],

//     weapons: ['Candlestick', 'Wrench', 'Rope', 'Lead Pipe', 
// 'Knife', 'Revolover'],

//     rooms: ['Kitchen', 'Ballroom', 'Conservatory', 'Dining Room',
// 'Billiard Room', 'Library', 'Lounge', 'Study', 'Hall']
// };


    // clue as an object, instructor's solution

// clue = {};

// clue.murderer = "??";

// clue['weapons'] =  [
//     {type: 'Candlestick', location: 'Kitchen'},
//     {type: 'Wrench', location: 'Ballroom'},
//     {type: 'Rope', location: 'Conservatory'},
//     {type: 'Lead Pipe', location: 'Dining Room'},
//     {type: 'Knife', location: 'Billiard Room'},
//     {type: 'Revolver', location: 'Lounge'},
//     ];

// clue.name = [];
// clue.name[0] = 'Mrs. White';
// clue.name.push('Mrs. Peacock');
// clue.name.push('Professor Plum');
// clue.name.push('Mr. Green');
// clue.name.push('Miss Scarlet');
// clue.name.push('Colonel Mustard');


// console.log(clue.weapons);
// console.log(clue.name);



// DESTRUCTURING

// ASSIGNING OBJECT AND ARRAY ITEMS TO VARIABLES TO USE 
// OUTSIDE OF THE ARRAY.

// let obj = {first: 'Dan', last: 'Coelho'};

// long way.
// let first = obj.first;
// let last = obj.last;


// ES6
// let myArr = ['cat', 'dog'];

// let [meow, woof] = ['cat', 'dog'];

// console.log(meow); // cat
// console.log(woof); // dog


// NEW VARIABLES **MUST MATCH** OBJECT PROPERTIES WHEN DESTRUCTURING
// OBJECTS AND THEIR PROPERTIES.

// let obj = {first: 'Dan', last: 'Coelho'};

// let {first, last} = {first: 'Dan', last: 'Coelho'};

// console.log(`Hi my name is ${first} ${last}!`);


// let myPets = ['cat', 'dog', 'bird', 'fish'];

// let [pet1, pet2, pet3, pet4] = myPets;

// console.log(pet1);
// console.log(pet3);



// let myObj = {
//     firstName: 'john',
//     lastName: 'smith',
//     age: 42,
//     isAdmin: false
// };

// let {firstName, lastName, age, isAdmin} = myObj;

// console.log(age);
// console.log(firstName);
// console.log(isAdmin);



// EXERCISE
// let character = {
//     name: 'Rusty',
//     room: 'kitchen',
//     weapon: 'candlestick'
// };

// let {room, weapon} = character;

// console.log(`The ${weapon} is in the ${room}!`);


// SWAPPING VARIABLES
// let a = 1, b = 2;

// [b, a] = [a, b];

// console.log(a, b); // 2, 1. a is now 2, b is now 1.


// DEEP ARRAYS **DON'T USE THESE, NOT READABLE OR STRAIGHTFORWARD**

// let [a, [b, [c, d]]] = [1, [2, [[[3, 4], 5], 6]]];

// console.log('a:', a, 'b:', b, 'c:', c, 'd:', d);

// a: 1 b: 2 c: [ [ 3, 4, ], 5] d: 6


// GET A VALUE FROM A PROPERTY

// let {user: x} = {user: 5};
// console.log(x); // 5