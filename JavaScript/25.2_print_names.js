//Create an object with a name property. The object should
// also have a method that prints its name and another method
// that prints its name after a second with the help of setTimeOut.
// in this exercise, you are not allowed to use arrow functions.

const obj1 = {
  name: "Kenny",
  print1() {
    console.log(this.name);
  },
  print2() {
    const test = function () {
      console.log(this.name);
    };
    const result = test.bind(obj1);
    setTimeout(result, 1000);
  },
};

obj1.print1();
obj1.print2();
