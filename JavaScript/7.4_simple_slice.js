"use strict";
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 0, "Lemon", "Kiwi");

console.log(fruits);

const getCount = function (str) {
  return str.replace(/[aeiou]/gi, "");
};

// const getCount = function (str) {
//   return str.replace(/[^bcdfghjklmnpqrstuvwxyz]/gi, " ");
// };

console.log(getCount("This website is for losers LOL!"));

// "xxx".replace("", "_") aeiou text.replace(/blue/g, "red"); Ths wbst s fr lsrs LL!

function createPhoneNumber(numbers) {
  numbers.unshift("(");
  numbers.splice(4, 0, ")");
  numbers.splice(5, 0, " ");
  numbers.splice(9, 0, "-");
  return numbers.join("");
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

console.log();
