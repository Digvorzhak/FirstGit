"use strict";
const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const availableBook = (lab) => {
  const availableLab = lab.filter((book) => book.readingStatus === true);
  return availableLab;
};

console.log(availableBook(library));
