"use strict";

//! Object.create()

const job = {
  position: "cashier",
  type: "hourly",
  isAvailable: true,
  showDetails() {
    const accepting = this.isAvailable
      ? "is accepting applications"
      : "is not currently accepting applications";

    console.log(
      `The ${this.position} position is ${this.type} and ${accepting}.`
    );
  },
  coffee: {
    origin: "Brazil",
    colour: "Dark",
  },
};

// const barista = Object.create(job);

// barista.position = "barista";
// barista.showDetails();
// job.showDetails();

// !Object.create is a shallow copy only, meaning the 1st layer of an object

// barista.coffee.origin = "Ethiopia";

// console.log(barista.coffee.origin);
// console.log(job.coffee.origin);

//! Object.keys()

const employees = {
  boss: "Michael",
  secretary: "Pam",
  sales: "Jim",
  accountant: "Oscar",
};

// Get the keys of the object
const keys = Object.keys(employees);

console.log(keys);

// Iterate through the keys
Object.keys(employees).forEach((key) => {
  let value = employees.key;
  // let value = employees[key];

  console.log(`${key}: ${value}`);
});

// ?Practical uses

// Get the length of the keys
// const length = Object.keys(employees).length;
// console.log(length);

// If key exists

//! EX-1
// const salesExists = Object.keys(employees).includes("sales");
// console.log(salesExists);

//! EX-2

console.log(employees.hasOwnProperty("sales"));

//! Object.values()

const monthlyExpenses = {
  food: 400,
  rent: 1700,
  insurance: 550,
  internet: 49,
  phone: 95,
};

// Get the values of the object
const values = Object.values(employees);

// console.log(values);

// ?Practical uses

const monthlyTotal = Object.values(monthlyExpenses).reduce(
  (acc, expense) => acc + expense,
  0
);

// console.log(monthlyTotal);

//! Object.entries()
// Object.entries() creates a nested array of the key/value pairs of an object.

const obj = {
  name: "Daenerys",
  age: 18,
  house: "Targaryen",
  title: "Queen of the Andals, First of her name, Mother of dragons...",
};

// Get the entries of the object

// for (const key of Object.entries(obj)) {
//   console.log(key);
// }

for (const [key, value] of Object.entries(obj)) {
  // console.log(`${key}: ${value}`);
}

//! Object.assign()
// Object.assign() is used to copy values from one object to another.

const side1 = {
  firstName: "Aharon",
  lastName: "Barak",
};

const side2 = {
  first: "Yariv",
  last: "Levin",
};

// Merge the objects

// const merged = Object.assign(side1, side2);
// const merged2 = { ...side1, ...side2 };

// console.log(merged);
// console.log(merged2);

// ?Practical uses

// Copy an object

// const copy = Object.assign({}, side1);

// console.log(copy);

// Copy an object with a new value

const copy2 = Object.assign({}, side1, { lastName: "Kuritza" });

// console.log("copy2", copy2);

// Copy an object with a new value

const copy3 = { ...side1, lastName: "Mishu" };

// console.log("copy3", copy3);

//! Object.freeze()

// Object.freeze() is used to prevent an object from being changed.

const supremeCourt = {
  name: "Supreme Court of the state",
  reform: false,
};

// Freeze the object

// Object.freeze(supremeCourt);

// Try to change the object

supremeCourt.reform = true;

console.log(supremeCourt);

console.log(Object.isFrozen(supremeCourt));

//! Object.seal()

// Object.seal() is used to prevent new properties from being added to an object.

const supremeCourt2 = {
  name: "Supreme Court of the state",
  reform: false,
};

// Seal the object

Object.seal(supremeCourt2);

// Try to add a new property

// supremeCourt2.arieDeri = "Non-guilty";

console.log(supremeCourt2);

console.log(Object.isSealed(supremeCourt2));

//! Object.getOwnPropertyDescriptors

// Object properties, besides a value, have three special attributes (so-called “flags”):

// 1. writable – if true, the value can be changed, otherwise it’s read-only.
// 2. enumerable – if true, then listed in loops, otherwise not listed.
// 3. configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.

// let user = {
//   name: "John",
// };

// let descriptor = Object.getOwnPropertyDescriptor(user, "name");

// console.log(JSON.stringify(descriptor));

// To change the flags, we can use Object.defineProperty.
// Object.defineProperty(obj, propertyName, descriptor)

// let user = {
//   name: "John",
// };

// !Non-writable

// Object.defineProperty(user, "name", {
//   writable: false,
// });

// user.name = "Pete"; // Error: Cannot assign to read only property 'name'

// !Non-enumerable

let user = {
  name: "John",
  toString() {
    return this.name;
  },
};

for (let key in user) {
  console.log(key); // name, toString
}

Object.defineProperty(user, "toString", {
  enumerable: false,
});

for (let key in user) {
  console.log(key); // name
}

// !Non-configurable

let descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(JSON.stringify(descriptor));

Math.PI = 3; // Error, because it has writable: false

// delete Math.PI won't work either

// Error, because of configurable: false
Object.defineProperty(Math, "PI", { writable: true });

// There’s absolutely nothing we can do with Math.PI.
// Making a property non-configurable is a one-way road. We cannot change it back with defineProperty.
// Please note: configurable: false prevents changes of property flags and its deletion, while allowing to change its value.
// Here user.name is non-configurable, but we can still change it (as it’s writable):

let user = {
  name: "John"
};

Object.defineProperty(user, "name", {
  configurable: false
});

user.name = "Pete"; // works fine
delete user.name; // Error
