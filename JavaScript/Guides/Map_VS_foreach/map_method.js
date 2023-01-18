// * Here we are using the map() method to extract an array of the words lengths from the original array of words objects.
const words = ['hello', 'world'];

const lengths = words.map(word => word.length);

console.log(lengths); // [5, 5]

// * Here we are using the map() method to extract an array of the book titles from the original array of book objects.
const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
];

const titles = books.map(book => book.title);
console.log(titles); // ["The Great Gatsby", "To Kill a Mockingbird", "The Catcher in the Rye"]


// * Here we are using the map() method to extract an array of the average grade for each student.
let students = [
  { name: "Alice", grades: [90, 85, 80] },
  { name: "Bob", grades: [75, 80, 85] },
  { name: "Charlie", grades: [70, 75, 80] },
];

const averageGrades = students.map((student) => {
  const sum = student.grades.reduce((a, b) => a + b);
  return sum / student.grades.length;
});
console.log(averageGrades); // [85, 80, 75]


// * Here we are using the map() method to extract an array of the user's name and age.
const users = [
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 30, city: "San Francisco" },
  { name: "Charlie", age: 35, city: "Los Angeles" },
];

const userData = users.map((user) => {
  return { name: user.name, age: user.age };
});
console.log(userData);
/* 
  [
    {name: "Alice", age: 25}, 
    {name: "Bob", age: 30}, 
    {name: "Charlie", age: 35}
  ]
*/


// * Here we are using the map() method to extract an array of the total revenue for each item sold.
const sales = [
  { item: "item1", quantity: 2, price: 10 },
  { item: "item2", quantity: 3, price: 20 },
  { item: "item3", quantity: 4, price: 30 },
];

const revenue = sales.map(sale => sale.quantity * sale.price);
console.log(revenue); // [20, 60, 120]


// * Here we are using the map() method to extract an array of the total revenue for each category.
let products = [
  { name: "item1", stock: 10, price: 20, category: "electronics" },
  { name: "item2", stock: 15, price: 25, category: "books" },
  { name: "item3", stock: 20, price: 30, category: "books" },
  { name: "item4", stock: 25, price: 35, category: "books" },
];

const revenueByCategory = products.map((product) => {
  const totalRevenue = product.stock * product.price;
  return { "category": product.category, "revenue": totalRevenue };
});
console.log(revenueByCategory);
/* 
  [
    { category: 'electronics', revenue: 200 },
    { category: 'books', revenue: 375 },
    { category: 'books', revenue: 600 },
    { category: 'books', revenue: 875 }
  ]
*/ 


/*
  * Here the we are passing to the function that the map method receives the current element, the index and the array as its arguments. 
  * Inside the function, we are using the currentValue to access the properties of the current product, like name, price and category. 
  * We are also using the index to add a unique id to the product card by concatenating it with the string "product-" and we are using  the array to check if the current product is the last one, this is done by comparing the index with the length of the array -1. The   map method creates a new array with the returned values of the function, in this case, it creates an array of productCard objects and assigns it to the variable productCards. 
  * Finally, we do console.log to the productCards array to see the changes.
*/

// * An array of objects representing products
products = [
  { name: 'Product 1', price: 100, category: 'Electronics' },
  { name: 'Product 2', price: 50, category: 'Clothing' },
  { name: 'Product 3', price: 75, category: 'Home & Kitchen' },
  { name: 'Product 4', price: 120, category: 'Outdoors' },
  { name: 'Product 5', price: 90, category: 'Electronics' }
];
const productCards = products.map((currentValue, index, array) => {
  // Using the currentValue to access the properties of the current product
  // Using the index to add a unique id to the product card
  // Using the array to check if the current product is the last one
  let productCard = {
    id: `product-${index}`,
    name: currentValue.name,
    price: currentValue.price,
    category: currentValue.category,
    isLast: index === array.length - 1
  };
  return productCard;
});
console.log(productCards);
/*
  [
    {
      id: 'product-0',
      name: 'Product 1',
      price: 100,
      category: 'Electronics',
      isLast: false
    },
    {
      id: 'product-1',
      name: 'Product 2',
      price: 50,
      category: 'Clothing',
      isLast: false
    },
    {
      id: 'product-2',
      name: 'Product 3',
      price: 75,
      category: 'Home & Kitchen',
      isLast: false
    },
    {
      id: 'product-3',
      name: 'Product 4',
      price: 120,
      category: 'Outdoors',
      isLast: false
    },
    {
      id: 'product-4',
      name: 'Product 5',
      price: 90,
      category: 'Electronics',
      isLast: true
    }
]
*/

