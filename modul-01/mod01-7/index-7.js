"use strict";
let n = parseInt(prompt("Input the number of dice: "));
let a = 0;
let sum = 0;

for (let i = 1; i <= n; i++) {
  a = Math.floor(Math.random() * 6) + 1;
  sum += a;
  console.log(a);
}

document.querySelector("#p1").innerHTML = sum;
