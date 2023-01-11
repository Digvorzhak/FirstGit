"use strict";

const book = {
  name: "Sapiens: A Brief History of Humankind",
  author: "Yuval Noah Harari",
  year: 2010,
  subject: "History",
  pages: 443,
  language: "Hebrew",
};

const transferredValues = [...Object.values(book)];
const transferredKeys = [...Object.keys(book)];

const swappedBook = {};
for (let i = 0; i < transferredKeys.length; i++) {
  swappedBook[transferredValues[i]] = transferredKeys[i];
}
