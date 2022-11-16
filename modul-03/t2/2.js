"use strict";

let target = document.querySelector("#target");

let li = document.createElement("li");
li.innerText = "First item";
target.appendChild(li);

li = document.createElement("li");
li.innerText = "Second item";
li.className = "my-item";
target.appendChild(li);

li = document.createElement("li");
li.innerText = "Third item";
target.appendChild(li);
