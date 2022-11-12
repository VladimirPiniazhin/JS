"use strict";

let n;
let numbers = [];
//let parent = document.querySelector("ul");

while (n != 0) {
  n = prompt("Anna numero: ");
  numbers.push(n);
}

numbers.sort((a, b) => b - a);

for (let number of numbers) {
  console.log(number);
}

//document.querySelector("#p1").innerHTML = a;
