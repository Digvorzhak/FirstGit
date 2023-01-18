// * Rest Pattern | The reverse of the spread operator *
// * Pack elements to an array *

// ? Spread -> on the RIGHT side of the ASSIGNMENT ?
// ? Rest -> on the LEFT side of the ASSIGNMENT ?

// ? Spread -> Expand
// ? Rest -> Compress

// * REST -> takes the rest of the elements and puts them in a new array *
// * REST -> IT MUST BE THE LAST IN THE NEW ARRAY *

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const [a, b, c, ...rest] = arr1;
console.log(a, b, c, rest);

// Combine rest with spread
const mainMenu = ['Pizza', 'Pasta', 'Risotto'];
const sideMenu = ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'];

const [focaccia, , garlicBread, ...others] = [...sideMenu, ...mainMenu];

console.log(focaccia, garlicBread, others);

// In a function declaration it is Rest
const printNumbers = (...numbers) => {
  console.log(numbers);
};

// In a function execution it is Spread
printNumbers(...arr1); //* = printNumbers(1, 2, 3, 4, 5);

// While declaring a function -> the '...' notation is referring to rest
const sumNumbers = (...numbers) => {
  console.log(numbers.reduce((prev, cur) => prev + cur, 0));
};

// While executing a function -> the '...' notation refers to spread
sumNumbers(...arr1);

// Here we order a pizza, with the main ingredient as *one parameter*, and the rest can be any amount of parameters
const orderPizza = (mainIngredient, ...otherIngredients) => {
  console.log(`Here is your Pizza with ${mainIngredient} and ${[...otherIngredients]}`);
};

orderPizza("extra cheese", "olives", "pineapple", "pepper", "corn", "onion", "mushrooms");