"use strict";
const names = ["John", "Paul", "Jones"];

let parent = document.getElementById("target");

for (let name of names) {
  parent.innerHTML += `<li>${name}</li>`;
}
