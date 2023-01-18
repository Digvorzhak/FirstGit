const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const multiplyBy100 = 0;

const calcBalance = (movements) => {
  // Reduce -> get the sum of the array elements
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  console.log(`Your balance is ${balance}€`);
};


const calcDisplaySummary = (movements) => {
  const incomes = movements
    .filter(mov => mov > 0) // filter and return an array with only the items matching the condition
    .reduce((acc, mov) => acc + mov, 0);
  console.log(`The sum of incomes is ${incomes}€`);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  console.log(`The sum of withdrawals is ${Math.abs(out)}$`);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100) // return an array with items that are the result of the manipulation we do
    .filter((int) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  console.log(`The total interest is ${interest}$`);
};

const fullNames = ["Ori Baram", "Eric Chukoltyansky", "Tammy Golandisky"];

const userNames = fullNames.map(fullName => fullName.toLowerCase().split(" ").map((n) => n[0][0]).join(""));

console.log(userNames);

const ori = fullNames.find((name) => name.includes("Ori"));

console.log(ori);

const longNames = fullNames.filter((name) => name.length > 10);
console.log(longNames);




