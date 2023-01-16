"use strict";

const doubleValues = (arr) => {
  let array = [];
  arr.forEach(function (element, i) {
    array[i] = element * 2;
  });
  return array;
};

// console.log(doubleValues([10, 20, 30, 40, 50, 60]));

const onlyEvenValues = (arr) => {
  let array = [];
  let counter = 0;
  arr.forEach((element, i) => {
    // arr[i] % 2 === 0 ? (array[i] = element) : null;
    if (element % 2 === 0) {
      array[counter] = element;
      counter++;
    }
  });
  return array;
};

const showFirstAndLast = (arr) => {
  let array = [];

  arr.forEach((element, i) => {});
};

const vowelCount = (str) => {
  const strArr = str.split("");
};

const arrayFiller = () => {
  const array = [];
  for (let i = 0; i < 20; i++) {
    array[i] = Math.trunc(Math.random() * 100) + 1;
  }

  return array;
};

// console.log(arrayFiller());

// console.log(arrayFiller(), onlyEvenValues(arrayFiller()));
