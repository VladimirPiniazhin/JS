"use strict";
let nimi = prompt("Anna nimesi: ");

function getRandomInt(min, max) {
  let a = Math.floor(Math.random() * (max - min + 1)) + min;
  if (a == 1) {
    return (document.querySelector("#p1").innerHTML =
      nimi + ", you are Ravenclaw.");
  } else if (a == 2) {
    return (document.querySelector("#p1").innerHTML =
      nimi + ", you are Daredevil.");
  } else if (a == 3) {
    return (document.querySelector("#p1").innerHTML =
      nimi + ", you are Slytherin.");
  } else {
    return (document.querySelector("#p1").innerHTML =
      nimi + ", you are Hufflepuff.");
  }
}
getRandomInt(1, 4);
