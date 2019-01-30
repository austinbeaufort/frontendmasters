// const weapons = ['candlestick', 'lead pipe', 'revolver'];

// const makeBroken = function(item) {
//     return `broken ${item}`;
// };

// EXERCISE 1

// let brokenWeapons = weapons.map(weapon => {
//     return `broken ${weapon}`;
// });

// let brokenWeapons = weapons.map(function(weapon) {
//     return `broken ${weapon}`;
// })

// let brokenWeapons = _.map(weapons, function(weapon) {
//     return `broken ${weapon}`;
// })

// let brokenWeapons = _.map(weapons, makeBroken);

// .map already knows 'makeBroken' will take in an item. 
// let brokenWeapons = weapons.map(makeBroken);

// console.log(brokenWeapons);

// function CreateSuspectObjects(name) {
//     return {
//         name: name,
//         color: name.split(' ')[1],
//         speak() {console.log(`my name is ${this.name}`);}
//     };
// };

// let suspects = ['miss scarlet', 'colonel mustard', 'Mr. White'];

// let suspectsList = _.map(suspects, function(name) {
//     return CreateSuspectObjects(name);
// });

// console.log(suspectsList);

// _.each(suspectsList, function(suspect) {
//     suspect.speak()
// });

