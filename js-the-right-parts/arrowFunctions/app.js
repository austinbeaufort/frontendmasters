// ES6: USE THE TOOLS IN THE LANGUAGE TO COMMUNICATE,
// TO OTHERS MORE EFFECTIVELY.

// PRIORITIZE CLEAR CODE COMMUNICATION TO OTHER PEOPLE.

// MAKE CODE MORE READABLE BY OTHERS.

// IMPERATIVE: TELLING THE COMPUTER HOW TO DO SOMETHING

// DECLARATIVE: TELLING THE COMPUTER WHAT THE END RESULT SHOULD BE.

// DECLARATIVE USUALLY MORE READABLE.



// ARROW FUNCTION

// foo = () => 2;

// function foo() {
//     return 2;
// }

// () => 3
// _ => 3
// x => 3
// (...x) => 3
// (x, y) => 3
// x => { return 3; };
// x => ({y: x}); // returns object {y: x}

// ARROW FUNCTIONS ARE UNNAMED, ANNONYMOUS

// let foo = x => 3;
// console.log(foo.name); // 'foo';

// foo( x => 3 )

// p.then(function extractId(v) {return v.id});

// p.then (v => v.id);

// let obj = {
//     id: 42,
//     foo: function foo() {
//         setTimeout(function() {
//             console.log(this.id);
//         }.bind(this), 100);
//     }
// }


let obj = {
    id: 42,
    foo: function foo() {
       setTimeout(() => console.log( this.id ), 100);
    }
}

obj.foo();
