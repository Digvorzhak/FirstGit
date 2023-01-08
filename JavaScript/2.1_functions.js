"use strict";

const countryInfo = function (country, population, capitalCity) {
  return `${country} has ${population} million people and it's capital city is ${capitalCity}`;
};

const spain = countryInfo("Spain", 47, "Madrid");
const japan = countryInfo("Japan", 125, "Tokyo");
const sweden = countryInfo("Sweden", 10, "Stockholm");

console.log(spain);
console.log(japan);
console.log(sweden);
