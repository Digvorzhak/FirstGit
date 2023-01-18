// * Spread === פריסת הערכים מהמערך *

const arr1 = [1, 2, 3];

console.log(...arr1);

// ? Make a new array with the old one and add numbers to it at the end ?

// ! Bad !
const badArr = [arr1[0], arr1[1], arr1[2], 4, 5, 6];

// * Good ! *
const goodArr = [...arr1, 4, 5, 6];

// ? Make a new array with the old one and add numbers to it at the end and at the beginning ?
// * Good ! *
const bothSidesArr = [-2, -1, 0, ...arr1, 4, 5, 6];

const arr2 = [1, 3, 5];

const sumNum = (a, b, c) => a + b + c;

// pass many args to func
// ! Bad !
sumNum(arr2[0], arr2[1], arr2[2]);

// * GOOD *
sumNum(...arr2);

// shallow copy array
const arr1Copy = [...arr1];
console.log(arr1Copy);
arr1Copy.push(4);
console.log(arr1Copy);
console.log(arr1);

const nestedArray = [...arr1, [...arr2]];
console.log(nestedArray);
// Copy array with nesting array
const newNestedArray = [...nestedArray];
console.log(newNestedArray);
// The same?
nestedArray[3].push(18);
// In the old nested array I add 18
console.log(nestedArray);
// It effects also the new array!!!
console.log(newNestedArray);

// Join arrays together
const joinedArray = [...arr1, ...arr2];

// use spread with string (because string is iterable)
// (Iterables: arrays, strings, maps, sets. NOT objects)
const str1 = 'Appleseeds';
const str2 = 'Bootcamp';
const letters = [...str1, ' ', ...str2];
/* output: [
  'A', 'p', 'p', 'l', 'e',
  's', 'e', 'e', 'd', 's',
  ' ', 'B', 'o', 'o', 't',
  'c', 'a', 'm', 'p'
] */

console.log(letters);
console.log(...str1);

// ! NOT GOING TO WORK !
// ! Template literal doesn't expect multiple values separated by a comma
// console.log(`${...str1}`);