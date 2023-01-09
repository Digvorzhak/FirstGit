"use strict";

// Declaration

function welcome() {
  let welcome = "Welcome to Appleseeds Bootcamp!";
  return welcome;
}

// Answer:

const welcome = function () {
  let welcome = "Welcome to Appleseeds Bootcamp!";
  return welcome;
};

// Declaration

function power(a) {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
}

// Answer:

const power = (a) => {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
};

// Declaration

function add(a, b = 5) {
  let myNumber = a;
  let sum = myNumber + b;
  return sum;
}

// Answer:

const add = (a, b = 5) => {
  let myNumber = a;
  let sum = myNumber + b;
  return sum;
};

// From function expressions to function declarations

// Expression

const hello = () => "Hello!";

// Answer:

function hello() {
  return "Hello!";
}

// Expression

const squareRoot = (a) => Math.sqrt(a);

// Answer:

function squareRoot(a) {
  return Math.sqrt(a);
}

// Expression

const randomNumbers = (a, b) => Math.random() * (a - b) + b;

// Answer:

function randomNumber(a, b) {
  return Math.random() * (a - b) + b;
}
