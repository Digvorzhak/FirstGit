"use strict";

const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

foods.sort();
// console.log(foods);
foods.sort((a, b) => (a > b ? -1 : b > a ? 1 : 0));
// console.log(foods);

const foodsWithUpperCase = ["falafel", "Sabich", "hummus", "pizza with extra pineapple"];

foodsWithUpperCase.sort((a, b) => {
  a.toLowerCase().localeCompare(b.toLowerCase());
});
console.log(foodsWithUpperCase);

foodsWithUpperCase.sort((a, b) => b.localeCompare(a, undefined, { sensitivity: "base" }));
console.log(foodsWithUpperCase);

const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

words.sort((a, b) => {
  if (a.length < b.length) {
    return 1;
  } else if (b.length < a.length) {
    return -1;
  } else return 0;
});
console.log(words);
