// Write a function that takes a number as an argument and
// returns a Promise that tests if the value is less than or greater
// than the value 10.
// If it is greater than 10 it is resolved, if it is less than 10 it is
// rejected.
// Call the function and print the resolve and reject in a .then,
// .catch.

// const check = new Promise(function (resolve, reject) {
//   if (num >= 10) {
//     resolve("The num is greater than 10");
//   } else {
//     reject("The num is below 10");
//   }
// });

function greaterThan10(num) {
  const check = new Promise(function (resolve, reject) {
    if (num >= 10) {
      resolve("The num is greater than 10");
    } else {
      reject("The num is below 10");
    }
  });
  check.then((res) => console.log(res)).catch((err) => console.log(err));
}

greaterThan10(-800);
