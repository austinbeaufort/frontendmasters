// SYMBOLS
// a unique globally unguessable value within the context of your programming.

// let x = Symbol( "whatever description" ); // takes optional string value as a label for the symbol

// let obj = {
//     id: 42
// };

// obj[x] = "shhhh this is secret!";


// WELL KNOWN SYMBOLS
// Symbol.iterator
// Symbol.toStringTag
// Symbol.toPrimitive
// Symbol.isConcatSpreadable


// ITERATORS
// let arr = [1, 2, 3];

// let iterator = arr[Symbol.iterator]();

// iterator.next(); // { value: 1, done: false }
// iterator.next(); // { value: 2, done: false }
// iterator.next(); // { value: 3, done: false }
// iterator.next(); // { value: undefined, done: true };

// let arr = [1, 2, 3];

// let str = "Hello";

// for (let v of str) {
//     console.log(v);
// }


// CUSTOM ITERATORS 
// let obj = {
//     [Symbol.iterator]() {
//         let index = this.start, end = this.end;

//         let iterator = {
//             next: () => {
//                 if (index <= end) {
//                     let value = this.values[index];
//                     index++;
//                     return { value: value, done: false }
//                 }
//                 else {
//                     return { done: true };
//                 }
//             }
//         };
    
//         return iterator;
//     },
//     values: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
//     start: 4,
//     end: 13
// };

// let values = [ ...obj ];
// console.log(values);


// GENERATORS
// function *main() {
//     console.log('hello');
//     yield 9;
//     console.log('world');
//     return 10;
// }

// let iterator = main();

// iterator.next();
// iterator.next();

// function *main() {
//     for (let i = 0; i < 5; i++) {
//         yield i;
//     }
// }

// for (let v of main()) {
//     console.log(v);
// }