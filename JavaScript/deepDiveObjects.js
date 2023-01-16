'use strict';

/*
  The following example creates an object called person which has several properties such as name, age, and address. 
  The address property itself is an object which contains street, city, state and zip. 
  Also, it has a method getFullAddress which returns the full address of the person.
  It's also worth noting that objects in JavaScript are dynamic, meaning you can add or remove properties and methods at any time.  
*/
const person = {
  name: "John Smith",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345"
  },
  getFullAddress: function () {
    return `${this.address.street}, ${this.address.city}, ${this.address.state} ${this.address.zip}`;
  }
};

// Creating objects
let obj = {
  key: "value",
  key2: "value2"
};

// Object constructor
obj = new Object();
obj.key = "value";
obj["key2"] = "value2";
// { key: 'value', key2: 'value2' }

// Accessing properties 
obj = {
  key: "value"
};
console.log(obj.key); // "value"
console.log(obj["key"]); // "value"


// Modifying properties
obj = {
  key: "value"
};
obj.key = "new value";
console.log(obj.key); // "new value"

obj["key"] = "new value 2";
console.log(obj["key"]); // "new value 2"


// Adding properties
obj = {};
obj.key = "value";
console.log(obj.key); // "value"

obj["key2"] = "value2";
console.log(obj["key2"]); // "value2"

// Removing properties
obj = {
  key: "value",
  key2: "value2"
};

delete obj.key;
console.log(obj); // {key2: "value2"}
delete obj["key2"];
console.log(obj); // {}

// Property existence
obj = {
  key: "value",
  key2: "value2"
};
console.log("key" in obj); // true
console.log("key3" in obj); // false

console.log(obj.hasOwnProperty("key")); // true
console.log(obj.hasOwnProperty("key3")); // false


// Methods in objects
obj = {
  key: "value",
  logKey: function () {
    console.log(this.key);
  }
};
obj.logKey(); // "value"

// The 'this' keyword
obj = {
  key: "value",
  logKey: function () {
    console.log(this.key);
  }
};

let obj2 = { key: "value2" };
obj.logKey.call(obj2); // "value2"

/*
  In the above example, we are calling the method "logKey" of obj but using call method with obj2 as an argument, 
  so the "this" inside the method now refers to obj2. 
*/

/*
  the factorial method is defined within the obj object. Inside the method, the base case is when n is equal to 0, in which case the function returns 1. If n is greater than 0, the function calls itself with the argument n-1 and multiplies the result by n. This process continues until the base case is reached.
*/
obj = {
  factorial: function (n) {
    if (n === 0) {
      return 1;
    } else {
      return n * this.factorial(n - 1);
    }
  }
};
console.log(obj.factorial(5)); // Outputs: 120

/*
  It's important to note that when the function calls itself, it must use this keyword to access the method, since the function is defined within the object and not in the global scope.

  It's also important to be careful when using recursion, as it can lead to a stack overflow if not implemented correctly.
*/

// Inheritance & prototypes
obj = { key: "value" };
obj2 = Object.create(obj);
console.log(obj2.key); // "value"

/*
  In the above example, we are creating a new object obj2 using Object.create() method and passing obj as the first argument, 
  so obj2 inherits properties and methods from obj.
*/

// Prototype chain
// Object.getPrototypeOf
obj = { key: "value" };
obj2 = Object.create(obj);
console.log(Object.getPrototypeOf(obj2) === obj); // true


// Built in Objects
const arr = new Array();
const str = new String();
const num = new Number();
const date = new Date();
console.log(Math.PI); // 3.141592653589793


// Lodash library example (We first need to install the lodash library using NPM or Yarn)
let _ = require("lodash");
arr = [1, 2, 3, 4, 5];
console.log(_.reverse(arr)); // [5, 4, 3, 2, 1]

/*
  In the above example, we are importing lodash library, then using it's "reverse" method.
*/


