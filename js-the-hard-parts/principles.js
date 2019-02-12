// const num = 3;
// function multiplyBy2(inputNumber) {
//     const result = inputNumber * 2;
//     return result;
// }

// console.log(multiplyBy2);
// const output = multiplyBy2(4); // stores result in output
// const newOutput = multiplyBy2(10); // stores result in newOutput

// const name = 'Will';



// FUNCTIONAL PROGRAMMING

// FUNCTIONS ARE FIRST CLASS CITIZENS
// VARIABLES CANNOT BE CHANGED // IMMUTABILITY

// PURE FUNCTION (NO SIDE EFFECTS)
// HIGHER ORDER FUNCTIONS.

// function tenSquared() {
//     return 10 * 10;
// }

// console.log(tenSquared());


// CAN GENERALIZE THE SQUARE A NUMBER FUNCTION
// function squareNum(num) {
//     return num * num;
// }

// console.log(squareNum(10));
// console.log(squareNum(9));

// function copyArrayAndMultiplyBy2(array) {
//     let output = [];
//     for(let i = 0; i < array.length; i++) {
//         output.push(array[i] * 2);
//     }
//     return output;
// }

// const myArray = [1, 2, 3];
// let result = copyArrayAndMultiplyBy2(myArray);
// console.log(result);




// function copyArrayandDivideBy2(array) {
//     let output = [];
//     for(let i = 0; i < array.length; i++) {
//         output.push(array[i] / 2);
//     }
//     return output;
// }

// const myArray = [1, 2, 3];
// let result = copyArrayandDivideBy2(myArray);
// console.log(result);






// CLOSURE AND FUNCTIONAL PROGRAMMING

// function copyArrayAndManipulate(array, instructions) {
//     let output = [];
//     for(let i = 0; i < array.length; i++) {
//         output.push(instructions(array[i]));
//     }
//     return output;
// }

// function multiplyBy2(input) {
//     return input * 2;
// }

// let result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);

// console.log(result);


// DECONSTRUCTING EXAMPLE
// function instructionGenerator() {
//     function multiplyBy2(num) {
//         return num * 2;
//     }
//     return multiplyBy2;
// }

// let generatedFunc = instructionGenerator();

// let result = generatedFunc(4);

// console.log(result); // 8



// CALLING A FUNCTION IN THE SAME SCOPE AS IT WAS DEFINED   

// function outer() {
//     let counter = 0;
//     function incrementCounter() {
//         counter++;
//     }
//     incrementCounter();
// }

// console.log(outer()); // undefined, but counter is at 1.



// function outer() {
//     let counter = 0;
//     function incrementCounter() {
//         counter++;
//     }
//     return incrementCounter;
// }

// let myNewFunction = outer();

// console.log(myNewFunction);








// ASYNCHRONOUS JS 

// function printHello() {
//     console.log('Hello');
// }

// setTimeout(printHello, 0);

// console.log('Me First!');


// let counter = 0;

// function hello() {
//     console.log('Interval Hello!');
//     counter++;
//     if (counter === 5) {
//         clearInterval(runHello);
//     }    
//   }

// runHello = setInterval(hello, 2000);



//   function clearAllIntervals() {
//     for (let i = 0; i < 1000; i++) {
//       clearInterval(i);
//     }
//   }


// function sayHowdy() {
//     console.log('Howwwwwdy!');
// }

// function everyXsecsForYsecs(func, seconds, totalTime) {
//     let timer = 0;
//     setInterval(function() {
//         timer++;
//         if(timer > totalTime) {
//             clearInterval(sayHello);
//         }
//     }, 1000);

//     let sayHello = setInterval(func, (seconds * 1000));


// }

// everyXsecsForYsecs(sayHowdy, 1, 5);


// function myforEach(arr, cb) {
//     for (let i = 0; i < arr.length; i++) {
//         cb(arr[i], i);
//     }
// }

// let delays = [2000, 5000, 0, 3500];

// function delayLog(delayTime, i) {
//     setTimeout(console.log(`printing element ${i}`), delayTime);
// }


// myforEach(delays, delayLog);



// function printHello() {
//     console.log('hello');
// }

// function blockFor1Sec() {

// }

// setTimeout(printHello, 0);

// blockFor1Sec();

// console.log('Me first!');


// var dataReceived;

// function ajaxSimulate(id, callback) {
//   var database = ['Aaron', 'Barbara', 'Chris'];
//     let data = database[id];
//     setTimeout(callback, 0);
// }

// function storeData(data) {
//     dataReceived = data;
//     console.log(dataReceived);
// }

// ajaxSimulate(1, storeData);

// function display(data) {
//   console.log(data.post);
// }

// $.get('http://twitter.com/willsen/tweet/1', display);

// console.log('me first!');


let user1 = {
  name: 'Will',
  score: 3,
  increment: function() {
    user1.score++;
  }
};

user1.increment();
console.log(user1.score);



let user2 = {};

user2.name = "Tim";
user2.score = 6;
user2.increment = function() {
  user2.score++;
};


let user3 = Object.create(null);

user3.name = "Eva";
user3.score = 9;
user3.increment = function() {
  user3.score++;
};


function userCreator(name, score) {
  let newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function() {
    newUser.score++;    // CREATES A NEW USER WITH PROPERTIES AND METHODS
  };
  return newUser; // RETURNS THEM ALL TO BE ASSIGNED TO A VARIABLE USER.
};

