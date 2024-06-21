'use strict';

// Fetching Country Data Using XMLHttpRequest

const getCountryData = function (country) {
  // Defines a function named 'getCountryData' that takes a single parameter 'country'.

  const request = new XMLHttpRequest();
  // Creates a new instance of the XMLHttpRequest object, used to interact with servers via HTTP.

  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  // Initializes a GET request to the specified URL. The URL includes the 'country' parameter,
  // dynamically inserting the country name into the endpoint.

  request.send();
  // Sends the HTTP request to the server to retrieve data for the specified country.

  request.addEventListener('load', function () {
    // Adds an event listener for the 'load' event, which triggers when the request is successfully completed.

    console.log(this.responseText);
    // Logs the response text from the request to the console. 'this' refers to the XMLHttpRequest object,
    // and 'responseText' contains the raw data returned by the server in string format.

    const [data] = JSON.parse(this.responseText);
    // Parses the JSON response text to a JavaScript object. The response is expected to be an array,
    // so destructuring is used to extract the first element into the 'data' variable.

    console.log(data);
    // Logs the parsed data object to the console. This object contains detailed information about the country.
  });
};

getCountryData('bharat');
// Calls the 'getCountryData' function with the argument 'bharat' to fetch and display data for India.
// 'bharat' is the Hindi name for India, demonstrating the function with an example country name.

// Fetching Country Data Using fetch API

// Define a constant function 'getCountryData1' that takes a country name as an argument
const getCountryData1 = function (country) {
  // Use the fetch API to get data from the REST Countries API, using the provided country name in the URL
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response =>
      // Convert the response to JSON format and implicitly return it
      response.json()
    )
    .then(data => {
      // Log the first element of the resulting data array to the console
      console.log(data[0]);
    });
};

// Call the function with the argument 'bharat' to get data for the country India
getCountryData1('bharat');

// Fetching and Displaying Country Data Using Async Functions and the Fetch API

// Declare an async function named getCountryData2 that takes a parameter 'country'
const getCountryData2 = async function (country) {
  // Await the fetch function which makes a GET request to the REST Countries API
  // The `${country}` variable is interpolated into the URL to fetch data about the specified country
  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);

  // Await the .json() method on the response object 'res' to parse the JSON data asynchronously
  const data = await res.json();

  // Log the first element (index 0) of the 'data' array to the console
  console.log(data[0]);
};

// Call the getCountryData2 function and pass 'bharat' as the argument for the 'country' parameter
getCountryData2('bharat');
