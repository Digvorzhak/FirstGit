"use strict";

const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

function getCandy(candyStore, id) {
  for (let i = 0; i < candyStore.candies.length; i++) {
    if (id === candyStore.candies[i].id) {
      return candyStore.candies[i];
    }
  }
}

// console.log(getCandy(candyStore, "5hd7y"));

function getPrice(candyStore, id) {
  for (let i = 0; i < candyStore.candies.length; i++) {
    if (id === candyStore.candies[i].id) {
      return candyStore.candies[i].price;
    }
  }
}

// console.log(getPrice(candyStore, "as12f"));

function addCandy(candyStore, id, name, price) {
  const candy = {
    name,
    id,
    price,
  };
  candyStore.candies.push(candy);
}

addCandy(candyStore, "3rr8c", "tiger", 6);

// console.log(candyStore);

function buy(candyStore, id) {
  for (let i = 0; i < candyStore.candies.length; i++)
    if (candyStore.candies[i].id === id) {
      candyStore.candies[i].amount--;
      candyStore.cashRegister += candyStore.candies[i].price;
    }
}

buy(candyStore, "5hd7y");
console.log(candyStore);
