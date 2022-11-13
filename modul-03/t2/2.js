"use strict";
//const list = ["First", "Second", "Third"]

let target = document.querySelector("#target");

target.className = "my-item";

//parent.createElement = "<li>First item</li><li>Second item</li><li>Third item</li>"


let p = document.createElement("li");
p.innerHTML = "First item"
target.appendChild(p)

p = document.createElement("li");
p.innerHTML = "Second item"
target.appendChild(p)

p = document.createElement("li");
p.innerHTML = "Third item"
target.appendChild(p)

/*

for (let n of list) {
    let li = document.createElement("li");
    li.innerHTML = `${n} item`;
    parent.append(li);
}*/


