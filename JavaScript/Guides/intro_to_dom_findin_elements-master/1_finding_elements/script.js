// Finding HTML elements by id
// The getElementById method returns the first element with the specified id.
const header = document.getElementById("main-header");
console.log(header);

// Finding HTML elements by tag name
// The getElementsByTagName method returns a HTMLCollection of elements with the specified tag name.
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

// Finding HTML elements by class name
// The getElementsByClassName method returns a HTMLCollection of elements with the specified class name.
const intro = document.getElementsByClassName("intro");
console.log(intro);

// Finding HTML elements by CSS selectors
// The querySelector method returns the first element that matches the specified CSS selectors.
const firstParagraph = document.querySelector("p");
console.log(firstParagraph);

// The querySelectorAll method returns a NodeList of all elements that match the specified CSS selectors.
const allListItems = document.querySelectorAll("li");
console.log(allListItems);
