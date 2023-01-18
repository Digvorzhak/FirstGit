
// Primitives can be copied, and they are not effecting each other.
let age = 44;
let oldAge = age;
age = 45;

console.log("age", age);
console.log("oldAge", oldAge);

// Reference values (ie Objects, Arrays, Functions etc...) are not 'copied',
// because the copy is pointing to same address in the heap, 
// so they are the same entities in the memory with different names.
const me = {
  name: 'ori',
  age: 44,
};

const myClone = me;

me.age = 50;

console.log("My age", me.age)
console.log("My clone's age", myClone.age);

const arr1 = [1,2,3]
const arr2 = arr1;

arr1.push(4);

console.log("arr1", arr1);
console.log("arr2", arr2);

// A reference type which is a const, can not be re-assigned, but the values of the object, can be re-assigned.
const obj = {
  foo: "foo",
  boo: "boo",
}

// ! Cant do this !
/* obj = {
  loo: "loo",
  moo: "moo",
}
*/

// * Can do this *
obj.foo = "moo";

// * shallow copy *
const fooCopy = Object.assign({}, obj);

// * deep object *
const deepObj = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496"
    }
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets"
  }
}

// * Deep copy *
const deepCopy = JSON.parse(JSON.stringify(deepObj));

console.log(deepCopy)

