"use strict"


let p = document.querySelector("#result");
const button = document.querySelector("#start");

button.addEventListener("click", function() {
    let num1 = +document.querySelector("#num1").value;
    let num2 = +document.querySelector("#num2").value;
    let select = document.querySelector("#operation");
    let value = select.value;

    //console.log(value);  

    if (value === "add") {
        let result = num1 + num2;
        p.innerHTML = "Result: "+result;
    } else if (value === "sub") {
        let result = num1 - num2;
        p.innerHTML = "Result: "+result;
    } else if (value === "multi") {
        let result = num1 * num2;
        p.innerHTML = "Result: "+result;
    } else if (value === "div") {
        let result = num1 / num2;
        p.innerHTML = "Result: "+result;
    }
    document.querySelector("#num1").value = "";
    document.querySelector("#num2").value = "";
    }); 
    
