"use strict";
const list = ["First", "Second", "Third"]

let parent = document.querySelector("#target");

parent.className = "my-list";

parent.innerHTML = "<li>First item</li><li>Second item</li><li>Third item</li>"


/*

for (let n of list) {
    let li = document.createElement("li");
    li.innerHTML = `${n} item`;
    parent.append(li);
}*/


