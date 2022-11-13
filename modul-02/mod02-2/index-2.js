"use strict";
let names = [];
let numNames = parseInt(prompt("Anna nimien määrä: "));
let parent = document.querySelector("ol");

for (let i = 1; i <= numNames; i++) {
  let n = prompt("Anna nimi: ");
  names.push(n);
}

names.sort();

console.log(names)

for (let name of names) {
  let li = document.createElement("li");
  li.innerHTML = name;
  parent.append(li);
}

//document.querySelector("#p1").innerHTML = a;
