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

const countOnlyVowels = (str) => {
  const strArr = str.split("");

  let result = strArr.reduce((obj, letter) => {
    if ((letter === "A" || letter === "E" || letter === "I" || letter === "O" || letter === "U" || letter === "a" || letter === "e" || letter === "e" || letter === "i" || letter === "o" || letter === "u") && obj[letter] === undefined) {
      obj[letter] = 1;
      console.log(obj);
    } else if ((letter === "A" || letter === "E" || letter === "I" || letter === "O" || letter === "U" || letter === "a" || letter === "e" || letter === "e" || letter === "i" || letter === "o" || letter === "u") && letter in obj) {
      obj[letter] += 1;
    }

    return obj;
  }, {});
  return result;
};

console.log(countOnlyVowels("aAAbBcCeEhHiIoOjJaaakp"));
