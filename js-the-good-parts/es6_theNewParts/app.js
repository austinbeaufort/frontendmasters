// GETTERS AND SETTERS

// function make_temperature(temperature) {
//     return {
//         get celcius() {
//             return temperature;
//         },
//         set celsius(value) {
//             temperature = value;
//         },
//         get fahrenheit() {
//             return temperature * 9 / 5 + 32;
//         },
//         set fahrenheit(value) {
//             temperature = (value - 32) * 5 / 9;
//         }
//     };
// }

// INFINITY, NAN, AND UNDEFINED ARE NOW CONSTANTS. (READ ONLY)

// PARSEINT NOW DEFAULTS TO BASE 10


// JSON.parse()// 
// JSON.stringify()


// NEW METHODS
/*
.bind()
.trim()
.every() // continues until a function returns false.
.filter() // if return value is true, original array value copied into new Array.
.forEach()
.indexOf()
.lastIndexOf()
.map() // manipulates and returns new array
.reduce()
.some() // continues until a function returns true
Date.now() // gets timestamp
Date.prototype.toISOString
Array.isArray()
Object.keys()
Object.create()

*/

/*
META OBJECT API'S

DATA PROPERTIES
ACCESSOR PROPERTIES

ATTRIBUTES
=> VALUE
=> WRITEABLE
=> ENUMERABLE
=> CONFIGURABLE
=> GET
=> SET


let my_Object = 
    Object.create(Object.prototype);
Object.defineProperty(my_object,
            'foo', {
                value: bar,
                writeable: true,
                enuumerable: true,
                configurable: true
            });


// ACCESSOR PROPERTY

Object.defineProperty(my_object, 'inch') {
    get: function() {
        return this.mm / 25.4;
    },
    set: function(value) {
        this.mm = value * 25.4;
    },
    configurable: false
});

Object.getOwnPropertyDescriptor(object, key)
Object.defineProperty()
Object.defineProperties()
Object.getOwnPropertyNames()
Object.getPrototypeOf()

Object.preventExtensions() // no new properties
Object.seal()
Object.freeze() // makes everything read only, non-configurable
Object.isExtensible()
Object.isSealed()
Object.isFrozen()


// STRICT MODE

// 'USE STRICT' IN FUNCTION FORM, AT THE BEGINNING OF EACH FUNCTION. 
// LESS CHANCE OF BREAKING CODE.

