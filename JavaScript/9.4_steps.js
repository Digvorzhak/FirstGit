"use strict";

const steps = (n) => {
  let x = [];
  let y = [];
  let arr = [];
  let hash = "#";
  for (let i = 0; i < n; i++) {
    arr[i] = [];
    for (let j = 0; j < 1; j++) {
      arr[i][j] = hash + "    ";
    }
  }
  return arr;
};

const hi = [["#    "], ["##   "], ["###  "], ["#### "], ["#####"]];
console.log(hi);

console.log(steps(5));
console.table(hi);
