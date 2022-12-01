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
                          obj["show"]["image"] == null ? "No img.jpg" : obj["show"]["image"]["medium"]}" alt="">
                        <figcaption><a target="_blank" href="${obj["show"]["url"]}">${
        obj["show"]["name"]} </a></figcaption>
                     </figure>
                     <p>Premiered: ${obj["show"]["premiered"] == null ? "unknown": obj["show"]["premiered"]} </p>
                     <p>Genre: ${obj["show"]["genres"].join("|")}</p>
                     <p>Language: ${obj["show"]["language"]}</p>
                     ${obj["show"]["summary"] == null ? "": obj["show"]["summary"]}
                     </article>`;

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


                   /*IFRAME*/
/*-----------------------------------------------*/




function click(event) {
  event.preventDefault();
  alert('You clicked me!')
   
}


const allAs = document.querySelectorAll('figcaption')
console.log(allAs.length)
//allAs.addEventListener('click', click);
//for (let i = 0; i < 10; i++) {
  //allAs[i].addEventListener('click', alert('You clicked me!'))
//}





/*
const allAs = document.querySelectorAll('a');
for (let i = 0; i < allAs.length; i++) {
  allAs[i].addEventListener('click', openModal)
}
const span = document.querySelector('span');
span.addEventListener('click', closeModal);



function openModal(evt) {
  evt.preventDefault();
  const dialog = document.querySelector('dialog');
  const iframe = document.querySelector('iframe');

  iframe.src=evt.currentTarget.getAttribute("href");
  dialog.showModal();
}


function closeModal() {
  const dialog = document.querySelector('dialog');
  dialog.close();
}*/