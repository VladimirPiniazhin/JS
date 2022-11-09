"use strict";
let year = prompt("Enter a year: ");

if (year % 400 == 0) {
  document.querySelector("#p1").innerHTML = year + " year is a leap.";
} else if (year % 100 == 0) {
  document.querySelector("#p1").innerHTML = year + " year is not a leap.";
} else if (year % 4 == 0) {
  document.querySelector("#p1").innerHTML = year + " year is a leap.";
} else {
  document.querySelector("#p1").innerHTML = year + " year is not a leap.";
}
