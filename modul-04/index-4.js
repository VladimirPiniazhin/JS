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
                     <figure>
                        <img src="${
                          obj["show"]["image"] == null
                            ? "No img.jpg"
                            : obj["show"]["image"]["medium"]
                        }" alt="">
                        <figcaption><a href="${
                          obj["show"]["url"]
                        }" target="_blank">${
        obj["show"]["name"]
      }</a></figcaption>
                     </figure>
                     <p>Premiered: ${obj["show"]["premiered"]} </p>
                     <p>Genre: ${obj["show"]["genres"].join("|")}</p>
                     <p>Language: ${obj["show"]["language"]}</p>
                     ${obj["show"]["summary"]}
                     </article>`;

      targetElem.innerHTML += content;
      const a = document.querySelector("a");
      a.target = "_blank";
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
