// const ifElse = (condition, isTrue, isFalse) => {
//     return condition ? isTrue() : isFalse();
// };

// ifElse(true,
//     () => { console.log(true); } ,
//     () => { console.log(false); }
// ); 

// const ifElse = (condition, isTrue, isFalse) => {
//     return condition ? isTrue() : isFalse();
// };

// const logTrue = () => {console.log(true);};
// const logFalse = () => {console.log(false);};

// ifElse(true, logTrue, logFalse);


// let increment = function(n) { return n + 1; };

// let square = function(n) { return n * n; };

// let doMathSoIDontHaveTo = function(n, func) { return func(n); };

// console.log( doMathSoIDontHaveTo(5, square) );

// console.log( doMathSoIDontHaveTo(4, increment) );

// let increment = (n) => n + 1;
// let square = (n) => n * n;
// let doMathSoIDontHaveTo = (n, func) => func(n);

// console.log( doMathSoIDontHaveTo(5, square) );

// console.log( doMathSoIDontHaveTo(4, increment) );


// PASSING ARGUMENTS
// const ifElse = (condition, isTrue, isFalse, p) => {
//     return condition ? isTrue(p) : isFalse(p);
// };

// ifElse(true, fn1, fn2, 'HI');


// ES6
// const ifElse = (condition, isTrue, isFalse, ...args) => {
//     console.log(...args);
//     return condition ? isTrue(...args) : isFalse(...args);
// };

// ifElse(true, fn1, fn2, 'HI', 'BYE', 'HOLA');


// let reduce = function(list, callback, initial) {
//     let accumulator = initial;
//     for (let i = 0; i < list.length; i++) {
//         if (i === 0 && accumulator === undefined) {
//             accumulator = list[0]
//         } else {
//             accumulator = callback(list[i], accumulator);
//         }
//     }

//     return accumulator;
// }

// console.log( reduce([1, 2, 3], (v, sum) => v + sum, 0) );


// const newDevelopment = [
//     {
//         name: 'Miss Scarlet',
//         present: true,
//         rooms: [
//             {kitchen: false},
//             {ballroom: false},
//             {conservatory: true},
//             {'dining room': true},
//             {'billiard room': false},
//             {library: true}
//         ]
//     },
//     {
//         name: 'Reverend Green',
//         present: true,
//         rooms: [
//             {kitchen: true},
//             {ballroom: false},
//             {conservatory: false},
//             {'dining room': false},
//             {'billiard room': true},
//             {library: false}
//         ]
//     },
//     {
//         name: 'Colonel Mustard',
//         present: true,
//         rooms: [
//             {kitchen: false},
//             {ballroom: false},
//             {conservatory: true},
//             {'dining room': false},
//             {'billiard room': true},
//             {library: false}
//         ]
//     },
//     {
//         name: 'Professor Plum',
//         present: true,
//         rooms: [
//             {kitchen: true},
//             {ballroom: false},
//             {conservatory: false},
//             {'dining room': true},
//             {'billiard room': false},
//             {library: false}
//         ]
//     }
// ];

// const notInRoom = (suspect, memo) => {
//     const emptyRooms = reduce(suspect.rooms, (room, memo, []) => {
//         if (room === false) memo.push(room);
//         return memo
//     }, [])

//     return emptyRooms;
// };

// notInRooms = _.map(newDevelopment, notInRoom)


// CURRYING

// let abc = function(a, b, c) {
//     return [a, b, c];
// };

// let curried = _.curry(abc);

// curried(1)(2)(3);


// COMPOSIING

