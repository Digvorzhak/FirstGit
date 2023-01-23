// !Hoisting
// Hoisting is a JavaScript mechanism where variables and function declarations
//  are moved to the top of their scope before code execution.

// Inevitably, this means that no matter where functions and variables are declared,
// they are moved to the top of their scope regardless of whether their scope is global or local.

// This behavior "hoists" declarations to the top.

// JavaScript only hoists declarations, not initializations.

// !EX-1

// In JavaScript, an undeclared variable is assigned the
// value undefined at execution and is also of type undefined.

console.log(typeof variable); // Output: undefined

// !EX-2

// In JavaScript, a ReferenceError is thrown if you try to access a variable that has not been declared.

console.log(variable); // Output: ReferenceError: variable is not defined

// !Hoisting variables

// The following is the JavaScript lifecycle and indicative of the sequence
// in which variable declaration and initialisation occurs.

// 1. Variable declaration
var a;
// 2. Variable initialisation
a = 100;
// 3. Variable usage
a + 30;

// However, since JavaScript allows us to both declare and initialise our variables simultaneously,
// this is the most used pattern:

var a = 100;

// It is however important to remember that in the background,
// JavaScript is religiously declaring then initialising our variables.

// As we mentioned before, all variable and function declarations are hoisted to the top of their scope.
// I should also add that variable declarations are processed before any code is executed.

// However, in contrast, undeclared variables do not exist until code assigning them is executed.
// Therefore, assigning a value to an undeclared variable implicitly
// creates it as a global variable when the assignment is executed.
// This means that, all undeclared variables are global variables.

function hoist() {
  a = 20;
  var b = 100;
}

hoist();

console.log(a);
/* 
  Accessible as a global variable outside hoist() function
  Output: 20
  */

console.log(b);
/*
  Since it was declared, it is confined to the hoist() function scope.
  We can't print it out outside the confines of the hoist() function.
  Output: ReferenceError: b is not defined
  */

// !always declare variables regardless of whether they are in a function or global scope

// ! ES5
// ? var
// The scope of a variable declared with the keyword var is its current execution context.
// This is either the enclosing function or for variables declared outside any function, global.

// ? Global Variables

console.log(hoist); // Output: undefined

var hoist = "The variable has been hoisted.";

// We expected the result of the log to be:
//  ReferenceError: hoist is not defined, but instead, its output is undefined.

// Why has this happened?

// JavaScript has hoisted the variable declaration.
//  This is what the code above looks like to the interpreter:

var hoist;

console.log(hoist); // Output: undefined
hoist = "The variable has been hoisted.";

// Because of this, we can use variables before we declare them.
// However, we have to be careful because the hoisted variable is initialised with a value of undefined.
// The best option would be to declare and initialise our variable before use.

// ? Function Scoped Variables

// !EX-1

var global = "Heyush";

function hoist() {
  console.log(local);
  var local = "Hoisting is all the rage!";
  console.log(global);
}

hoist();

// !EX-2

// var globalVariable = "globalVariable is in global scope";

function outerFunc() {
  var lexicalVariable = "lexicalVariable is in outerFunc scope";

  function innerFunc() {
    var innerVariable = "innerVariable is in innerFunc scope";
    console.log(innerVariable); //Same scope
    console.log(lexicalVariable); //Parent scope or outer scope
    console.log(globalVariable); //Global scope
  }
  innerFunc();
}

outerFunc();



// !ES6

// With the advent of ES6, javascript was introduced with a new type of scope,
// let and const allows us to declare and use the variables with block scope.
// Block scope means that any variable declared within a pair of brackets {} can only
// be used within those brackets. This also means that the variables declared within if-else blocks,
// for loop blocks will all have block scoping when they are declared with let or const

var variable1;
let variable2;
const variable3 = "Constant value";
const variable4; // Uncaught SyntaxError: Missing initializer in const declaration

variable1 = "This can be reassigned";
variable2 = "This can also be reassigned";
variable3 = "Cannot be reassigned"; // Uncaught TypeError: Assignment to constant variable

// !EX-1

function func1() {
  var variable1 = "Grapes";

  if (true) {
    var variable2 = "Bananas";
    let apples = "Oranges";
    console.log(apples); // Works - Block Scope
    console.log(variable1); // Works - Function Scope
    console.log(variable2); // Works - Function Scope
  }
  console.log(apples); // Doesn't work - Out of the block
  console.log(variable1); // Works - Function Scope
  console.log(variable2); // Works - Function Scope
}
console.log(apples); // Doesn't work - Out of the block
console.log(variable1); // Doesn't work - Out of the function
console.log(variable2); // Doesn't work - Out of the function

// !Hoisting and Temporal dead zone

// Javascript is executed in two phases: Parse phase and Execution phase.
// During the parsing phase, memory allocation, scope creation, and hoisting are carried out.
// Consider the following example:

// !EX-1

var variable1 = "Grisha";


// TMZ 
// TMZ 
// TMZ 
// TMZ 
// TMZ 
// TMZ 
// TMZ 
let variable2 = "Boris";

// The javascript code translates this peice of code to:

var variable1;
let variable2;

variable1 = "Grisha";
variable2 = "Boris";

// !Hoisting Functions

// ? Function Declaration

// !EX-1

hoisted();
arrowFunction();

function hoisted() {
  console.log("Hoisted");
}

let arrowFunction = () => {
  console.log("Hoisted with arrow function");
};

// ? Function Expression

// !EX-2

// expression(); //Output: "TypeError: expression is not a function

var expression = function () {
  // console.log("Will this work?");
};

// !Order of precedence

// Variable assignment takes precedence over function declaration
// Function declarations take precedence over variable declarations

// ?Function declarations are hoisted over variable declarations but not over variable assignments.

// !EX-1

var double = 22;

function double(num) {
  return num * 2;
}

// console.log(typeof double); // Output: number

// !EX-2

var double;

function double(num) {
  return num * 2;
}

// console.log(typeof double); // Output: function

// ?Variable declarations are hoisted over function declarations but not over function assignments.

// !CONCLUSION

// All declarations, both functions and variables,
// are hoisted to the top of the containing scope, before any part of your code is executed.

// let and const are limited block scope whereas var is a global scope

// let, const and var are all limited by function scope

// var, let and const are all hoisted but unlike var,
// the other two are not initialized with a default value (undefined).

// Function declarations are hoisted but not functional expressions
