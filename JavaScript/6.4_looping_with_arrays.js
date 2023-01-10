"use strict";

const populations = [10, 42, 96, 24];

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const populationPercentages = (populations) => {
  const percentages = [];
  for (let i = 0; i < populations.length; i++) {
    percentages.push(percentageOfWorld2(populations[i]));
  }
  return percentages;
};
