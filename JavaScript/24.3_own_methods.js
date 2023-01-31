Array.prototype.myFilter = function myFilter(func) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (func(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

const myResult = words.myFilter((word) => word.length > 6);

console.log(myResult);

Array.prototype.myFind = function myFind(func) {
  let result;
  for (let i = 0; i < this.length; i++) {
    if (func(this[i], i, this)) {
      return (result = this[i]);
    }
  }
  return result;
};

const array1 = [5, 12, 8, 130, 44];

console.log(array1.myFind((element) => element > 10));

Array.prototype.myReduce = function (func, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    if (accumulator === undefined) {
      accumulator = this[i];
    } else {
      accumulator = func(accumulator, this[i], i, this);
    }
  }
  return accumulator;
};

const array2 = [5, 12, 8, 130, 44];
const sum = array2.myReduce((accum, num) => accum * num);
console.log(sum);
