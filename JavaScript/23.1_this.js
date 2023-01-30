// Question 1

console.log(this); // {}. in the global scope this is referring to the global object.

// Question 2

const myObj = {
  name: "Timmy",
  greet: () => {
    console.log(`Hello ${this.name}`); // It will point to global scope, because it's an arrow function.
  },
};

myObj.greet();

const myObj1 = {
  name: "Timmy",
  greet() {
    console.log(`Hello ${this.name}`); // Fixed.
  },
};
myObj1.greet();

// Question 3

const myFuncDec = function () {
  console.log(this); // Will point to global object
};

myFuncDec();

// Question 4

const myFuncArrow = () => {
  console.log(this); // Will point to global because it's an arrow function.
};
myFuncArrow();

// Question 5

document.querySelector(".element").addEventListener("click", () => {
  console.log(this); // will Point to global because it's an arrow function.
});

document.querySelector(".element").addEventListener("click", function () {
  console.log(this); // Fixed.
});
