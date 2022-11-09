"use strict";
let diceNumber = parseInt(prompt("Enter the number of dice: "));
let interestSum = parseInt(
  prompt("Enter the sum of the eye numbers of interest to the user: ")
);

let score = 0;

function getSumOfDrop(x) {
  let numSum = 0;
  for (let n = 1; n <= x; n++) {
    numSum += Math.floor(Math.random() * 6) + 1;
  }
  return numSum;
}

for (let i = 1; i <= 10000; i++) {
  let n = getSumOfDrop(diceNumber);
  console.log(n);
  if (n === interestSum) {
    score += 1;
  }
}

console.log("sum of goals is " + score);
const probability = (score * 100) / 10000;
console.log(probability + "%");
document.querySelector("#p1").innerHTML =
  "Probability to get sum " +
  interestSum +
  " with " +
  diceNumber +
  " dice is " +
  probability +
  " %";
