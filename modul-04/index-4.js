"use strict"

async function getData(request) {
  const response = await fetch('https://api.tvmaze.com/search/shows?q=' + request);
  console.log('response', response);
  const gotedData = await response.json();
  //console.log('data', data)
  return gotedData;
}

function renderHtml(data) {
  const targetElem = document.querySelector('#search-result');
  targetElem.innerHTML = "";
  if (data.Error) {
    console.log(data.Error);
    targetElem.innerText = data.Error;
  } else {
    for (let obj of data) {
      let content = `<article class="card">
                      <h2>${obj["show"]["name"]}</h2>
                      <figure>
                        <img src="${(obj["show"]["image"]==null ? "No img.jpg":obj["show"]["image"]["medium"])}" alt="">
                        <figcaption>${obj["show"]["genres"][0]}</figcaption>
                     </figure>
                     <a>${obj["show"]["url"]}</a></article>`;
      targetElem.innerHTML += content;
    }
    
  }
}

function handleFormSubmit(event) {
  event.preventDefault()
  serialForm(form)  
} 


async function main() {
  //const userInput = prompt('What are you looking for?');
  //let form = document.forms[0].name; // <form name="my"> element

  // получаем элемент
  //let userInput = document.forms[0].name; // <input name="one"> element
  //console.log(userInput)
  //const userInput = document.getElementById('search-form')
  //userInput.addEventListener("submit", handleFormSubmit)

}

async function serialForm(formNode) {
  const { elements } = formNode;
  const data = Array.from(elements)
    .filter((item) => !!item.name)
    .map((element) => {
      const { name, value } = element;
      return { name, value };
    });
    let userInput = data[0]["value"]    
    const filmData = await getData(userInput);
    console.log('Data:', filmData);
    renderHtml(filmData);
  }



const form = document.getElementById("search-form");
form.addEventListener("submit", handleFormSubmit);


console.log('ohjelma jatkuu');