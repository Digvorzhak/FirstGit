var b = 1;
function someFunction(number) {
  function otherFunction(input) {
    return b;
  }
  b = 5;
  return otherFunction;
}
var firstResult = someFunction(9); // function returns 5
var result = firstResult(2); // 5

var a = 1;
function b2() {
  a = 10;
  return;
  function a() {}
}
b2();
console.log(a); // 1
// returns nothing

let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100);
}
// prints 3 times 3 because the function log is inside the for loop block so each time we will call log it will be looped
