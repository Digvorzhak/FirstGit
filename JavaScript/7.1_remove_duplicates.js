"use strict";

const duplicateRemover = (arr) => {
  let seen = {};
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] in seen)) {
      uniqueArr.push(arr[i]);
      seen[arr[i]] = null;
      console.log(seen);
    }
  }
  return uniqueArr;
};
