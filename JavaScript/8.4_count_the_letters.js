"use strict";

const lettersCounter = (array) => {
  const lettersHive = {};
  let fullResult = [];

  let letters = array.join("").toLowerCase();

  for (let i = 0; i < letters.length; i++) {
    if (letters[i] !== " ") lettersHive[letters[i]] = 0;
  }
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] in lettersHive) lettersHive[letters[i]]++;
  }
  return (fullResult = [lettersHive, Math.max(...Object.values(lettersHive))]);
};

const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

console.log(lettersCounter(array));
console.log(
