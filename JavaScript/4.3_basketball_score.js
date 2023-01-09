"use strict";

const teamJohn = [105, 120, 103];
const teamMike = [120, 94, 123];
const teamMary = [90, 131, 105];

const averageJohn = (teamJohn[0] + teamJohn[1] + teamJohn[2]) / 3;
const averageMike = (teamMike[0] + teamMike[1] + teamMike[2]) / 3;
const averageMary = (teamMary[0] + teamMary[1] + teamMary[2]) / 3;

console.log(averageMary, averageMike, averageJohn);

if ((averageJohn === averageMary) === averageMike) {
  console.log(`Draw! same average score of ${averageJohn}`);
} else if (averageMike === averageMary && averageMike > averageJohn) {
  console.log(`Draw! same average score of ${averageMary}`);
} else if (averageJohn === averageMike && averageJohn > averageMary) {
  console.log(`Draw! same average score of ${averageMike}`);
} else if (averageMary === averageJohn && averageMary > averageMike) {
  console.log(`Draw! same average score of ${averageJohn}`);
}

if (averageMary > averageMike && averageJohn) {
  console.log(`Team Mary wins! average score is ${averageMary}`);
} else {
  averageJohn > averageMike ? console.log(`John's team wins! average score is ${averageJohn}`) : averageMike > averageJohn ? console.log(`Mike's team wins! average score is ${averageMike}`) : console.log(`Draw! same average score of ${averageJohn}`);
}
