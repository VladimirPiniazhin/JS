"use strict";
let numbers = [];
let num;

for (let i = 1; i <= 5; i++) {
  num = prompt("Anna numero: ");
  numbers.push(num);
}

for (let i = 5; i >= 0; i--) {
  console.log(numbers[i]);
}

//document.querySelector("#p1").innerHTML = a;
