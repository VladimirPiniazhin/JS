"use strict";
//const list = ["First", "Second", "Third"]

let target = document.querySelector("#target");

target.className = "my-item";

//parent.createElement = "<li>First item</li><li>Second item</li><li>Third item</li>"

let li = document.createElement("li");
li.innerHTML = "First item";
target.appendChild(li);

li = document.createElement("li");
li.innerHTML = "Second item";
target.appendChild(li);

li = document.createElement("li");
li.innerHTML = "Third item";
target.appendChild(li);

/*

for (let n of list) {
    let li = document.createElement("li");
    li.innerHTML = `${n} item`;
    parent.append(li);
}*/
