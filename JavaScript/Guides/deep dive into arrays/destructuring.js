// * destructuring === חילוץ, פירוק, המערך *

const categories = ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'];

// ! Can do this.... !
const italian = categories[0];
const pizzeria = categories[1];
const vegetarian = categories[2];
const organic = categories[3];

// * Better do this *
// const [italian, pizzeria, vegetarian, organic] = categories;

let one = 1;
let two = 2;


//Switching variables
const temp = one;
one = two;
two = temp;

// *
const numbers = [one, two];

// * The original array is not effected! *
// [one, two] = [two, one];

console.log(one, two);

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Destructuring with skipping elements
const [, monday, tuesday, , , friday] = days;

console.log(monday, tuesday, friday);

const getDays = (dayNum1, dayNum2) => {
  if (dayNum1 > 7 || dayNum1 < 0 || dayNum2 > 7 || dayNum2 < 0) {
    return "invalid number!";
  }
  const daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const resultArray = [daysArray[dayNum1 - 1], daysArray[dayNum2 - 2]];
  return resultArray;
};

// Destructuring an array we got back from the function
const [sunday, wednesday] = getDays(1, 4);

// destructuring nested arrays
const nested = [2, 4, [5, 6]];
const [b, , l] = nested;
console.log(b, l);

const [i, , [j, k]] = nested;
console.log(i, j, k)

//Set default values
const [p = null, q = null, r = null] = [8, 5];
console.log(p, q, r);