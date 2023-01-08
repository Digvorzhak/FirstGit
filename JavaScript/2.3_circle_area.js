"use strict";

const calcCircle = (rad) => rad ** 2 * Math.PI;

console.log(calcCircle(10));

// Option 1

console.log(Math.round((calcCircle(10) + Number.EPSILON) * 100) / 100);

// Option 2

console.log(calcCircle(10).toFixed(2));
