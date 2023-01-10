"use strict";

const boom = (n) => {
  let digitChecker;
  for (let i = 1; i <= n; i++) {
    digitChecker = i.toString();
    if (i % 7 === 0 && digitChecker.includes(7) === true) {
      console.log("BOOM-BOOM");
    } else if (i % 7 === 0) {
      console.log("BOOM");
    } else {
      console.log(i);
    }
  }
};

boom(77);

function getCount(str) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    str[i].includes("a") ? counter++ : str[i].includes("e") ? counter++ : str[i].includes("i") ? counter++ : str[i].includes("o") ? counter++ : str[i].includes("u") ? counter++ : counter + 0;
  }
  return counter;
}

console.log(getCount("abracadabra"));

// function fiveOrSeven(num) {
//   const obj = { 5: 7, 7: 5 };
//   return obj[num];
// }

// console.log(fiveOrSeven(7));
