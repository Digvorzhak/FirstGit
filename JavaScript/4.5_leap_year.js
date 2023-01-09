"use strict";

const leapYear = (year) => {
  if (year % 4 !== 0) return console.log("This is not a leap year");

  if (year % 4 === 0 && year % 100 === 0 && year % 400 !== 0) return console.log("This is not a leap year");
  else return console.log("It is indeed a leap year");
};
