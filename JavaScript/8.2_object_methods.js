"use strict";

const myCountry = {
  country: "Germany",

  capital: "Berlin",

  language: "Deutsch",
  population: 83,

  neighbors: ["Denmark", "Netherlands", "Belgium", "Luxembourg", "France", "Switzerland", "Austria", "Czech Republic", "Poland"],

  describe: function () {
    return `${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they have ${this.neighbors.length} neighbouring countries and a capital called ${this.capital}`;
  },

  checkIsland: function () {
    this.neighbors.length > 0 ? (this.isIsland = false) : (this.isIsland = true);
    return this.isIsland;
  },
};

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);
