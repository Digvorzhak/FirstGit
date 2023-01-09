"use strict";

const today = new Date();

console.log(today.getDay()); // zero based - returns 0 for Sunday
console.log(today.getDate()); // returns 8
console.log(today.getMonth()); // zero based - returns 0 for January
console.log(today.getFullYear());

console.log(today);

// Attempt #1

const getDate = (date) => `Today is ${date.getDay()} the ${date.getDate()} of ${date.getMonth()} ${date.getFullYear()}`;

console.log(getDate(new Date()));

// Attempt #2

const getDate1 = function (date) {
  const date1 = date.toDateString();
  console.log(date1);
  return `Today is ${date1.slice(0, 3)}day the ${date.getDate()} of ${date1.slice(4, 7)} ${date.getFullYear()}`;
};

console.log(getDate1(new Date()));

// Attempt #3

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const getDate2 = function (date) {
  const day = days[date.getDay()];
  const month = months[date.getMonth()];

  return `Today is ${day} the ${date.getDate()} of ${month} ${date.getFullYear()}`;
};

console.log(getDate2(new Date()));

// let str = "abc";
// str.split(2);
// console.log(str);

// function solution(str) {
//   let splitString = [];
//   if (str.length % 2 !== 0) {
//     for (let i = 0; i < str.length; i++) {
//       splitString.push(str.slice(i, i + 2));
//       i++;
//     }
//     splitString[Math.floor(str.length / 2)] = splitString[Math.floor(str.length / 2)] + "_";
//   } else {
//     for (let i = 0; i < str.length; i++) {
//       splitString.push(str.slice(i, i + 2));
//       i++;
//     }
//   }
//   return splitString;
// }
// console.log(solution("abcdefety"));

// const nums = [5, 0, 1, 2, 3, 4];

// console.log(nums[nums[0]]);

// function hasSurvived(attackers, defenders) {
//   let attSurvivors = 0;
//   let defSurvivors = 0;
//   const attDamage = 0;
//   const defDamage = 0;

//   for (let i = 0; i < attackers.length; i++) {
//     attDamage = attDamage + attackers[i];
//   }

//   for (i = 0; i < defenders.length; i++) {
//     defDamage = defDamage + defenders[i];
//   }
// }

// function squareDigits(num) {
//   const stringNum = num.toString();
//   let arr = [];
//   for (let i = 0; i < stringNum.length; i++) {
//     arr[i] = stringNum[i] ** 2;
//   }
//   arr = Number(arr.join(""));

//   return arr;
// }

// console.log(squareDigits(5656412));

// function abbrevName(name) {
//   let arr = name.split(" ");
//   return `${arr[0].slice(0, 1).toUpperCase()}.${arr[1].slice(0, 1).toUpperCase()}`;
// }

// console.log(abbrevName("Clara Jones"));
// console.log("Clara".slice(0, 1));

// function solution(number) {
//   let sum = 0;
//   let counter = number;

//   if (number < 0) {
//     return 0;
//   }

//   for (let i = number - 1; i > 0; i--) {
//     if (i % 5 === 0 || i % 3 === 0) {
//       sum = sum + i;
//     }
//   }

//   return sum;
// }

// console.log(solution(82485));
