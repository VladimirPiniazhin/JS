"use strict";
const names = ["John", "Paul", "Jones"];

let parent = document.querySelector("#target");

for (let n of names) {
  let li = document.createElement("li");
  li.innerHTML = n;
  parent.append(li);
}
