"use stric";

let p = document.querySelector("#result");
const button = document.querySelector("#start");

function calculate(string) {
  return Function("return " + string)();
}

button.addEventListener("click", function () {
  let string = document.querySelector("#calculation").value;
  //console.log(calculate(string));
  result = calculate(string);
  //console.log(Function("return " + string));
  p.innerHTML = "Result: " + result;
  document.querySelector("#calculation").value = "";
});

//Toinen vaihtoehto


/*button.addEventListener("click", function () {
  let string = document.querySelector("#calculation").value;
  let list1 = string.split("");
  let list2 = string.split(/[+,\-,/,*]/);

  let x1 = +list2[0];
  let x2 = +list2[1];

  console.log(list1);
  console.log(list2);

  if (string.includes("+") == true) {
    let result = x1 + x2;
    p.innerHTML = "Result: " + result;
  } else if (string.includes("-") == true) {
    let result = x1 - x2;
    p.innerHTML = "Result: " + result;
  } else if (string.includes("/") == true) {
    let result = x1 / x2;
    p.innerHTML = "Result: " + result;
  } else if (string.includes("*") == true) {
    let result = x1 * x2;
    p.innerHTML = "Result: " + result;
  }
  document.querySelector("#calculation").value = "";
});*/
