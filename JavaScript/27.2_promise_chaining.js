// Write two functions that use Promises that you can chain.
// The first function, makeAllCaps(), will take in an array of words
// and capitalize them, and then the second function, sortWords(),
// will sort the words in alphabetical order. If the array contains
// anything but strings, it should throw an error.
// Call the functions once with an array of words and call it once
// with an array that includes at least one item that is not a word.
// Print the resolve and reject in a .then, .catch.

const words = ["word", "earthquake", "onion", "oil", "garlic", "garbage", "ancient"];
const invalidArray = [undefined, "earthquake", true, "oil", "false", "garbage", "ancient", 50];

const makeAllCaps = (array) => {
  return new Promise(function (resolve, reject) {
    if (array.some((word) => typeof word !== "string")) {
      reject(new Error("array is invalid!"));
    } else {
      resolve(array.map((word) => word.toUpperCase()));
    }
  });
};
const sortWords = (array) => {
  return new Promise(function (resolve) {
    resolve(array.sort());
  });
};

makeAllCaps(words)
  .then(sortWords)
  .then((res) => console.log(res))
  .catch((rej) => console.log(rej));

makeAllCaps(invalidArray)
  .then(sortWords)
  .then((res) => console.log(res))
  .catch((rej) => console.error(rej));
