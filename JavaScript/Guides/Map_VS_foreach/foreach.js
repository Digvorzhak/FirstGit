// * Use cases where it might be more appropriate to use the forEach() method instead of map():

/*
  * When you need to modify the original array. forEach() allows you to modify the elements of an array directly, while map() returns a new array with the modified elements.
*/

/* 
* The function passed to forEach receives three arguments:
  * The current element of the array - This argument represents the current element that is being processed in the array. It contains the value of the current element.

  * The current index (index) - This argument represents the index of the current element that is being processed in the array. It is a zero-based index, so the first element will have an index of 0, the second element will have an index of 1, and so on.
  
  * The array being iterated over -  This argument represents the array that the forEach() method is being called on. It allows you to access the whole array, and in some cases you can manipulate the array using the array argument.

  * These arguments give you a lot of flexibility in how you choose to process the elements in the array. You can use the current element to perform operations on the current element, the index to keep track of the current element's position in the array and the array to manipulate the array if it is necessary.

*/

/*
  * In the following example, the forEach() method is called on the students array. The function passed to forEach() receives three arguments: the current element of the array (student), the current index (index), and the array being iterated over (students).

  * Inside the function, we are using the index argument to check if the current student is the first, second or last element in the array.

  * You can see that the index argument is used to check the position of the current element in the array and based on that, specific actions are performed, this way you can use the current index and the array to perform checks, comparisons or whatever you want.
*/
let students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 90 },
  { name: "Charlie", grade: 80 },
  { name: "David", grade: 92 },
  { name: "Eve", grade: 75 },
];

students.forEach(function(student, index, students) {
  // check if student is the last element of the array 
  if (index === students.length - 1) {
      console.log(`${student.name} is the last student in the array`);
  }
  // check if student is the first element of the array 
  if (index === 0) {
      console.log(`${student.name} is the first student in the array`);
  }
  // check if student is the second element of the array 
  if (index === 1) {
      console.log(`${student.name} is the second student in the array`);
  }
});


/*
  * In this example, we are using the forEach() method on an array of objects representing products. The function calculateDiscount is passed to the forEach() method and for each element of the array of products, the function is called and receives the current element, index and array as its argument. Inside the function, we are checking if the currentValue's category is 'Electronics' and if it is, we are reducing the price by 20% using the array argument to update the value of the price. And in the end, we are console.log the products array to see the changes. 
*/
const products = [
  { name: 'Product 1', price: 100, category: 'Electronics' },
  { name: 'Product 2', price: 50, category: 'Clothing' },
  { name: 'Product 3', price: 75, category: 'Home & Kitchen' },
  { name: 'Product 4', price: 120, category: 'Outdoors' },
  { name: 'Product 5', price: 90, category: 'Electronics' }
];

// The function that will be passed to forEach()
const calculateDiscount = (currentValue, index, array) => {
  if (currentValue.category === 'Electronics') {
      array[index].price = currentValue.price * 0.8;
  }
}

products.forEach(calculateDiscount);
console.log(products);


/*
  * In this example, we have an array of products and we want to find the most expensive product. We are using the forEach() method on  the array of products and the function findMaxPrice is passed to the forEach() method and for each element of the array of products, the function is called and receives the current element, index and array as its argument. Inside the function, we are using the currentValue.price to compare with the maxPrice and if the current element is more expensive than maxPrice, we are updating the maxPrice with the current element's price and also using the array argument to add a new property isMostExpensive to the current element. And in the end, we are console.log the products array to see the changes.
*/
let maxPrice = 0;
const findMaxPrice = (currentValue, index, array) => {
  if (currentValue.price > maxPrice) {
      maxPrice = currentValue.price;
      array[index].isMostExpensive = true;
  }
}


// * We can pass an anonymous function to the forEach method
products.forEach((currentValue, index, array) => {
  if (currentValue.price > maxPrice) {
      maxPrice = currentValue.price;
      array[index].isMostExpensive = true;
  }
});

// * We can also pass a named function (Note that we are not invoking the function. The forEach method receives the function as an argument and it will invoke the function in each iteration)
products.forEach(findMaxPrice);
console.log(products);


/* 
  * Using the forEach() method to multiply each element of the array by 2.
  * Here we are modifying the original array. 
  * This is a side effect.
*/
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number, i) {
    numbers[i] = number * 2;
});
console.log(numbers); // [2, 4, 6, 8, 10]


// *  So we will use forEach when we want to execute a side effect, such as saving to a database, displaying in the UI, or triggering an event (Read more about side effects in the md file).
students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 90 },
  { name: "Charlie", grade: 80 },
];

const db = {};

function saveToDb(name, grade) {
  // insert the student's name and grade into the "database"
  db[name] = grade;
}

// Using the forEach() method to save each student's grade to a database
students.forEach(student => {
    saveToDb(student.name, student.grade);
});


// * When we don't need to return a new array, and we just want to perform an operation on each element of the array. This is also a side effect, because we print something to console.
const words = ['hello', 'world'];

// Using the forEach() method to print each word to the console
words.forEach(word => console.log(word));


