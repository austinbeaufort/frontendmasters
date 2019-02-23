// DOM SCRIPTING

// UNOBTRUSIVE

// DOM SCRIPTING IS VERBOSE.

// IMPROVES EFFICIENCY

// REDUCES BROWSER INCONSISTENCIES 

// AT IT'S CORE A SIMPLE CONCEPT.

// GETTING HEIGHT OF VIEWPORT

// let x = $(window).width();
// let y = $(window).height();
// console.log(x, y);

// SIMPLE CONCEPT
// FIND SOMETHING, DO SOMETHING

// $() // '$' IS A FUNCITON CALL, CAN PASS ARGUMENT INTO IT.

// $('div'); // get all div elements on page

// $('#id'); // get element with id 'id'

// DO SOMETHING
// WAIT TILL:
// THE DOCUMENT IS READY
// USER DOES SOMETHING
// ANOTHER 'LISTENER' ACTS
// A CERTAIN AMOUT OF TIME TO LAPSE

// DOES:
// MANIPULATE ELEMENTS
// ANIMATE ELEMENTS
// COMMUNICATE WITH SERVER


// DEV TOOLS

// BROWSER SUPPORT
// MODERNIZR.COM
// CANIUSE.COM

// $('<div>hello</div>').appendTo('body');

// ALWAYS DECLARE VARIABLES

// KEEP THINGS OUT OF GLOBAL WHEN POSSIBLE

// CSS USES IMPLICIT ITERATION

// jQuery uses both implicit and explicit iteration.
// jQuery will do the looping for you.

// CAN DECLARE MULTIPLE VARIABLES INSIDE 'FOR' LOOP INITIALIZATION WITH A COMMA.
// for (let i = 0, divCount = divs.length; i < divCount; i++) {

// }

// 'FOR-IN' LOOPS

// let family = {
//     dad: 'Karl',
//     mom: 'Sara',
//     son: 'Benjamin',
//     daughter: 'Lucia'
// }

// for (let person in family) {
//     console.log(`The ${person} is ${family[person]}`);
// }


// DO WHILE LOOPS

// let j = 1;

// do {
//     console.log(j);
//     j++;
// } while ( j < 4 );


// 'ARGUMENTS' OBJECT

// A COLLECTION OF THE ARGUMENTS PASSED TO THE FUNCTION,
// WHEN IT IS CALLED

// ex..
// function logThing() {
//     for (let i = 0; i < arguments.length; i++) {
//         console.log(arguments[i]);
//     }
// }

// logThing(1, 2, 'three');


// function sumThing() {
//     let sum = 0;

//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }

//     return sum;
// }

// console.log(sumThing(2, 77, 66, 55, 44, 33, 22, 11));


// FUNCTIONS RETURNING OTHER FUNCTIONS

// function multiple(n) {
//     function f(x) {
//         return x * n;
//     }
//     return f;
// }

// let triple = multiple( 3 );
// let quadruple = multiple( 4 );

// console.log( triple( 5 ) );
// console.log( quadruple( 5 ) );
// console.log( multiple( 4 )( 5 ) );


// NAMED VS. ANNONYMOUS FUNCTIONS

//ANNONYMOUS FUNCTION

// let foo = function() {

// }

// PREVALENT IN JQUERY
// GOOD FOR CREATING CLOSURES
// USED AS CALLBACK FUNCTIONS
// CAN BE USED AS OBJECT PROPERTIES.

// $(document).ready(function() {
//     console.log(`I'm Ready!!`);
// });


// function letsGetReady() {
//     console.log(`We are ready to go!!`);
// }

// $(document).ready(letsGetReady);


// IIFE'S => DEFINED AND THEN IMMEDIATELY INVOKED

// (function($) {

// })(jQuery);

// USED TO KEEP JQUERY SAFE.

// $('p').slideDown('slow', function() {
//     // code here is not executed until after the slideDown,
//     // is funished.
//     // jQuery calls the code in here when effect ends.
// });

// jQuery is an object

// WINDOW IS THE GLOBAL OBJECT

// WINDOW HAS METHODS:
// LOCATION
// PARSEINT(); PARSEFLOAT();
// ISNAN()
// SETTIMEOUT(); CLEARTIMEOUT()

// DATE OBJECT

// REGULAR EXPRESSION OBJECT

// USING A REGEXP

// let text = 'the quick brown fox';

// let re = /quick/;

// console.log(re.test(text)); // true

// console.log( /brown/.test(text) ); // true
// console.log( /red/.test(text) ); // false


// MATH OBJECT

// OBJECT LITERALS ARE GREAT AS FUNCTION ARGUMENTS

// SINGLE ARGUMENT ALLOWS FLEXIBILITY WHEN CALLING THE FUNCTION

// doSomething({
//     speed: 'fast',
//     height: 500,
//     width: 200,
//     somethingElse: 'yes'
// });

