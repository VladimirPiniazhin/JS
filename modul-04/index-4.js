"use strict";

async function getData(request) {
  const response = await fetch(
    "https://api.tvmaze.com/search/shows?q=" + request
  );
  console.log("response", response);
  const gotedData = await response.json();
  //console.log('data', data)
  return gotedData;
}

function renderHtml(data) {
  const targetElem = document.querySelector("#result");
  targetElem.innerHTML = "";
  if (data.Error) {
    console.log(data.Error);
    targetElem.innerText = data.Error;
  } else {
    for (let obj of data) {
      let content = `<article>
                      <h2>${obj["show"]["name"]}</h2>
                      <figure>
                        <img src="${
                          obj["show"]["image"] == null
                            ? "No img.jpg"
                            : obj["show"]["image"]["medium"]
                        }" alt="">
                        <figcaption>${obj["show"]["genres"][0]}</figcaption>
                     </figure>
                     <a>${obj["show"]["url"]}</a></article>`;
      targetElem.innerHTML += content;
    }
  }
}

function handleFormSubmit(event) {
  event.preventDefault();
  main();
  document.querySelector("#query").value = "";
}

async function main() {
  let userInput = document.querySelector("#query").value;
  const filmData = await getData(userInput);
  console.log("Data:", filmData);
  renderHtml(filmData);
}

const form = document.querySelector("form");
form.addEventListener("submit", handleFormSubmit);

console.log("ohjelma jatkuu");
