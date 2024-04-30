function searchCity(event) {
  event.preventDefault();

  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;

  function showTemperature(response) {
    let cityTemperature = document.querySelector("#current-temperature-value");
    cityTemperature.innerHTML = Math.round(response.data.temperature.current);
  }

  //sending request to external websites and showing current temperature
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInputElement.value}&key=fe5e09ad6aaeb38c2a11t3o0f7b7a744&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

//formatting date
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
