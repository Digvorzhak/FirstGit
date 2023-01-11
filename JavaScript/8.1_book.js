"use strict";

const book = {
  name: "Thinking, Fast and Slow",
  author: "Daniel Kahneman",
  year: 2011,
  subject: "Psychology",
  pages: 499,
  language: "English",
};

const bookDescription = (book) => {
  return `The book ${book.name} was written by ${book.author} in the year ${book.year}`;
};