// doSomething({width: 300});


// JSON (JAVASCRIPT OBJECT NOTATION)

// A DATA INTERCHANGE FORMAT. PASSES DATA BACK AND FORTH.

// A SUBSET OF JAVASCRIPT OBJECT LITERAL NOTATION

// ALL STRINGS TAKE DOUBLE QUOTES

// TREE-LIKE STRUCTURE OF OBJECTS AND/OR ARRAYS

// REFERENCE CUSTOM SCRIPTS AFTER JQUERY CORE

// REFERENCE PLUGINS IN BETWEEN JQUERY CORE AND CUSTOM SCRIPTS



// $(document).ready()
// CODE EXECUTES WHEN THE STRUCTURE OF THE DOCUMENT HAS LOADED.
// DOM IS CONTRUCTED BY THE BROWSER.
// USUALLY BETTER THAN WINDOW.ONLOAD

// $(document).ready(function() {
//     // stuff to do as soon as the DOM is ready;
// });


// AVOID THE DREADED 'FLASH OF UNSTYLED CONTENT'
// document.documentElement.className = 'js';


// SCRIPT LOADERS

// SCRIPT PLACEMENT CAN DRAMATICALLY AFFECT USER,
// PERCEPTION AND OVERALL EXPERIENCE




// jQuery SELECTORS
/*

$('element')
$('#id')
$('.class')
$('selector1, selector2')
$('ancestor descendant')
$('parent > child')
$(':nth-child(n)')

$('prev + selector')
$('prevAll ~ selector')
$(':nth-child(an+b)')
$(':not(selector)')
$(':checked')
$(':disabled')

*/

// CSS ATTRIBUTE SELECTORS

// $('[title]') // has the attribute
// $('[attr='val']') // attr equals val
// $('[attr!='val']') // attr does not equal val
// $('[attr~='val']') // attr has val as one of space-sep. vals
// $('[attr^='val']') // attr begins with val
// $('[attr$='val']') // attr ends with val
// $('[attr*='val']') // attr has val anywhere within


// CUSTOM FORM SELECTORS
/*
$('div.myclass :checkbox')
$(':input') <input>, <textarea>, <select>, <button>
$(':text')  <input type="text">
$(':radio') <input type="radio">
$(':button') <input type="button">, <button>
$(':selected') <option selected="selected">




// TRAVERSAL METHODS

MOVE UP
MOVE SIDEWAYS
MOVE DOWN
FILTER
CONTEXT
CHECK

$('li.bottom').parent(); // moves up one level
$('span').parents('ul'); // up multiple levels
$('span').parentsUntil('ul') // possible multiple levels // ,
goes up to the nearest 'ul', but does not include the 'ul'.

.nextUntil()

$('span').closest('ul'); // finds nearest 'ul'
$('.bottom').closest('li'); // finds closest li to class 'bottom'


// MOVE SIDEWAYS
.siblings()
.next()
.nextAll()
.nextUntil()
.prev()
.prevAll()
.prevUntil()

// MOVE DOWN

.children()
.find() // finds descendants

$('body').find('*'); // gets all elements inside the body


// FILTERING

.filter(selector)

.filter('.some-class');

.filter(function)

.filter(function() {
    return $(this).parents('li').length >= 2;
});

.not(selector) // only keep ones that do not match the selector.

.slice(2) // returns the third <li> tag.
.slice(-2) // returns last 2 elements
.slice(3, 6) // returns 4th, 5th, and 6th items.
.slice(2, -1) //starts at item 3 and goes to second to last item.

.eq()
eq(2) // selects one element, the 3rd
eq(-2) // selects element 3rd from the end.


// CONTEXT
$('selector', 'context')
// DIFFERENT FROM 'OR' SELECTOR
// NOT WORTH USING, TOO CONFUSING

.add() // add elements

.andself() 
$('ul').children().andSelf() // returns all children include the initial 'ul'.

.end() // used with chaining


// CHECK
.hasClass(class) // returns boolean
.is(selector) // returns boolean

// nth child is 1 based, not 0 based

// JAVASCRIPT HAS CHAINING BUILT IN

*/

// let myNum = '616-555-1212';

// console.log(myNum.split('-').join('.')); // splits to array and turns back into string.

// let lis = $('.container li:first')
// .addClass('first-li')
//     .next()
//     .addClass('second-li')
// .end()  // goes back one step
//     .nextAll()
//     .addClass('not-first-li')
// .end();


// $('li').removeClass('myClass');

// $('li').each(function(index) {
//     $(this).append(' # ' + (index+1) );
// });


// 'THIS' KEYWORD

// REFFERS TO CURRENT OBJECT

// STORE SELECTORS USED MORE THAN ONCE

// USE LENGTH PROPERTY TO CHECK EXISTENCE

// AVOID JQUERY'S CUSTOM SELECTORS WHEN POSSIBLE

