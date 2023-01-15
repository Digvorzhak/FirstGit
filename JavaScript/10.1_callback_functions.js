"use strict";

const isString = (str, funct) => (typeof str === "string" ? funct(str) : null);

const logger = (log) => console.log(log);

isString("hi", logger);

const firstWordUpperCase = (str, func) => {
  const wordBox = str.split(" ");
  wordBox[0] = wordBox[0].toUpperCase();
  return func(wordBox);
};

const dashPlacer = (str) => str.join("-");

const upperCaseMaker = (str) => str.join(" ").toUpperCase();

console.log(firstWordUpperCase("the sun machine is coming down", dashPlacer));
console.log(firstWordUpperCase("the sun machine is coming down", upperCaseMaker));

const uniqueLottery = (func) => {
  const array = [];
  for (let i = 0; i < 6; i++) {
    array[i] = Math.trunc(Math.random() * 37) + 1;
  }
  console.log(array);
  return func(array);
};

const duplicateRemover = (arr) => {
  let seen = {};
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] in seen)) {
      uniqueArr.push(arr[i]);
      seen[arr[i]] = null;
      // console.log(seen);
    }
  }
  return uniqueArr;
};

console.log(uniqueLottery(duplicateRemover));
