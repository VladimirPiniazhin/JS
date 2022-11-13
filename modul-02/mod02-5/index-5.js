"use strict";
let numbers = [];
let n = parseInt(prompt("Anna numero: "));
numbers.push(n);
//let parent = document.querySelector("ul");
let a = false;

while (a == false) {
  n = parseInt(prompt("Anna numero: "));
  a = numbers.includes(n);
  if (a == false) {
    numbers.push(n);
  }
}
alert("The number has already been given!")

numbers.sort((a, b) => a - b);

for (let number of numbers) {
  console.log(number);
}

//document.querySelector("#p1").innerHTML = a;
