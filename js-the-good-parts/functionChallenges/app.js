// function add(first, second) {
//     return first + second;
// }

// function sub(first, second) {
//     return first - second;
// }

// function mul(first, second) {
//     return first * second;
// }

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


// function liftf(func) {
//     return function(first) {
//         return function(second) {
//             return func(first, second);
//         }
//     }
// }

// let addResult = liftf(add)(6)(12);
// console.log(addResult);

// let mulResult = liftf(mul)(3)(9);
// console.log(mulResult);


function add(first, second) {
    return first + second;
}

function subtract(first, second) {
    return first - second;
}

function multiply(first, second) {
    return first * second;
}

function identityf(number) {
    return function() {
        return number;
    };
}

// console.log(identityf(3)());


function addf(first) {
    return function(second) {
        return first + second;
    }
}

// console.log(addf(3)(4));


function liftf(operation) {
    return function(first) {
        return function(second) {
            return operation(first, second);
        }
    }
}

// console.log(liftf(multiply)(7)(9));

function curry(operation, first) {
    return function(second) {
        return operation(first, second);
    };
}

// console.log(curry(multiply, 8)(9));


// inc = addf(1);

// inc = liftf(add)(1);

// inc = curry(add, 1);

function twice(operation) {
    return function(first) {
        return operation(first, first);
    }
}

// console.log(twice(multiply)(22));


function reverse(operation) {
    return function(first, second) {
        return operation(second, first);
    };
}

function reverse(func) {
    return function(...args) {
        return func(...args.reverse());
    };
}

function doubl(number) {
    return number + number;
}

function square(number) {
    return number * number;
}

function composeu(operation1, operation2) {
    return function(number) {
        return operation2(operation1(number));
    }
}

// console.log(composeu(doubl, square)(5));

function composeb(operation1, operation2) {
    return function(num1, num2, num3) {
        return operation2(operation1(num1, num2), num3);
    }
}

// console.log(composeb(add, multiply)(2, 3, 7));


function limit(operation, number) {
    let count = 0;
    return function(first, second) {
        count++;
        if (count <= number) {
            return (operation(first, second));
        }
        return undefined;
    }
}

// let addLimited = limit(add, 3);

// console.log(addLimited(3, 4));
// console.log(addLimited(3, 5));
// console.log(addLimited(4, 8));
// console.log(addLimited(4, 4));


// function from(number) {
//     let result = number;
//     result += 1;
//     return result;
// }

// function from(number) {
//     return function() {
//         number += 1;
//         return number;
//     }
// }

// let index = from(0);
// let index7 = from(7);

// console.log(index());
// console.log(index());
// console.log(index());
// console.log(index());
// console.log(index());

// console.log(index7());
// console.log(index7());
// console.log(index7());

// function to(generator, limit) {
//     return function() {
//         let count = generator();
//         if (count < limit) {
//             return count;
//         }
//         return undefined;
//     }
// }

// let index = to(from(0), 3);
// console.log(index());
// console.log(index());
// console.log(index());


// function fromTo(baseValue, maxValue) {
    
//     return function() {
//         if (baseValue < maxValue) {
//             let trueCount = baseValue;
//             baseValue += 1;
//             return trueCount;
//         }
//         return undefined;
//     }
// }

// function fromTo(start, end) {
//     return to(from(start), end);
// }

// let index = fromTo(0, 3);
// console.log(index());
// console.log(index());
// console.log(index());
// console.log(index());

function from(number) {
    return function() {
        let next = number;
        number += 1;
        return next;
    }
}

function to(generator, limitNumber) {
    return function() {
        let currentValue = generator();
        if(currentValue < limitNumber) {
            return currentValue;
        }
        return undefined;
    }
}

function fromTo(startingNumber, limitNumber) {
    return to(from(startingNumber), limitNumber);
}


function element(array, generator) {
    if (generator === undefined) {
        generator = fromTo(0, array.length);
    }
    return function() {
        let currentValue = generator();
        if (currentValue !== undefined) {
            return array[currentValue];
        }
    }
}

function collect(generator, array) {
    return function() {
        let currentValue = generator();
        if (currentValue !== undefined) {
            array.push(currentValue);
        }
        return currentValue;
    }
}

function filter(generator, predicate) {
    return function() {
        let currentValue;
        do {
            currentValue = generator();
        } while (currentValue !== undefined && !predicate(currentValue));

        return currentValue;
    }
}

function concat(generator1, generator2) {
    let generator = generator1;
    return function() {
        let value = generator();
        if(value !== undefined) {
            return value;
        }
        generator = generator2;
        return generator();
    };
}

function gensymf(letter) {
    let number = 0;
    return function() {
        number += 1;
        return letter + number;
    }
}


function gensymff(unary, seed) {
    return function(prefix) {
        let number = seed;
        return function() {
            number = unary(number);
            return prefix + number;
        };
    };
}

// function fibonaccif(first, second) {
//     let i = 0;
//     return function() {
//         let next;
//         switch(i) {
//             case 0: 
//                 i = 1;
//                 return first;
//             case 1:
//                 i = 2;
//                 return second;
//             default:
//                 next = first + second;
//                 second = next;
//                 return next;
//         }
//     }
// }

function fibonaccif(a, b) {
    return function() {
        let next = a;
        a = b;
        b += next;
        return next;
    }
}

