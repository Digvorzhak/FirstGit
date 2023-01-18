"use strict";
const data = [
  { id: 1, name: "Bob" },
  { id: 2, name: "Borris" },
  { id: 3, name: "Sergei" },
  { id: 4, name: "Grisha" },
];

const extractOnlyValue = (data, key) => {
  let result = data.reduce((arr, obj) => {
    console.log(obj[key]);
    arr.push(obj[key]);
    console.log(arr);
    return arr;
  }, []);
  return result;
};

console.log(extractOnlyValue(data, "id"));

const countOnlyVowels = (str) => {};

console.log(countOnlyVowels("atghilkveoilaaoigjvnbcERLA"));
