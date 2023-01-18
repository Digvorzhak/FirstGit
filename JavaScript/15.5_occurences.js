function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter + 1; // ????????????? there is no assignment to counter.
    }
  }
  return counter;
}
console.log(countOccurrences("ini mini miny moe", "n"));

function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter++;
    }
  }
  return counter;
}
countOccurrences("ini mini miny moe", "n");
