"use strict";

const leapYear = (year) => {
  if (year % 4 !== 0) return console.log("This is not a leap year");

  if (year % 4 === 0 && year % 100 === 0 && year % 400 !== 0) return console.log("This is not a leap year");
  else return console.log("It is indeed a leap year");
};

function minMinMax(array) {
  let arr = [];
  let max = array[0];
  let min = array[0];
  let minimumAbsent = 1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
    if (array[i] < min) {
      min = array[i];
    }
  }
  minimumAbsent = min + minimumAbsent;
  for (let i = 0; i < array.length; i++) {
    if (array.includes(minimumAbsent, i)) {
      minimumAbsent++;
    }
  }

  minimumAbsent = Number(minimumAbsent);

  arr[0] = min;
  arr[1] = minimumAbsent;
  arr[2] = max;
  return arr;
}

minMinMax([-1, 4, 5, -23, 24, -22, -21]);
