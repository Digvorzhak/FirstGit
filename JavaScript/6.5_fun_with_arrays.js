"use strict";

const data = {
  key: "item",
};

// #1

const funArray = Array(100).fill(data);
console.log(funArray);

// #2

const array = Array.from({ length: 100 }, (_, i) => i + 1);

// #3

const keyHolder = Array(100).fill(data.key);

// #4

let specialArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
specialArray = { ...data };
console.log(specialArray);

// #5

console.log(Array.isArray(funArray));

// #6

const copyArray = [...funArray];
console.log(copyArray);

const copyArray1 = funArray;
console.log(copyArray1);
