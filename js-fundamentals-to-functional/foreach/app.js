// function CreateSuspectObjects(name) {
//     return {
//         name: name,
//         color: name.split(' ')[2], // turns name into an array
//                                   // takes 2nd / last array item as color.
//         speak() {
//             console.log('my name is ', name);
//         }
//     };
// };

// let suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

//assigns person to the new object.
// let person1 = CreateSuspectObjects('Miss Scarlet');
// console.log(person1);
// uses the speak method in the object.
// person1.speak(); 

// let suspectsList = [];

// suspects.forEach(function(suspect) {
//     suspectsList.push(CreateSuspectObjects(suspect));
// });

// UNDERSCORE.JS
// _.each(suspects, function(name) {
//     suspectsList.push(CreateSuspectObjects(name));
// });

// console.log(suspectsList);


// let rooms = ['observatory', 'ballroom', 'library'];
// let logger = function(val) {
//     console.log(val);
// };

// _.each(rooms, logger);


// EXERCISES

// function CreateSuspectObjects(name) {
//     return {
//         name: name,
//         color: name.split(' ')[2], // turns name into an array
//                                   // takes 2nd / last array item as color.
//         speak() {
//             console.log('my name is ', name);
//         }
//     };
// };

// let suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

// let suspectsList = [];

// _.each(suspects, function(name) {
//     suspectsList.push(CreateSuspectObjects(name));
// });

// console.log(suspectsList);

// const _ = {};

// _.each = function(list, callback) {
//     if (Array.isArray(list)) { // true
        
//         for (let i = 0; i < list.length; i++) {
//             callback(list[i], i, list); // (value, index, list)
//         }

//     } else {

//         for (let key in list) {
//             callback(list[key], key, list);
//         }

//     }
// }

// _.each(['sally', 'georgie', 'porgie'], function(name, i, list) {
//     if (list[i + 1]) {
//         console.log(name, ' is younger than ', list[i + 1]);
//     } else {
//         console.log(name, ' is the oldest');
//     }
// })

// console.log(_.map([1, 2, 3]), function(v, i, list) {console.log(v)});