// Looping objects
obj = { key1: "value1", key2: "value2", key3: "value3" };
for (let key in obj) {
  console.log(key);
  console.log(obj[key]);
}
/*
  Output: 
    "key1"
    "value1"
    "key2"
    "value2"
    "key3"
    "value3"
*/

// Object.keys()
obj = { key1: "value1", key2: "value2", key3: "value3" };
console.log(Object.keys(obj)); // ["key1", "key2", "key3"]

// Object.values()
console.log(Object.values(obj)); // ["value1", "value2", "value3"]

/*
  Object.entries()
  The Object.entries() method in JavaScript returns an array of arrays, where each inner array represents a key-value pair from the original object. Here's an example of using Object.entries() to loop over the key-value pairs of an object:
*/
obj = {
  a: 1,
  b: 2,
  c: 3
};

const entries = Object.entries(obj);
console.log(entries); // Output: [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

for (const [key, value] of entries) {
  console.log(`Key: ${key}, Value: ${value}`);
}
/*
  Output:
    Key: a, Value: 1
    Key: b, Value: 2
    Key: c, Value: 3
*/

// Computed property names
let key = "name";
obj = {
  ["key" + key]: "value"
};
console.log(obj); // {keyname: "value"}


// Property value shorthand
key = "value";
obj = { key };
console.log(obj); // {key: "value"}

// Method definition shorthand
obj = {
  callMethod() {
    console.log("method called");
  },
  /*
  callMethod: function () {
      console.log("method called");
  }
  */
};
obj.callMethod(); // "method called"



// Destructuring objects
let hero = {
  name: 'Batman',
  realName: 'Bruce Wayne'
};
var { name, realName } = hero;

console.log(name, realName); // Batman Bruce Wayne

// Default values
const { enemy = 'Joker' } = hero;
console.log(enemy); // 'Joker'

// Aliases
const { realName: secretName } = hero;
console.log(secretName); // Bruce Wayne
console.log(realName); // Uncaught ReferenceError: realName is not defined

// Extracting properties from nested objects
hero = {
  name: 'Batman',
  realName: 'Bruce Wayne',
  address: {
    city: 'Gotham'
  }
};
const { address: { city } } = hero;
console.log(city); // 'Gotham'

// Set Dynamic Property Keys with ES6
let cake = '🍰';

let pan = {
  id: 1,
  [cake]: '🥞',
};

/*
  Extracting a dynamic name property
  You can extract to variables properties with a dynamic name (the property name is known at runtime):
  Syntax: const { [propName]: identifier } = expression;
  propName expression should evaluate to a property name (usually a string), and the identifier should indicate the variable name created after the destructuring. The second expression should evaluate to the object you'd like to destructure.

  An equivalent code without object destructuring:
  const identifier = expression[propName];
*/
hero = {
  name: 'Batman',
  realName: 'Bruce Wayne'
};
const prop = 'name';
const { [prop]: name } = hero;
console.log(name); // Batman
/*
  const { [prop]: name } = hero is an object destructuring that assigns to variable name the value hero[prop], where prop is a variable holding the property name.
*/

// Combine for..of cycle with object destructuring to extract the property right away:
const heroes = [
  { name: 'Batman' },
  { name: 'Joker' }
];

for (const { name } of heroes) {
  console.log(name); // logs 'Batman', 'Joker'
}

// Function parameter destructuring
heroes = [
  { name: 'Batman' },
  { name: 'Joker' }
];
const names = heroes.map(
  function ({ name }) {
    return name;
  }
);
console.log(names); // ['Batman', 'Joker']

// Rest object after destructuring
hero = {
  name: 'Batman',
  realName: 'Bruce Wayne',
  age: 36,
};
const { name, ...moreInfo } = hero;
console.log(moreInfo); // => { realName: 'Bruce Wayne', age: 36 }

// use destructuring assignment with the for...of loop
obj = { key1: "value1", key2: "value2" };
for (let { key, value } of Object.entries(obj)) {
  console.log(key, value); // "key1" "value1" and "key2" "value2"
}

