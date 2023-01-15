"use strict";

const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

const compare = (arr1, arr2) => {
  let duplicate = [];
  let counter = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        duplicate[counter] = arr1[i];
        counter++;
      }
    }
  }
  if (duplicate.length === 0) return false;
  return duplicate;
};

console.log(compare(food, food1));
