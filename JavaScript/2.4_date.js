"use strict";

const today = new Date();

console.log(today.getDay()); // zero based - returns 0 for Sunday
console.log(today.getDate()); // returns 8
console.log(today.getMonth()); // zero based - returns 0 for January
console.log(today.getFullYear());

console.log(today);

// Attempt #1

const getDate = (date) => `Today is ${date.getDay()} the ${date.getDate()} of ${date.getMonth()} ${date.getFullYear()}`;

// Attempt #2

const getDate1 = function (date) {
  const date1 = date.toDateString();
  console.log(date1);
  return `Today is ${date1.slice(0, 3)}day the ${date.getDate()} of ${date1.slice(4, 7)} ${date.getFullYear()}`;
};

console.log(getDate1(new Date()));

// Attempt #3

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const getDate2 = function (date) {
  let day = days[date.getDay()];
  let month = months[date.getMonth()];

  return `Today is ${day} the ${date.getDate()} of ${month} ${date.getFullYear()}`;
};

console.log(getDate2(new Date()));
