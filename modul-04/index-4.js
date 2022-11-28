async function asynchronousFunction(get) {
  // asynchronous function is defined by the async keyword
  console.log("asynchronous download begins");
  try {
    // error handling: try/catch/finally
    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${get}`
    ); // starting data download, fetch returns a promise which contains an object of type 'response'
    const jsonData = await response.json(); // retrieving the data retrieved from the response object using the json() function
    console.log(jsonData); // log the result to the console
  } catch (error) {
    console.log(error.message);
  } finally {
    // finally = this is executed anyway, whether the execution was successful or not
    console.log("asynchronous load complete");
  }
}

//console.log("the script ends");
let p = document.querySelector("#query").value;

function serialForm(formNode) {
  const { elements } = formNode;
  const data = Array.from(elements)
    .filter((item) => !!item.name)
    .map((element) => {
      const { name } = element;

      return { name };
    });
}

function handleFormSubmit(event) {
  // Älä lähetä lomaketta itse
  event.preventDefault();
  serialForm(asynchronousFunction(p));
}

const form = document.getElementById("source");
form.addEventListener("submit", handleFormSubmit);
