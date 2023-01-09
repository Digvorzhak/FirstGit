"use strict";

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const poland = percentageOfWorld1(38);
console.log(poland);

const spain = percentageOfWorld1(47);
console.log(spain);

const sweden = percentageOfWorld1(10);
console.log(sweden);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

percentageOfWorld2(5); // Norway
percentageOfWorld2(212); // Brazil
percentageOfWorld2(109); // Philippines
