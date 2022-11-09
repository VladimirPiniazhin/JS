"use strict";
//let number;
function checkTrue() {
  let checkQuestion = confirm("Should I calculate the square root?");
  if (checkQuestion == true) {
    let number = prompt(
      "From which number do you want to calculate the square root?: "
    );
    if (number < 0) {
      return (document.querySelector("#p1").innerHTML =
        "The square root of a negative number is not defined");
    } else {
      return (document.querySelector("#p1").innerHTML =
        "The square root is " + Math.sqrt(number));
    }
  } else {
    return (document.querySelector("#p1").innerHTML =
      "The square root is not calculated.");
  }
}
checkTrue();
