"use strict";
const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

const nameGrabber = (arr) => {
  let array = [];

  for (let i = 0; i < arr.length; i++) {
    array[i] = arr[i].name;
  }
  const uniqueName = new Set(array);

  return uniqueName;
};

console.log(nameGrabber(data));

const birthCalc = (arr) => {
  let array = [];
  let resultArray = [];
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    array[i] = arr[i];
  }
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    if (Number(array[i].birthday.slice(-4)) < 1990) {
      resultArray[counter] = array[i];
      counter++;
    }
  }
  return resultArray;
};

console.log(birthCalc(data));

const foodCounter = (arr) => {
  let foodHive = {};
  let array = [];
  let containerArr = [];

  for (let i = 0; i < arr.length; i++) {
    array[i] = { ...arr[i].favoriteFoods };
    array[i] = [...array[i].meats, ...array[i].fish];
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      foodHive[array[i][j]] = 0;
    }
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] in foodHive) {
        foodHive[array[i][j]]++;
      }
    }
  }

  return foodHive;
};

// const test = { ...data[0].favoriteFoods };
// const test1 = [...test.meats, ...test.fish];
// console.log(test);
// console.log(test1);

console.log(foodCounter(data));

// {
//   hamburgers: 3,
//   sausages: 1,
//   salmon: 3,
//   pike: 2,
//   steak: 1,
//   lamb: 2,
//   tuna: 2,
//   barracuda: 1,
//   ham: 1,
//   chicken: 1,
//   bird: 1,
//   rooster: 1,
//   anchovies: 1
//   }