/*
  * Here we are using the map() method on an array of objects representing students. The function updateGrades is passed to the map()   method and for each element of the array of students, the function is called and receives the current element, index and array as its argument. Inside the function, we are using the index to check if the current element is at an even index, if it is then we are   updating the grade of the student from A to A+. The map() method creates a new array with the returned values of the function, in   this case, it creates an array of updated students and assigns it to the variable updatedStudents. 
  * Finally, we do console.log to the productCards array to see the changes.
*/
students = [
  { name: 'John', grade: 'A' },
  { name: 'Jane', grade: 'B' },
  { name: 'Bob', grade: 'C' },
  { name: 'Rachel', grade: 'A' },
  { name: 'Mike', grade: 'B' }
];

let updatedStudents = students.map((currentValue, index) => {
  if (index % 2 === 0) {
    currentValue.grade = 'A+';
  }
  return currentValue;
});
console.log(updatedStudents);
/*
    [
      { name: 'John', grade: 'A+' },
      { name: 'Jane', grade: 'B' },
      { name: 'Bob', grade: 'A+' },
      { name: 'Rachel', grade: 'A' },
      { name: 'Mike', grade: 'A+' }
    ]
*/


/*
  * This example uses the index to check if the current element is not the last one and the array to access the next element and compare its grade with the current one, also uses the currentValue to update the grade of the current student. 
*/
students = [
  { name: 'John', grade: 'A' },
  { name: 'Jane', grade: 'B' },
  { name: 'Bob', grade: 'C' },
  { name: 'Rachel', grade: 'A' },
  { name: 'Mike', grade: 'B' }
];
updatedStudents = students.map((currentValue, index, array) => {
  // Using the index to check if the current element is not the last one 
  // Using the array to access the next element and compare its grade with the current one
  // Using the currentValue to update the grade of the current student
  if (index < array.length - 1 && currentValue.grade === array[index + 1].grade) {
    currentValue.grade = 'A+';
  }
  return currentValue;
});
console.log(updatedStudents);
/*
  [
    { name: 'John', grade: 'A' },
    { name: 'Jane', grade: 'B' },
    { name: 'Bob', grade: 'C' },
    { name: 'Rachel', grade: 'A' },
    { name: 'Mike', grade: 'B' }
  ]
*/

/*
  * This example uses the currentValue to access the properties of the current product, the index to create a unique id for the new product and the array to check if the current product is the last one and use that information to add a new property to the new product object.
*/
products = [
  { name: 'Product 1', price: 100, category: 'Electronics' },
  { name: 'Product 2', price: 50, category: 'Clothing' },
  { name: 'Product 3', price: 75, category: 'Home & Kitchen' },
  { name: 'Product 4', price: 120, category: 'Outdoors' },
  { name: 'Product 5', price: 90, category: 'Electronics' }
];

const newProducts = products.map((currentValue, index, array) => {
  // Using the currentValue to access the properties of the current product
  // Using the index to create a unique id for the new product
  // Using the array to check if the current product is the last one
  let newProduct = {
    id: `new-product-${index}`,
    name: `New ${currentValue.name}`,
    price: currentValue.price * 2,
    category: currentValue.category,
    isLast: index === array.length - 1
  };
  return newProduct;
});
console.log(newProducts);
/*
    [
      {
        id: 'new-product-0',
        name: 'New Product 1',
        price: 200,
        category: 'Electronics',
        isLast: false
      },
      {
        id: 'new-product-1',
        name: 'New Product 2',
        price: 100,
        category: 'Clothing',
        isLast: false
      },
      {
        id: 'new-product-2',
        name: 'New Product 3',
        price: 150,
        category: 'Home & Kitchen',
        isLast: false
      },
      {
        id: 'new-product-3',
        name: 'New Product 4',
        price: 240,
        category: 'Outdoors',
        isLast: false
      },
      {
        id: 'new-product-4',
        name: 'New Product 5',
        price: 180,
        category: 'Electronics',
        isLast: true
      }
    ]
*/