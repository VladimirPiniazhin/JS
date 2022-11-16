"use strict";
const students = [
  {
    name: "John",
    id: "2345768",
  },
  {
    name: "Paul",
    id: "2134657",
  },
  {
    name: "Jones",
    id: "5423679",
  },
];

let parent = document.querySelector("#target");

for (let student of students) {
  let op = document.createElement("option");
  op.setAttribute("value", student["id"]);
  op.innerText = student["name"];
  parent.appendChild(op);
}
