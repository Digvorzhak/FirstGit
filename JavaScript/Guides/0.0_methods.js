"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ["a", "b", "c", "d", "e"];

// SLICE - RETURNS A SLICED ARRAY AND NOT THE VALUE OF THE SLICED ELEMENTS.
// LOOK AT THE EXAMPLE DOWN BELOW FOR GETTING THE VALUES.

console.log(arr.slice(2)); // from arr[2] till the end of the array.

console.log(arr.slice(2, 4)); // from arr[2] to arr[3]. arr[4] is not included

console.log(arr.slice(-2)); // the two last elements. arr[3] and arr[4]

console.log(arr.slice(-1)); // the last element. arr[4]

console.log(arr.slice(1, -2)); // from arr [1] to everything until arr[2]

console.log(arr.slice()); // same array, to make a copy

console.log([...arr]); // same array, to make a copy

// SPLICE

// console.log(arr.splice(2)); // same as slice but now arr is mutated.

arr.splice(-1); // the original array without the last element

arr.splice(1, 2); // from arr[1] to arr[2]. arr[2] IS INCLUDED

console.log(arr);

// REVERSE
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2);
console.log(arr2.reverse()); // reversed array. [ "f", "g", "h", "i", "j" ]
console.log(arr2); // REVERSE mutates the array

// CONCAT - MERGING 2 ARRAIES
const letters = arr.concat(arr2); // letters is arr1 + arr2
console.log(letters);
console.log([...arr, ...arr2]); // SAME THING WITHOUT USING CONCAT

// JOIN - Returns a string of all the elements separated by the parameter.
console.log(letters.join(" - "));

// PUSH - Adds element to the end of the array, returns the length of the array
letters.push("k");
console.log(letters);

// UNSHIFT - Adds element to the beginning of the array, returns the length of the array
letters.unshift("check");
console.log(letters);

// POP - Removing the last element, returns the removed element.
letters.pop();
console.log(letters);

// SHIFT - Removes the first element, returns the removed element.
letters.shift();
console.log(letters);

// indexOf - Returns the value of the index of the element you pick.
console.log(letters.indexOf("e")); // so in this case it returns 4.
console.log(letters.indexOf("m")); // 'm' does not exist so it returns -1.

// includes - Returns false or true depends if the element exist.
console.log(letters.includes("f")); // so in this case it returns true.
console.log(letters.includes("n")); // so in this case it returns false.

let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// some - Returns false or true depends if the condition happens at least one element
const anyDeposits = movements.some((mov) => mov > 0);
console.log(anyDeposits);

// every - Returns false or true depends if the conditions happens for every element
console.log(movements.every((mov) => mov > 0));
console.log(account4.movements.every((mov) => mov > 0));

arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0)); // same as doing arr[0]

// GETTING THE LAST ARRAY ELEMENT

console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]); // same as arr[arr.length - 1]

// AT - returns the value of the element. Works with strings as well.

console.log(arr.at(-1)); // getting the last element easier than slice. so 64.

console.log(arr.at(-2)); // getting the element in positon 2 from the end. so 11.

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }

// FOR EACH LOOP

movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(400)

// first parameter is the element, second parameter is the index, third parameter is the array

// Map

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set - enter anything with length to a set to find out how many unique elements or characters. You can use spread to return the result back from the set.

const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});

// MAP METHOD - SAME AS FOR EACH BUT RETURNS A NEW ARRAY INSTEAD OF MUTATING THE CURRENT ONE

movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});
console.log(movements, movementsUSD);

const movementsUSD1 = movements.map((mov) => mov * eurToUsd);
console.log(movementsUSD1);

const movementDescriptions = movements.map((mov, i, arr) => {
  return `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(mov)}`;
});

console.log(movementDescriptions);

// FILTER

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);

const withdrawals = movements.filter((mov) => mov < 0);

console.log(withdrawals);

// REDUCE

