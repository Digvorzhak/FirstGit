"use strict";

const today = new Date();

console.log(today.getDay()); // zero based - returns 0 for Sunday
console.log(today.getDate()); // returns 8
console.log(today.getMonth()); // zero based - returns 0 for January
console.log(today.getFullYear());

console.log(today);

const getDate = (date) => `Today is ${date.getDay()} the ${date.getDate()} of ${date.getMonth()} ${date.getFullYear()}`;

const getDate1 = function (date) {
  const date1 = date.toDateString();
  console.log(date1);
  return `Today is ${date1.slice(0, 3)}day the ${date.getDate()} of ${date1.slice(4, 7)} ${date.getFullYear()}`;
};

console.log(getDate1(new Date()));
