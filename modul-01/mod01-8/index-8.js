"use strict";
let yearStart = parseInt(prompt("Enter a start year: "));
let yearLast = parseInt(prompt("Enter a last year: "));

let parent = document.querySelector("ul");

for (let i = yearStart; i <= yearLast; i++) {
  if (i % 400 === 0) {
    let li = document.createElement("li");
    li.innerHTML = i;
    parent.append(li);
  } else if (i % 100 === 0) {
    console.log("Not a leap year");
  } else if (i % 4 === 0) {
    let li = document.createElement("li");
    li.innerHTML = i;
    parent.append(li);
  }
}
