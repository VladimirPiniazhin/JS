"use stric";

let p = document.querySelector("#result");
const button = document.querySelector("#start");
/*
function calculate(string) {
    return (new Function('return ' + string))();
  }

button.addEventListener("click", function() {
    let string = document.querySelector("#calculation").value;
    //console.log(calculate(string));
    result = calculate(string)
    p.innerHTML = "Result: "+result;
    document.querySelector("#calculation").value = "";
}); 
*/
button.addEventListener("click", function() {
    let string = document.querySelector("#calculation").value;
    let list1 = string.split("");
    let list2 = string.split(/[+,-,/,*]/);
    //result = +list.join();

    //console.log(list1);
    //console.log(list2);

    for(let i=0; i<list1.length; i++) {
        if(list1[i] == "+") {
        let x1 = +list2[0];
        let x2 = +list2[1];
        let result = x1 + x2
        console.log(result)
        p.innerHTML = "Result: "+result;
    } else if (list1[i] == "-") {
        let x1 = +list2[0];
        let x2 = +list2[1];
        let result = x1 - x2
        console.log(result)
        p.innerHTML = "Result: "+result;
    } else if (list1[i] == "/") {
        let x1 = +list2[0];
        let x2 = +list2[1];
        let result = x1 / x2
        console.log(result)
        p.innerHTML = "Result: "+result;
    } else if (list1[i] == "*") {
        let x1 = +list2[0];
        let x2 = +list2[1];
        let result = x1 * x2
        console.log(result)
        p.innerHTML = "Result: "+result;
}
}
document.querySelector("#calculation").value = "";
});


