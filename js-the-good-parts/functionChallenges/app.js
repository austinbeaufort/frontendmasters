function add(first, second) {
    return first + second;
}

function sub(first, second) {
    return first - second;
}

function mul(first, second) {
    return first * second;
}

// console.log(add(3, 4));
// console.log(sub(3, 4));
// console.log(mul(3, 4));


// function identityf(arg) {
//     return function() {
//         return arg;
//     }
// }

// console.log(identityf(22));
// console.log(identityf(22)());


// function addf(first) { // first goes in return function's backpack.
//     return function(second) {
//         return first + second;
//     }
// }

// // console.log(addf(3)(4));
// // console.log(addf(4)(5));

// function liftf(binary) {
//     return function(first) {
//         return function (second) {
//             return binary(first, second);
//         };
//     };
// }

// console.log(liftf(mul)(5)(6));


// CLARIFICATION ATTEMPT #1

// function identityf(item) {
//     return function() {
//         return item;
//     }
// }

// console.log(identityf('my cat')());


// function addf(first) {
//     return function(second) {
//         return first + second;
//     }
// }

// let result = addf(3)(4);

// console.log(result);


function liftf(func) {
    return function(first) {
        return function(second) {
            return func(first, second);
        }
    }
}

let addResult = liftf(add)(6)(12);
console.log(addResult);

let mulResult = liftf(mul)(3)(9);
console.log(mulResult);