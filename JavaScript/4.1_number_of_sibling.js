// "use strict";

let numSiblings = Number(prompt("How many siblings do you have?"));

if (numSiblings === 1) {
  console.log("1 sibling!");
} else if (numSiblings > 1) {
  console.log("More than 1 sibling");
} else console.log("No siblings");

// 6. Because prompt returns a string and we compare a string to a number using ===.

// 7. Because we compare a prompt to numbers so we should use the data type to prevent bugs.
