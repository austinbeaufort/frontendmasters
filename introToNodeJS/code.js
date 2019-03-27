// console.log('hello from node');

// console.log(process); // shows "process" object
// console.log(__dirname); // shows what folder we are in.

// console.log(module); // info about current module, has methods.

const add = (num1, num2) => {};
const notPublic = () => {};

module.exports = { // EXPORT AN OBJECT IF EXPORTING MORE THAN 1 THING.
    add, 
    thing() {},
    value: 1
}