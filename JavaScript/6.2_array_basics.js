"use strict";

const people = ["Greg", "Mary", "Devon", "James"];

// #1

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// #2

people.shift();

// #3

people.pop();

// #4

people.unshift("Matt");
console.log(people);

// #5

people.push("Sean");
console.log(people);

// #6

for (let i = 0; i < people.length / 2; i++) {
  console.log(people[i]);
}

// #7

const copyPeople = people.slice(2);

// #8

console.log(people.indexOf("Mary"));

// #9

console.log(people.indexOf("Foo"));

// #10

people.splice(-2);
people.shift();
people.unshift("Greg");
people.push("Elizabeth");
people.push("Artie");
people.push("James");

console.log(people);

// #11

const withBob = people + "Bob";
console.log(withBob);
