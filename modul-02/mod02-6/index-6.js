"use strict";

let parent = document.querySelector("ul");
let n = 0;
function roll() {
  let a = Math.floor(Math.random() * 6) + 1;
  return a;
}

while (n != 6) {
  n = roll();
  if (n < 6) {
    let li = document.createElement("li");
    li.innerHTML = n;
    parent.append(li);
  } else {
    let li = document.createElement("li");
    li.innerHTML = "Great! You have got " + n + " !";
    parent.append(li);
  }
}

//document.querySelector("#p1").innerHTML = a;
