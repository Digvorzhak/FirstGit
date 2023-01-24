// Get the button element by its ID
const changeButton = document.getElementById("changeButton");

// Add an event listener to the button that will run a function when the button is clicked
changeButton.addEventListener("click", function () {

  // Change the text content of all <p> elements
  const paragraphs = document.getElementsByTagName("p");
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].innerHTML = "Changed!";
  }

  // Change the class attribute of all elements with class "change-me"
  const changeMe = document.getElementsByClassName("change-me");
  for (let i = 0; i < changeMe.length; i++) {
    changeMe[i].setAttribute("class", "changed");
  }

  // Change the color of all elements to blue
  const elements = document.querySelectorAll("*");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = "blue";
  }

  // Remove the element with ID "p3"
  const p3 = document.getElementById("p3");
  p3.parentNode.removeChild(p3);

  // Create a new element and append it to the <div> with ID "newDiv"
  const newElem = document.createElement("p");
  newElem.innerHTML = "This is a new element";
  const newDiv = document.getElementById("newDiv");
  newDiv.appendChild(newElem);
});

/*
  In the HTML code above, we have a button with an id of changeButton and several other elements(paragraphs, div). In the JavaScript code above, we are first getting the button element by its ID using the getElementById method. Then we are adding an event listener to the button that will run a function when the button is clicked. When the button is clicked, we are getting all the paragraphs by using getElementsByTagName method and we are changing the text content of all of them using the innerHTML property. Then we are getting all the elements with class "change-me" using getElementsByClassName method and we are changing the class attribute of all of them using the setAttribute method. Next, we are getting all the elements on the page using the querySelectorAll method and we are changing the color of all elements to blue by setting the color property of the style object.

  After that, we are getting the element with ID "p3" using the getElementById method, and removing it from the page using the parentNode.removeChild() method.

  Lastly, we are creating a new element using the createElement method, setting the innerHTML property, getting the <div> with ID "newDiv" using the getElementById method, and appending the new element to the <div> using the appendChild method.

  In this way, the DOM API and JavaScript provides a powerful set of methods and properties that allow to manipulate the HTML and CSS of the page, adding, removing and changing elements and styles, handling events and creating new ones.
*/