function counter(number) {
    return {
        up() {
            number++;
            return number;
        },
        down() {
            number--;
            return number;
        }
    }
}

function revocable(operation) {
    return {
        invoke(a, b) {
            return operation(a, b);
        },
        revoke() {
            operation = undefined;
        }
    }
}

function m(value, string) {
    return {
        value: value,
        source: string
    }
}

// function addm(object1, object2) {
//     return m( object1.value + object2.value, `(${object1.value} + ${object2.value})`);
// }



function liftm(operation, string) {
    return function(a, b) {
        return m(operation(a.value || a, b.value || b), `(${a.value || a} ${string} ${b.value || b})`);
    }
}

// function exp(list) {
//     if (typeof list === 'number') {
//         return list;
//     }
//     let operation = list[0];
//     return operation(list[1], list[2]);
// }

function exp(value) {
    return (Array.isArray(value))
        ? value[0](exp(value[1]), exp(value[2])) : value;
}



function addg(first) {
    function more(next) {
        if(next === undefined) {
            return first;
        }
        first += next;
        return more;
    }
    if (first !== undefined) {
        return more;
    }
}

function liftg(binary) {
    return function (first) {
        if (first === undefined) {
            return first;
        }
        return function more(next) {
            if(next === undefined) {
                return first;
            }
            first = binary(first, next);
            return more;
        }
    }
}

function arrayg(first) {
    let newArray = [];
    function more(next) {
        if(next === undefined) {
            return newArray;
        }
        newArray.push(next);
        return more;
    }
    return more(first);
}

function continuize(unary) {
    return function(callback, arg) {
        return callback(unary(arg));
    }
}


function vector() {
    let array = [];

    return {
        get: function get(i) {
            return array[i];
        },
        store: function store(i, v) {
            array[i] = v;
        },
        append: function append(v) {
            array.push(v);
        }
    };
}


// myvector = vector();
// console.log(myvector.append(7));
// console.log(myvector.store(1, 8));
// console.log(myvector.get(0));
// console.log(myvector.get(1));


function pubsub() {
    let subscribers = [];
    return {
        subscribe(subscriber) {
            subscribers.push(subscriber);
        },
        publish(publication) {
            for (let i = 0; i < subscribers.length; i++) {
                subscribers[i](publication);
            }
        }
    }
}

console.log(my_pubsub = pubsub());
console.log(my_pubsub.subscribe(log));
console.log(my_pubsub.publish('It works!'));




// sqrtc = continuize(Math.sqrt);
// console.log(sqrtc(alert, 81));

// console.log(arrayg());
// console.log(arrayg(3)());
// console.log(arrayg(3)(4)(5)());


// console.log(liftg(multiply)());
// console.log(liftg(multiply)(3)());
// console.log(liftg(multiply)(3)(0)(4)());
// console.log(liftg(multiply)(1)(2)(4)(8)());

// console.log(addg());
// console.log(addg(2)());
// console.log(addg(2)(7)());
// console.log(addg(3)(0)(4)());
// console.log(addg(1)(2)(4)(8)());





// let nae = [
//     Math.sqrt,
//     [
//         add,
//         [square, 3],
//         [square, 4]
//     ]
// ];



// console.log(exp(nae));
// let sae = [multiply, 5, 11];
// console.log(exp(sae));
// console.log(exp(42));


// let addm = liftm(add, "+");
// console.log(JSON.stringify((addm(3, m(4)))));
// console.log(JSON.stringify(liftm(multiply, '*')(3, m(4))));


// console.log(JSON.stringify(m(1)));
// console.log(JSON.stringify(m(Math.PI, "pi")));


// let rev = revocable(add);
// add_rev = rev.invoke;
// console.log(add_rev(3, 4));
// rev.revoke();
// console.log(add_rev(5, 7));

// let object = counter(10);
// let up = object.up;
// let down = object.down;

// console.log(up());
// console.log(down());
// console.log(down());
// console.log(up());

// let fib = fibonaccif(0, 1);
// console.log(fib());
// console.log(fib());
// console.log(fib());
// console.log(fib());
// console.log(fib());
// console.log(fib());




// let geng = gensymf('G');
// let genh = gensymf('H');

// console.log(geng());
// console.log(genh());
// console.log(geng());
// console.log(genh());



// let con = concat(fromTo(0, 3), fromTo(0, 2));

// console.log(con());
// console.log(con());
// console.log(con());
// console.log(con());
// console.log(con());
// console.log(con());



// let fil = filter(fromTo(0, 5), function third(value) {
//     return (value % 3) === 0;
// });

// console.log(fil());
// console.log(fil());
// console.log(fil());
// console.log(fil());
// console.log(fil());




// let myArray = [];

// let col = collect(fromTo(0, 2), myArray);

// console.log(col());
// console.log(col());
// console.log(col());
// console.log(col());


// let myArray = ['a', 'b', 'c', 'd'];

// let ele = element(myArray);

// console.log(ele());
// console.log(ele());
// console.log(ele());
// console.log(ele());


// let index = fromTo(0, 3);
// console.log(index());
// console.log(index());
// console.log(index());
// console.log(index());

// let index = to(from(1), 3);
// console.log(index());
// console.log(index());
// console.log(index());
// console.log(index());


// let index = from(0);

// console.log(index());
// console.log(index());
// console.log(index());
// console.log(index());
