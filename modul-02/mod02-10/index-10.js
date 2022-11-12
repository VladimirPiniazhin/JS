"use strict";
let candNumber = parseInt(prompt("Enter the number of candidates: "));

let candidates = [];

for (let i = 1; i <= candNumber; i++) {
  let name = prompt(`Enter in LOWERCASE the ${i} name of the candidates:`);
  let candidate = {
    name,
    votes: 0,
  };
  candidates.push(candidate);
}

let votersNumber = parseInt(prompt("Enter the number of voters: "));

for (let i = 1; i <= votersNumber; i++) {
  let voteName = prompt("Enter in LOWERCASE your candidate name: ");
  for (let candidate of candidates) {
    if (candidate.name == voteName) {
      candidate.votes++;
    }
  }
}

console.log(candidates);

candidates.sort((a, b) => b.votes - a.votes);

console.log(candidates);

console.log(
  "The winner is " +
    candidates[0].name +
    " with " +
    candidates[0].votes +
    " votes"
);
console.log("Results:");
for (let candidate of candidates) {
  console.log(candidate.name + ": " + candidate.votes + " votes");
}
