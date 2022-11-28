"use strict";

let p = document.querySelector("#target");

function serialForm(formNode) {
  const { elements } = formNode;
  const data = Array.from(elements)
    .filter((item) => !!item.name)
    .map((element) => {
      const { name, value } = element;
      return { name, value };
    });

  p.innerHTML = `Your name is ${data[0]["value"]} ${data[1]["value"]}`;
}

function handleFormSubmit(event) {
  // Älä lähetä lomaketta itse
  event.preventDefault();
  serialForm(form);
}

const form = document.getElementById("source");
form.addEventListener("submit", handleFormSubmit);
