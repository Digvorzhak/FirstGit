"use strict";

const gradeAssigner = (grade) => {
  return grade <= 64 ? "F" : grade <= 69 ? "D" : grade <= 79 ? "C" : grade <= 89 ? "B" : "A";
};