// console.log(movements);
// const balance = movements.reduce(function (accum, cur, i, arr) {
//   return accum + cur;
// }, 0);
// console.log(balance);

const balance2 = movements.reduce((accum, cur) => accum + cur, 0);
console.log(balance2);

// Maximum Value

const max = movements.reduce((accum, cur) => (cur > accum ? (accum = cur) : accum));
console.log(max);

// FIND - RETURNS THE FIRST ELEMENT ACCORDING TO CONDITION

const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(account);

let accountSearcher = "";
for (const x of accounts) {
  if (x.owner === "Jessica Davis") accountSearcher = x;
}
console.log(accountSearcher);

// FLAT - removes the nested arrays and puts all the elements in one single array

const arr1 = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr1.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

const allAccountsMovements = accounts.map((acc) => acc.movements);
console.log(allAccountsMovements);
const allMovements = allAccountsMovements.flat();
console.log(allMovements);
const sumAllMovements = allMovements.reduce((accum, mov) => accum + mov, 0);
console.log(sumAllMovements);

const overallBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((accum, mov) => accum + mov, 0);
console.log(overallBalance);

// FLATMAP - maps and then removes the nested arrays and puts all the elements in one single array

const overallBalance1 = accounts.flatMap((acc) => acc.movements).reduce((accum, mov) => accum + mov, 0);
console.log(overallBalance1);

// SORT

const owners = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owners.sort());

console.log(movements);

// SORTING NUMBERS -
// return < 0 TO KEEP ORDER
// return > 0 TO SWITCH ORDER
movements.sort((a, b) => a - b); //if a - b is negative it will keep the order and if its positive it will switch

console.log(movements);

movements.sort((a, b) => b - a);

console.log(movements);

// FILL - FILLING AN EXISTING ARRAY

const arr5 = [1, 2, 3, 4, 5, 6, 7];
arr5.fill(1);
console.log(arr5);
arr5.fill(23, 2, 6);
console.log(arr5);

// Array.from - CREATING AND FILLING ARRAY

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

const randomArray = Array.from({ length: 100 }, (random) => Math.trunc(Math.random() * 6) + 1);
console.log(randomArray);

// ------------------STRING METHODS--------------------------

///////////////////////////////////////
// Working With Strings - Part 1

// Split and join
console.log("a+very+nice+string".split("+"));
console.log("Jonas Schmedtmann".split(" "));

const [firstName, lastName] = "Jonas Schmedtmann".split(" ");

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("jessica ann smith davis");
capitalizeName("jonas schmedtmann");

// Padding
const message = "Go to gate 23!";
console.log(message.padStart(20, "+").padEnd(30, "+"));
console.log("Jonas".padStart(20, "+").padEnd(30, "+"));

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard("334859493847755774747"));

// Repeat
const message2 = "Bad waether... All Departues Delayed... ";
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"🛩".repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);

///////////////////////////////////////
// Working With Strings - Part 2

let airline = "TAP Air Portugal";

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = "jOnAS"; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = "hello@jonas.io";
const loginEmail = "  Hello@Jonas.Io \n";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const announcement = "All passengers come to boarding door 23. Boarding door 23!";

console.log(announcement.replace("door", "gate"));
// console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, "gate"));

// Booleans
const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Airb"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the NEW ARirbus family");
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board");
  } else {
    console.log("Welcome aboard!");
  }
};

checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");

///////////////////////////////////////
// Working With Strings - Part 3

airline = "TAP Air Portugal";
const plane1 = "A320";

console.log(plane1[0]);
console.log(plane1[1]);
console.log(plane1[2]);
console.log("B737"[0]);

console.log(airline.length);
console.log("B737".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("portugal"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got the middle seat 😬");
  else console.log("You got lucky 😎");
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(new String("jonas"));
console.log(typeof new String("jonas"));

console.log(typeof new String("jonas").slice(1));
