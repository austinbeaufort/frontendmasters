// let nameImprover = (name, adj) => {
//     return `Captain ${name} the ${adj} sailor..`;
// };

// console.log( nameImprover('Peter', 'seasick') );


// const videoData = [
//     {
//         name: 'Miss Scarlet',
//         present: true,
//         rooms: [
//             {kitchen: false},
//             {ballroom: false},
//             {conservatory: false},
//             {'dining room': false},
//             {'billiard room': false},
//             {library: false}
//         ]
//     },
//     {
//         name: 'Mrs. White',
//         present: false,
//         rooms: [
//             {kitchen: false},
//             {ballroom: false},
//             {conservatory: false},
//             {'dining room': false},
//             {'billiard room': false},
//             {library: false}
//         ]
//     },
//     {
//         name: 'Reverend Green',
//         present: true,
//         rooms: [
//             {kitchen: false},
//             {ballroom: false},
//             {conservatory: false},
//             {'dining room': false},
//             {'billiard room': false},
//             {library: false}
//         ]
//     },
//     {
//         name: 'Rusty',
//         present: false,
//         rooms: [
//             {kitchen: false},
//             {ballroom: false},
//             {conservatory: false},
//             {'dining room': false},
//             {'billiard room': false},
//             {library: false}
//         ]
//     },
//     {
//         name: 'Colonel Mustard',
//         present: true,
//         rooms: [
//             {kitchen: false},
//             {ballroom: false},
//             {conservatory: false},
//             {'dining room': false},
//             {'billiard room': false},
//             {library: false}
//         ]
//     },
//     {
//         name: 'Professor Plum',
//         present: true,
//         rooms: [
//             {kitchen: false},
//             {ballroom: false},
//             {conservatory: false},
//             {'dining room': false},
//             {'billiard room': false},
//             {library: false}
//         ]
//     }
// ];


// let suspects = videoData.filter(function(obj) {
//                     return obj.present;
//                 });

// console.log(suspects);

// let suspectNames = suspects.map(function(obj) {
//     return obj.name;
// })

// console.log(suspectNames);


// SPREAD PARAMETER
// const createTuple = (a, b, c, ...d) => {
//     return [[a, c], [b, d]];
// }

// console.log( createTuple('it', 'be', 'could', 'anyone', 'no one') );


// ARGUMENTS KEYWORD

// const createTuple = function(a, b, c, ...d) {
//     console.log(arguments); // []; // logs all arguments.
//     return[ [a, c], [ b, d] ];
// }

// console.log( createTuple('it', 'be', 'could', 'anyone', 'no one') );


// DEFAULT PARAMETERS

// const add = function(a, b = 2) {
//     console.log(arguments); // logs [3] // only gives back the arguments.
//     return a + b;
// };

// 3 is the arg for 'a', b is not given an arg so is set to default '2'.
// console.log( add(3) ); // 5?! 
// console.log( add(11, 22) ); // 33, default not used.
// console.log( add(6) );  // 8


// ES5 VERSION BEFORE DEFAULT PARAMETERS
// const add = function(a, b) {
//     console.log(arguments);
//     if (b === undefined) {
//         b = 2;
//         return a + b;
//     }
//     return a + b;
// }

// console.log( add(3) );
// console.log( add(7) );



// const constructArr = function() {
//     const arr = Array.prototype.slice.call(arguments);
//     arr.push('the billiards room?');
//     return arr.join(' ');
// };

// console.log( constructArr('was', 'it', 'in') );


// ES6, USE THIS WAY

// const constructArr = function() {
//     const arr = Array.from(arguments);
//     arr.push('the billiards room?');
//     return arr.join(' ');
// };

// console.log( constructArr('was', 'it', 'in') );


// const from = arr => {
//     return Array.prototype.slice.call(arr);
// }

// myString1 = 'i am a cat';
// myString2 = 'dog';

// console.log( from(myString1, myString2) );