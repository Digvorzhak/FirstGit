"use strict";

const lengthOfStrings = (arr) => {
  let fixedArr = [];
  for (let i = 0; i < arr.length; i++) {
    fixedArr[i] = arr[i].length;
  }
  return fixedArr;
};
