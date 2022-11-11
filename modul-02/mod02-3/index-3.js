"use strict";
let dogNames = [];
let parent = document.querySelector("ul");

for (let i = 1; i <= 6; i++) {
  let n = prompt("Anna koiran nimi: ");
  dogNames.push(n);
}

dogNames.sort((a, b) => b.localeCompare(a));

for (let name of dogNames) {
  let li = document.createElement("li");
  li.innerHTML = name;
  parent.append(li);
}

//document.querySelector("#p1").innerHTML = a;
