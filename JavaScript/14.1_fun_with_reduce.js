"use strict";

const array = [3500, -800, 200, 450, -400, 3000, -650, -130, 2700, 2100, 2300, 1800, 250, 1400, 800];

const array1 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const max = array.reduce((acc, cur) => (acc < cur ? (acc = cur) : acc));
console.log(max);

const sumOfEven = array1.reduce((acc, cur) => (cur % 2 === 0 ? (acc += cur) : acc), 0);
console.log(sumOfEven);

const array2 = [3, 4, 5];

const average = array2.reduce((a, b) => a + b) / array2.length;

console.log(average);
