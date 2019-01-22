// const monthlyRent = 500;

// const yearlyRent = monthlyRent * 12;

// console.log(yearlyRent) // 6000

// const firstName = 'Brian';
// const lastName = 'Holt';

// const sentenceWithTemplate = `Hello ${firstName} ${lastName}! How are you?`;

// console.log(sentenceWithTemplate);


// CONTROL FLOW

// const skyIsBlue = true;

// if (skyIsBlue) {
//     console.log('the sky is blue');
// } else {
//     console.log('the sky is not blue..');
// }

// const temperatureToday = 86;

// if (temperatureToday >= 80) {
//     console.log("it's too hot");
// } else {
//     console.log("It's fine..maybe");
// }


// const friendsAtYourParty = 10;

// if (friendsAtYourParty === 0) {
//     console.log('cool, i have more nachos to myself');
// } else if (friendsAtYourParty <= 4) {
//     console.log('play mario cart');
// } else {
//     console.log('turn on the dance music!');
// }


// LOOPS

// let friendsAtYourParty = 0;

// while (friendsAtYourParty < 10) {
//     friendsAtYourParty = friendsAtYourParty +1;
// }

// console.log(friendsAtYourParty);


// let friendsAtYourParty = 0;
// for (let i = 0; i < 10; i++) {
//     friendsAtYourParty++;
// }

// console.log(friendsAtYourParty);



// EXERCISE 1

// const cartoon = 'bugs bunny';
// const timesToRepeat = 22;

// for (let i = 0; i < timesToRepeat; i++) {
//     console.log(cartoon);
// }


// const cartoon = 'bugsBunny ';
// const timesToRepeat = 22;
// let answer = '';

// for (let i = 0; i < timesToRepeat; i++) {
//     answer += cartoon;  // adds the variable cartoon to the empty string. 'bugsBunny' gets 
//                         // added to the string 22 times.
// }

// console.log(answer);


// FUNCTIONS AND SCOPE

// function addTwo(number) {  // number is the parameter.
//     return number + 2; 
// }

// const finalAnswer = addTwo(5); // puts 5 as argument into the addTwo function, the function returns 
//                                 // the number 7 and stores it in the variable finalAnswer.
// console.log(finalAnswer);
// console.log(addTwo(100)); // 102


// function greet(firstName, lastName, honorific, greeting) {
//     return `${greeting} ${honorific} ${lastName}! I'm extremely pleased you could join us,
//     ${firstName}! I hope you enjoy your stay, ${honorific} ${lastName}.`;
// }

// console.log(greet('brian', 'holt', 'lord', 'salutations'));
// console.log(greet('jack', 'sparrow', 'captain', 'a-hoy'));


// const myHomeCity = 'fayetteville';
// const myHomeState = 'pennsylvania';
// const myHomeCountry = 'USA';

// function logOutYourHome(city, state, country) {
//     console.log(`You are from ${city}, ${state} ${country}.`);
// }


// logOutYourHome(myHomeCity, myHomeState, myHomeCountry);


// function addFive(number) {
//     const someVariable = "you can't see me outside the function";
//     return number + 5;
// }

// console.log(addFive(10));
// console.log(someVariable); // undefined. scoping issue.


// let friendsAtYourParty = 0;
// for (let i = 0; i < 10; i++) {
//     friendsAtYourParty++;
// }

// console.log(i); // undefined.


// BUILTINS

// string functions
// .toLowerCase();
// .toUpperCase();

// const name = 'brian holt';
// console.log(name.substr(6, 3)); // hol
// // name.substr(indexToStart, How many letters?);



// OBJECTS AND ARRAYS

// const person = {
//     name: 'brian holt',
//     city: 'seattle',
//     state: 'WA',
//     favoriteFood: 'taco',
//     wantsTacosRightNow: true,
//     numberOfTacosWanted: 100
// };

// console.log(person);
// console.log(person.name); // 'brian holt'
// console.log(person["name"]); //same as above.



// const person1 = {
//     name: 'brian',
//     ageRange: '25-35'
// };

// const person2 = {
//     name: 'jack',
//     ageRange: '65-75'
// };

// function suggestMusic(person) {
//     if (person.ageRange === "25-35") {
//         console.log('We think you\'ll like daft punk you are a crazy millenial.');
//     } else if (person.ageRange === "65-75") {
//         console.log('you\'re obviously going to like johnny cash. he walks the line.');
//     } else {
//         console.log('uh, maybe try david bowie? everyone like bowie right?');
//     }
// }

// suggestMusic(person1);
// suggestMusic(person2);


// OBJECTS CAN HAVE FUNCTIONS, AKA METHODS
// const dog = {
//     name: 'dog',
//     speak() {
//         console.log('woof woof');
//     }
// };

// dog.speak(); // woof woof


// const me = {
//     name: {
//         first: 'austin',
//         last: 'beaufort'
//     },
//     location: {
//         streetNumber: 8235,
//         street: 'michaux drive',
//         city: 'fayetteville',
//         state: 'PA',
//         zipCode: 17222,
//         country: 'USA'
//     },
//     getAddress() {
//         return `${this.name.first} ${this.name.last}
// ${this.location.streetNumber} ${this.location.street}
// ${this.location.city}, ${this.location.state} ${this.location.zipCode}
// ${this.location.country}`;
//     }
// };

// console.log(me.getAddress());

// THIS
// console.log(this === window) // true
// console.log(this.scrollY); // 0 // scroll position
// console.log(window.scrollY);