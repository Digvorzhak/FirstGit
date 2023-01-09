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
