//console.log(fetch(https://api.openweathermap.org/data/2.5/forecast?q=3ec7c10028d23ed7e64f09e945ada501&units=imperial ))
      //.then(res => console.log(res.JSON))
      //.then(data =>console.log(data))

var test;
function initPage() {
  const inputEl = document.querySelector("#city-input");
  const searchEl = document.querySelector("#search-button");
  const clearEl = document.querySelector("#clear-history");
  const nameEl = document.querySelector("#city-name");
  const currentPicEl = document.querySelector("#current-pic");
  const temperature = document.querySelector("#temperature");
  const currentHumidityEl = document.querySelector("#humidity");
  const currentWindEl = document.querySelector("#wind-speed");
  const currentUVEl = document.querySelector("#UV-index");
  const historyEl = document.querySelector("#history");

  let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
  showSearchHistory();

  //creating listeners
  searchEl.addEventListener("click", getUserInput);
  clearEl.addEventListener("click", clearSearchHistory);

  function getUserInput() {
    let city = inputEl.value;
    searchHistory.push(city);
    localStorage.setItem("search",JSON.stringify(searchHistory));
    showSearchHistory()
    console.log(searchHistory);

    // This is our API key https://openweathermap.org/forecast5
    let APIKey = "3ec7c10028d23ed7e64f09e945ada501&units=imperial";
  
    // Here we are building the URL we need to query the database
    //current weather of the day
    let queryURL =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&appid=" +
      APIKey;
  

    $.ajax({
      url: queryURL,
      method: "GET",
      dataType: 'json',
    }).then(function (response) {
      test = response;
      console.log(response); //object
      //console.log(response.name);
      //console.log(response.main.temp);
      temperature.innerHTML = response.list[0].main.temp;
      currentHumidityEl.innerHTML = response.list[0].main.humidity;

      textObject.value;
    

    // function Temperature(kelvin) {
    //   let f = ((kelvin-273.15)*1.8)+32
    //   console.log('farenheit is:', f);
      
    // }
  
    });
  }
  
  
  //make another call with the forecast data ...loop through the array in the list

  
  
  //search history handler
  function showSearchHistory(){
    let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
    let resultHtml = "";
    for (let i = searchHistory.length - 1; i >= 0; i--) {
      resultHtml += "<p>"+ searchHistory[i] +"</p>"
    }
    historyEl.innerHTML = resultHtml;
  }

  function clearSearchHistory(){
    let emptyArray = JSON.stringify([]);
    localStorage.setItem("search", emptyArray);
    showSearchHistory();
  }

  //clearEl clear-history
  //clearEl.addEventListener("click",function() {}
    //     searchHistory = [];
    //     renderSearchHistory();
  
  
  }
initPage();
