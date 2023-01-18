/*
  A "side effect" in programming refers to any changes in state or behavior that occur as a result of a function or statement, other than the return value of the function. This can include things like modifying a variable, updating a database, writing to a file, or displaying something in the UI.

  A pure function, on the other hand, is a function that, given the same input, will always return the same output. This is also known as referential transparency.

  Here is an example of a pure function:

  In this example, the function add(a, b) takes two arguments and returns their sum. This function is pure because it only depends on its inputs, and for the same input values, it will always return the same output.
*/
function add(a, b) {
  return a + b;
}
console.log(add(2,3)) // 5
console.log(add(2,3)) // 5

/*
  The opposite of a pure function is an impure function. An impure function is a function that can return different output for the same input, also known as referential non-transparency.

  In this example, the function increment() returns the value of a global variable x, and it increments the value of x each time it's called. This function is impure because for the same input, it returns different outputs,
*/
let x = 0;
function increment() {
    x++;
    return x;
}
console.log(increment()) // 1
console.log(increment()) // 2

/********************************************************************************************************************************/

/*
This function has a side effect because it modifies the value of the variable x.
In this example, the function addTwo(num) takes a single argument and adds it to the global variable x. When the function is called with the argument 3, it changes the value of x from 5 to 8. This change in the value of x is a side effect of the function.
*/
x = 5;

function addTwo(num) {
  x = x + num;
}

addTwo(3);
console.log(x); // 8

/********************************************************************************************************************************/

/*
  In this example, the function saveToDb(name, grade) takes two arguments and saves them to a database. When we use the forEach() method to iterate over the students array and call the saveToDb function on each student, it changes the data in the database. This change in the data in the database is a side effect of the function.

  It's important to note that side effects can be both positive and negative. A positive side effect is when a function or statement does something useful and is desired, like saving data or displaying information on the screen. A negative side effect is when a function or statement does something that is not desired, like changing the value of a global variable or producing an error.
*/
const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 90 },
  { name: "Charlie", grade: 80 },
];

// This function has a side effect because it saves the student's grade to a database
let db = {};

function saveToDb(name, grade) {
    // insert the student's name and grade into the "database"
    db[name] = grade;
}

students.forEach(student => {
  // Using the forEach() method to save each student's grade to a database
    saveToDb(student.name, student.grade);
});


// This function has a side effect because it displays a message in the UI.
// This is a side effect because it's displaying something on the screen, which is something outside of the function scope. The same thing can be said about logging something to the console.
function displayWelcome() {
  alert("Welcome!");
}

displayWelcome();

