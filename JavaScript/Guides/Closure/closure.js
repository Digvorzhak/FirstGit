/*
  * JavaScript uses lexical scoping to resolve the variable names when a function is created inside another function. It determines how variable names are resolved in nested functions or code blocks.

  * This means that variables defined in the global scope are visible in every code block (functions, if blocks, loops and objects) inside the global scope, or inside any nested code blocks (children) inside the scope where the variables were defined. 
  
  * In other words, functions, loops and objects, can access variables that are living out side of them, in their parents or in the the global scope, but not in their sibling code blocks.

  * Lexical Scope is often confused with closures, but lexical scope is only an important part of closure.
*/

// * This code makes sense, since the 'passed' parameter and the 'inner' variable, are inside the scope of the function. Nothing out of the ordinary here...
const someFunction = (passed) => {
  const inner = 2;
  return passed + inner;
};

// * In the following example, the variable 'aVariable' in line 22, 
// * which is declared inside of the scope of the 'anotherFunction' function, 
// * is visible only to the 'anotherFunction' function, and is not visible to the 'someOtherFunction' function, 
// * because the scope of this variable is only inside the function 'anotherFunction'.
const anotherFunction = (val) => {
  const aVariable = val + 9;
  return aVariable;
};


// * Here, the variables 'outer1' and 'outer2' are available to the function 'someOtherFunction' because of lexical scoping. 
// * Because those variables are in global scope of the file.
const outer1 = 3;
const outer2 = 4;

const someOtherFunction = () => {
  const inner = 2;
  if (outer1 >= 3) {
    return outer1 + inner;
  } else {
    // Here we see that the variable 'outer2' is accessible inside the code block of the else statement, because this variable is in the global scope.
    // And the 'inner' variable is also accessible because of lexical scoping, because it is defined inside its parent's scope.
    return outer2 + inner;
  }
};


// * It is important to note that closure is created when we DEFINE a function, NOT when a function is EXECUTED. *
// * So the definition of closure is when a function has access to the parent scope, EVEN AFTER THE PARENT FUNCTION HAS CLOSED. *
// * And that's a way to create a private variable. * 

// Here we created the parent function 'incrementByFive'
const incrementByFive = () => {
  // We created a private variable
  let privateValue = 0;

  // * Here we create closure, so each time that the this returned function will run, it will increment by 5.
  const addFive = () => {
    // * Here I assign a dynamic outcome of the mathematical action!
    return privateValue = privateValue + 5;
  };

  return addFive;
};

// here we are receiving the 'addFive' function, that was returned in line 53
// And now increment is function that has a private value, that will always increment by 5.
const increment = incrementByFive();

console.log(increment()); // 5
console.log(increment()); // 10
console.log(increment()); // 15
console.log(increment()); // 20
console.log(increment()); // 25
// ! console.log(privateValue); // Will throw a ReferenceError: privateValue is not defined
// * Because 'privateValue' is not defined in the global scope. It is now saved inside the 'increment' function as a private value, and only accessible inside this function. And it keeps on living, even though the parent function 'incrementByFive' has closed.


// Here we pass the argument 'outer' to the function
const addTo = (outer) => {
  // We initialize an inner function called 'add', that receives an argument called 'inner'.
  // This function will return the result of 'outer' plus 'inner'.
  const add = (inner) => {
    // 'add' takes the 'outer' variable and it adds it to 'inner' variable and then returns it
    // * Here I return NOT AN ASSIGNMENT - I RETURN A RESULT OF THE ACTION
    return outer + inner;
  };

  // * In the end we just returning the 'add' function. We are NOT calling it!
  return add;
};

// ? So what will be the result of this action?
addTo(3);

// * It will return the function 'add' that we defined in lines 74-84, without invoking it,
// * BUT now it will have a closure with the value of 3!

// * I called this function 'addThree' because now, with closure, it has the variable 'outer' with the value of 3 EVEN AFTER THE PARENT FUNCTION HAS CLOSED!

// * So now this function will ALWAYS return the number we pass to it plus 3.
// * AND THIS IS CLOSURE!
const addThree = addTo(3);

console.log(addThree(10)); // 13


// * REAL LIFE USE CASES FOR USING CLOSURES *

// * Creating private variables and methods:
// * A IIFE that returns a public method and a private variable
const privateCounter = (() => {
  let count = 0;

  return {
    increment() {
      // count++;
      return ++count;
    },
  };
})();

console.log(privateCounter.increment()); // Output: 1
console.log(privateCounter.increment()); // Output: 2


// * Creating a function factory:
// * A function that returns a function for calculating the nth power of a number
function powerOf(n) {
  return function (x) {
    return Math.pow(x, n);
  };
}

const square = powerOf(2);
console.log(square(5)); // Output: 25

// * Creating closures for event handlers.
/*
  * The function passed to button.addEventListener is a closure because it has access to the variable i which is declared in the parent scope of the function, even after the setupButtons function has finished executing.

  * When the button is clicked, the function is executed and it logs the current value of i in the console. Without closure, the function would always log 'Button 5' because the for loop would have completed and the value of i would be 5. However, by creating a closure, the function retains access to the current value of i at the time of the event listener being added, so when the button is clicked, the correct button number is logged in the console.
*/
function setupButtons() {
  for (let i = 0; i < 5; i++) {
    const button = document.createElement('button');
    button.innerHTML = 'Button ' + i;

    // Using closure to keep track of the current value of i
    button.addEventListener('click', function () {
      console.log('Button ' + i + ' was clicked');
    });

    document.body.appendChild(button);
  }
}


// * Here's an example of how the useState hook in a functional component uses closures behind the scenes:
/*
  * In the code bello, the callback passed to the setCount function is a closure because it has access to the currentCount variable,    which is declared in the parent scope of the callback.
*/
// import { useState } from 'react';

export default function MyComponent() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(currentCount => {
      // The callback passed to setCount is a closure, 
      // which has access to the current count.
      return currentCount + 1;
    });
  };

  return (
    <>
      <button onClick={increment}>Increment</button>
      <p>Count: {count}</p>
    </>
  );
}

/*
  * In the above code, the increment function uses the setCount function from the useState hook which accepts a callback that updates the state, in this case the state is the count, and the callback passed to setCount is a closure, which has access to the current count.
*/


