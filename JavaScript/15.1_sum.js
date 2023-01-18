"use strict";

function getSum(arr1, arr2) {
  const sum = 0; // USING CONST INSTEAD OF LET
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
}
getSum([1, 2, 3][(5, 66, 23)]); // NO COMMA BETWEEN ARGUMENTS

function getSumFixed(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
  return sum;
}
console.log(getSumFixed([1, 2, 3], [5, 66, 23]));
