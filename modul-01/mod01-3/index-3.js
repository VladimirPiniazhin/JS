"use strict";
let numero1;
let numero2;
let numero3;
let sum;
let product;
let average;

numero1 = prompt("Anna 1. numero: ");
numero2 = prompt("Anna 2. numero: ");
numero3 = prompt("Anna 3. numero: ");

const a = parseInt(numero1);
const b = parseInt(numero2);
const c = parseInt(numero3);

sum = a + b + c;
product = a * b * c;
average = sum / 3;

document.querySelector("#p1").innerHTML = "Summa on " + sum;
document.querySelector("#p2").innerHTML = "Product on " + product;
document.querySelector("#p3").innerHTML = "Average on " + average;
