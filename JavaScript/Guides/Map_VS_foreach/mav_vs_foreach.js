/*
  * Both map() and forEach() can be used to iterate over an array and perform an operation on each element
  * map() returns a new array with the results of the operation. 
  * forEach() modifies the original array (or another array) and does not return anything.
*/

/*
  ? When deciding whether to use the map() or forEach() method, it's important to consider the following:
    ? The return value: map() returns a new array with the modified elements, while forEach() does not return anything. If you need a new array with the modified elements, map() is the appropriate method. If you want to modify the original array or perform a side effect (See md file about Side Effects), forEach() is the appropriate method.

    ? Chaining: map() returns a new array and can be chained with other array methods. forEach() does not return anything and cannot be chained with other array methods.

    ? Use case: If you want to transform the data and return a new array with the modified data, you should use map(). If you want to perform a side effect like saving to a database, displaying in the UI, or triggering an event, you should use forEach().
*/

const words = ['hello', 'world'];

// Using the map() method to extract an array of the length of each word.
const lengths = words.map(word => word.length);
console.log(lengths); // [5, 5]

// Using the forEach() method to extract an array of the length of each word.
const wordLengths = [];
words.forEach(word => wordLengths.push(word.length));
console.log(wordLengths); // [5, 5]


const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
];

// Using the map() method to extract an array of the book titles from the original array of book objects.
const titles = books.map(book => book.title);
console.log(titles); // ["The Great Gatsby", "To Kill a Mockingbird", "The Catcher in the Rye"]

// Using the forEach() method to extract an array of the book titles from the original array of book objects.
const bookTitles = [];
books.forEach(book => bookTitles.push(book.title));
console.log(bookTitles); // ["The Great Gatsby", "To Kill a Mockingbird", "The Catcher in the Rye"]


const students = [
  { name: "Alice", grades: [90, 85, 80] },
  { name: "Bob", grades: [75, 80, 85] },
  { name: "Charlie", grades: [70, 75, 80] },
];

// Using the map() method to extract an array of the average grade for each student.
const averageGrades = students.map(student => {
  const sum = student.grades.reduce((a, b) => a + b);
  return sum / student.grades.length;
});
console.log(averageGrades); // [85, 80, 75]

// Using the forEach() method to extract an array of the average grade for each student.
const studentAverages = [];
students.forEach(student => {
  const sum = student.grades.reduce((a, b) => a + b);
  studentAverages.push(sum / student.grades.length);
});
console.log(studentAverages); // [85, 80, 75]


const users = [
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 30, city: "San Francisco" },
  { name: "Charlie", age: 35, city: "Los Angeles" },
];

// Using the map() method to extract an array of the user's name and age.
const userData = users.map(user => {
  return { name: user.name, age: user.age };
});
console.log(userData); // [{name: "Alice", age: 25}, {name: "Bob", age: 30}, {name: "Charlie", age: 35}]

// Using the forEach() method to extract an array of the user's name and age.
const userInfo = [];
users.forEach(user => userInfo.push({ name: user.name, age: user.age }));
console.log(userInfo); // [{name: "Alice", age: 25}, {name: "Bob", age: 30}, {name: "Charlie", age: 35}]


const sales = [
  { item: "item1", quantity: 2, price: 10 },
  { item: "item2", quantity: 3, price: 20 },
  { item: "item3", quantity: 4, price: 30 },
];

// Using the map() method to extract an array of the total revenue for each item sold.
const revenue = sales.map(sale => sale.quantity * sale.price);
console.log(revenue); // [20, 60, 120]

// Using the forEach() method to extract an array of the total revenue for each item sold.
const totalRevenue = [];
sales.forEach(sale => totalRevenue.push(sale.quantity * sale.price));
console.log(totalRevenue); // [20, 60, 120]


const products = [
  { name: "item1", stock: 10, price: 20, category: "electronics" },
  { name: "item2", stock: 15, price: 25, category: "books" },
  { name: "item3", stock: 20, price: 30, category: "books" },
  { name: "item4", stock: 25, price: 35, category: "books" },
];

// Using the map() method to extract an array of the total revenue for each category.
const revenueByCategory = products.map(product => {
  const totalRevenue = product.stock * product.price;
  return { "category": product.category, "revenue": totalRevenue };
});
console.log(revenueByCategory);

// Using the forEach() method to extract an array of the total revenue for each category.
const revenueByCat = [];
products.forEach(product => revenueByCat.push({ category: product.category, revenue: product.stock * product.price }));
console.log(revenueByCat);
