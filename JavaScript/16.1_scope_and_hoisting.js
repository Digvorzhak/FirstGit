// "use strict";

// function funcA() {
//   console.log(a);
//   console.log(foo());
//   var a = 1;
//   function foo() {
//     return 2;
//   }
// }
// funcA();

// RETURN OUTPUT:
// undefined
// 2

// var fullName = "John Doe";
// var obj = {
//   fullName: "Colin Ihrig",
//   prop: {
//     fullName: "Aurelio De Rosa",
//     getFullName: function () {
//       return this.fullName;
//     },
//   },
// };
// console.log(obj.prop.getFullName());
// var test = obj.prop.getFullName;
// console.log(test());

// RETURN OUTPUT:
// "Aurelio De Rosa"
// "John Doe"

// function funcB() {
//   let a = (b = 0);
//   a++;
//   return a;
// }
// funcB();
// console.log(typeof a);
// console.log(typeof b);

// RETURN OUTPUT:
// undefined
// number

// function funcC() {
//   console.log("1");
// }
// funcC();
// function funcC() {
//   console.log("2");
// }
// funcC();

// RETURN OUTPUT:
// '2'
// '2'

// function funcD1() {
//   d = 1;
// }
// funcD1();
// console.log(d);
// function funcD2() {
//   var e = 1;
// }
// funcD2();
// console.log(e);

// RETURN OUTPUT:
// 1
// e is not defined

// function funcE() {
//   console.log("Value of f in local scope: ", f);
// }
// console.log("Value of f in global scope: ", f);
// var f = 1;
// funcE();

// RETURN OUTPUT:
// "Value of f in local scope: ", undefined)
// "Value of f in local scope: ", 1)
