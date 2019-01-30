// LIST TRANSFORMATIONS AND NESTED DATA STRUCTURES

// const game = {};

// game['suspects'] = [];
// console.log(game.suspects);

// const game = {
//     suspects: []
// };
// console.log(game.suspects);



// const game = {};

// game['suspects'] = [];

// game.suspects.push( {
//     name: 'Rusty',
//     color: 'orange'
// });

// // console.log(game.suspects);

// game.suspects[1] = {
//     name: 'Miss Scarlet',
//     color: 'red'
// };


// EXERCISES

// console.log(game.suspects);
// console.log(game['suspects']); // MUST USE THE QUOTES IN BRACKETS.

// for (let suspect of game.suspects) {
//     console.log(`The suspect is ${suspect.name} and the
//     color is ${suspect.color}!`);
// };

// game.suspects.forEach(function(suspect) {
//     console.log(`The suspect is ${suspect.name} and the
//     color is ${suspect.color}!`);
// });

// function logSuspects() {
//     for (let i = 0; i < game.suspects.length; i++) {
//         console.log(game.suspects[i].name, game.suspects[i].color);
//     }
// }

// logSuspects();



// const game = {};

// game['suspects'] = [];

// game.suspects.push( {
//     name: 'Rusty',
//     color: 'orange'
// });

// // console.log(game.suspects);

// game.suspects[1] = {
//     name: 'Miss Scarlet',
//     color: 'red'
// };


// // EXERCISE
// for (let suspect of game.suspects) {

//     for (let identifier of Object.entries(suspect)) {
//         console.log(identifier);
        
//         if (identifier.includes("Miss Scarlet")) {
//             console.log('GUILTY!');
//         }

//     }
// }

// let suspects = [
//     {
//         name: 'rusty',
//         color: 'orange'
//     }, {
//         name: 'miss scarlet',
//         color: 'red'
//     }
// ];


// let {name, color} = suspects[0];
// // need to destructure into an object, need object {} brackets.

// console.log(name);
// console.log(color);


// let suspects = [
//         {
//             name: 'rusty',
//             color: 'orange'
//         }, {
//             name: 'miss scarlet',
//             color: 'red'
//         }
//     ];

    //DESTRUCTURING

// for (let values in suspects) {
//     let {color} = suspects[values];
//     console.log(color);
// }

// let [color, color2] = [suspects[0].color, suspects[1].color];

// console.log(color, color2);

let [{color: firstColor}, {color: secondColor}] = suspects;

console.log(firstColor, secondColor);