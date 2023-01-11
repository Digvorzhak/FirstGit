"use strict";

const bookOne = {
  name: "Thinking, Fast and Slow",
  author: "Daniel Kahneman",
  year: 2011,
  subject: "Psychology",
  pages: 499,
  language: "English",
};

const bookTwo = {
  name: "Sapiens: A Brief History of Humankind",
  author: "Yuval Noah Harari",
  year: 2010,
  subject: "History",
  pages: 443,
  language: "Hebrew",
};

const bookUtlis = {
  getFirstPublished: (book1, book2) => {
    if (book1.year > book2.year) return book2;
    else return book1;
  },
  setNewEdition: (book, year) => {
    return (book.latestEdition = year);
  },
  setLanguage: (book, language) => {
    return (book.language = language);
  },
  setTranslation: (book, language, translator) => {
    return (book.translation = {
      translator,
      language,
    });
  },
  setPublisher: (book, name, location) => {
    return (book.publisher = {
      locale: location,
      publisher: name,
    });
  },
  isSamePublisher: (book1, book2) => {
    if (book1.publisher.locale === book2.publisher.locale && book1.publisher.publisher === book2.publisher.publisher) return true;
    return false;
  },
};

console.log(bookUtlis.getFirstPublished(bookOne, bookTwo));

bookUtlis.setNewEdition(bookTwo, 2014);

bookUtlis.setLanguage(bookTwo, "Russian");

bookUtlis.setTranslation(bookTwo, "German", "Translator.212");

bookUtlis.setPublisher(bookTwo, "Dvir", "Tel Aviv, Israel");
bookUtlis.setPublisher(bookOne, "Farrar, Straus and Giroux", "New York City, New York");

console.log(bookTwo);
console.log(bookOne);

console.log(bookUtlis.isSamePublisher(bookOne, bookTwo));

// console.log(Object.values(bookTwo.language));

// const objCopy = Object.assign({}, obj1) - SHALLOW COPY
// const deepCopy = JSON.parse(JSON.stringify(deepObj))
