"use strict";

const steps = (n) => {
  let arr = [];
  let resultArray = [];
  for (let i = 0; i < n; i++) {
    arr[i] = [];
    for (let j = 0; j < n; j++) {
      if (j > i) {
        arr[i][j] = " ";
      } else {
        arr[i][j] = "#";
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    resultArray[i] = arr[i].join("");
  }

  return resultArray;
};

console.log(steps(6));
