"use strict";

const string = "hi";
const num = 42;
const account = {
  password: 1234,
  name: "Jonas",
  age: 28,
  email: "fakemail123@gmail.com",
};
const boolean = false;

const nu = null;

const mySymbol = Symbol("Some Test");

let undefined1;

console.log(typeof num);
console.log(typeof string);
console.log(typeof account);
console.log(typeof boolean);
console.log(typeof undefined1);
console.log(typeof nu);
console.log(typeof mySymbol);
