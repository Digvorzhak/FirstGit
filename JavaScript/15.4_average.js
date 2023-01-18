"use strict";

function calcAverage(arr) {
  var sum; // ?? undefined
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i]; // ?? adding a number to undefined is NaN
  }
  return sum; // ?? sum is not the average
}
calcAverage([85, 90, 92]);

function calcAverage(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}
calcAverage([85, 90, 92]);
