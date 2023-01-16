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
  arr.forEach((element) => {
    if (element % 2 === 0) {
      array[counter] = element;
      counter++;
    }
  });
  return array;
};

const showFirstAndLast = (arr) => {
  let array = [];
  let resultArray = [];
  arr.forEach((el) => {
    if (typeof el === "string") {
      array.push(el);
    }
  });
  resultArray[0] = array[0];
  resultArray[1] = array[array.length - 1];
  return resultArray;
};

const randomArray = [5464654, false, true, "wafrawfawf", null, "asfaesrwetgqwert", "string3", 235234523, "laststring", 5555];
console.log(showFirstAndLast(randomArray));

const vowelCount = (str) => {
  const vowelHive = {};
  const strArr = str.split("");
  strArr.forEach((el) => {
    if ((el === "a") | (el === "e") | (el === "i") | (el === "o") | (el === "u")) {
      vowelHive[el] = 0;
    }
  });
  strArr.forEach((el) => {
    if (el in vowelHive) vowelHive[el]++;
  });
  return vowelHive;
};

console.log(vowelCount("abracadabra  e iifjngjrueqskgopkruu"));

const capitalizer = (str) => {
  let arr = str.split("");
  console.log(arr);
  arr.forEach((el, i) => {
    arr[i] = arr[i].toUpperCase();
  });
  let capitalStr = arr.join("");
  return capitalStr;
};
console.log(capitalizer("fdkgnkjfgnfj"));

const arrayFiller = () => {
  const array = [];
  for (let i = 0; i < 20; i++) {
    array[i] = Math.trunc(Math.random() * 100) + 1;
  }

  return array;
};

// console.log(arrayFiller());

// console.log(arrayFiller(), onlyEvenValues(arrayFiller()));
