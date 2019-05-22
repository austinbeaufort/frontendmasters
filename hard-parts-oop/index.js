// Object Oriented Programming JavaScript


// const user1 = {
//     name: 'Phil',
//     score: 4,
//     increment: function() {
//         user1.score++;
//     }
// }

// user1.increment();
// console.log(user1.score);


// function userCreator(name, score) {
//     const newUser = {};
//     newUser.name = name;
//     newUser.score = score;
//     newUser.increment = function() {
//         newUser.score++;
//     };
//     return newUser;
// }

// const user1 = userCreator('Phil', 4);
// const user2 = userCreator('Julia', 5);

// user1.increment();
// user2.increment();

// console.log(user1.score, user2.score);


// Using the Prototype Chain

// function userCreator(name, score) {
//     const newUser = Object.create(userFunctionStore);
//     newUser.name = name;
//     newUser.score = score;
//     return newUser;
// }

// const userFunctionStore = {
//     increment: function() { this.score++; },
//     login: function() { console.log("you're logged in!"); }
// };

// const user1 = userCreator('Phil', 4);
// const user2 = userCreator('Julia', 5);

// user1.increment();
// user2.increment();
// console.log(user1);

// Using prototypical nature of JavaScript

// function UserCreator(name, score) {
//     this.name = name;
//     this.score = score;
// }

// UserCreator.prototype.increment = function() {
//     this.score++;
// };
// UserCreator.prototype.login = function() {
//     console.log('login');
// };

// const user1 = new UserCreator('Eva', 9);
// user1.increment();
// console.log(user1);


// Using Classes
// class UserCreator {
//     constructor(name, score) {
//         this.name = name;
//         this.score = score;
//     }
//     increment () {
//         this.score++;
//     }
//     login() {
//         console.log('login');
//     }
// }

// const user1 = new UserCreator('Eva', 9);

// user1.increment();
// console.log(user1.score);

// Objects and Prototypes
const obj = {
    num: 3
}

console.log(obj);