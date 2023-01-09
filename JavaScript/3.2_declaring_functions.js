"use strict";

function welcome() {
  let welcome = "Welcome to Appleseeds Bootcamp!";
  return welcome;
}

// implicit return

const welcome = () => "Welcome to Appleseeds Bootcamp!";

// explicit return

const welcome = () => {
  return "Welcome to Appleseeds Bootcamp";
};

function power(a) {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
}

// implicit return

const power = (a) => Math.pow(a, 2);

// explicit return

const power = (a) => {
  return Math.pow(a, 2);
};

// From function expressions to IIFE functions.

const squareRoot = (a) => Math.sqrt(a);

// Answer:

(a) => Math.sqrt(a);

// From function expressions to IIFE functions.

const randomNumbers = (a, b) => Math.random() * (a - b) + b;

// Answer:

(function (a, b) {
  return Math.random() * (a - b) + b;
});
