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
  // Temps
  const temperature = document.querySelector("#temperature");
  const temperature1 = document.querySelector("#temperature1");
  const temperature2 = document.querySelector("#temperature2");
  const temperature3 = document.querySelector("#temperature3");
  const temperature4 = document.querySelector("#temperature4");
  const temperature5 = document.querySelector("#temperature5");
  // Hums
  const currentHumidityEl = document.querySelector("#humidity");
  const humidity1 = document.querySelector("#humidity1");
  const humidity2 = document.querySelector("#humidity2");
  const humidity3 = document.querySelector("#humidity3");
  const humidity4 = document.querySelector("#humidity4");
  const humidity5 = document.querySelector("#humidity5");
  // Winds

  const currentWindEl = document.querySelector("#wind-speed");
  const wind1 = document.querySelector("#wind-speed1");
  const wind2= document.querySelector("#wind-speed2");
  const wind3 = document.querySelector("#wind-speed3");
  const wind4 = document.querySelector("#wind-speed4");
  const wind5 = document.querySelector("#wind-speed5");
  // UV
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
    localStorage.setItem("search", JSON.stringify(searchHistory));
    showSearchHistory();
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

    //let queryURL2 =
    //"https://api.openweathermap.org/data/2.5/forecast?&units=imperial&appid=" +
    //APIKey +
    //city;

    //let latitude;

    //let longitude;

    $.ajax({
      url: queryURL,
      method: "GET",
      dataType: "json",
    }).then(function (response) {
      test = response;
      console.log(response); //object
      //console.log(response.name);
      //console.log(response.main.temp);
      temperature.innerHTML = response.list[0].main.temp;
      currentHumidityEl.innerHTML = response.list[0].main.humidity;
      currentWindEl.innerHTML = response.list[0].wind.speed;

      temperature1.innerHTML = response.list[1].main.temp;
      humidity1.innerHTML = response.list[1].main.humidity;
      wind1.currentWindEl.innerHTML = response.list[1].wind.speed;

      temperature2.innerHTML = response.list[2].main.temp;
      humidity2.innerHTML = response.list[2].main.humidity;
      wind2.innerHTML = response.list[2].wind.speed;

      temperature3.innerHTML = response.list[3].main.temp;
      humidity3.innerHTML = response.list[3].main.humidity;
      wind3.innerHTML = response.list[3].wind.speed;

      temperature4.innerHTML = response.list[4].main.temp;
      humidity4.innerHTML = response.list[4].main.humidity;
      wind4.innerHTML = response.list[4].wind.speed;

      temperature5.innerHTML = response.list[5].main.temp;
      humidity5.innerHTML = response.list[5].main.humidity;
      wind5.innerHTML = response.list[5].wind.speed;

      textObject.value;

      ///https://api.openweathermap.org/data/2.5/forecast?q=Red%20Rock&appid=3ec7c10028d23ed7e64f09e945ada501&units=imperial
      ///
      // function Temperature(kelvin) {
      //   let f = ((kelvin-273.15)*1.8)+32
      //   console.log('farenheit is:', f);

      // }
    });
  }

  //make another call with the forecast data ...loop through the array in the list

  //search history handler
  function showSearchHistory() {
    let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
    let resultHtml = "";
    for (let i = searchHistory.length - 1; i >= 0; i--) {
      resultHtml += "<p>" + searchHistory[i] + "</p>";
    }
    historyEl.innerHTML = resultHtml;
  }

  function clearSearchHistory() {
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
