$(document).ready(function() {
	getWeather()
});

function getWeather(id=6455259) {
  var WEATHER_API = getAPIKey();
  var URL = "http://api.openweathermap.org/data/2.5/weather?id=" + id + "&units=metric";
  $.getJSON(URL + "&APPID=" + WEATHER_API)
  .done(weatherHandler)
  .fail(failedConnectionHandler)
  .always(populateCities);
}

function weatherHandler(weatherData) {
  var city = weatherData.name;
  var temperature = Math.round(weatherData.main.temp);
  var weather = weatherData.weather[0].main;
  var icon = weatherData.weather[0].icon;
  var iconHTML = "<i id=\"weather-icon\" class=\"wi\"></i>"
  var cityHTML = 
  "<div class=\"dropdown\"> \
    <button onclick=\"changeCity()\" class=\"dropbtn\">" + city + "</button> \
    <div id=\"city-dropdown\" class=\"dropdown-content\"> \
    </div> \
  </div>"
  document.getElementById("weather-text").innerHTML = iconHTML + "     " + temperature + "°C " + cityHTML;
  document.getElementById("weather-icon").className += " " + iconMapping(icon);
}

function failedConnectionHandler() {
  document.getElementById("weather-text").innerHTML += "No Internet";
}

function populateCities() {
  var cityObject = getCityList();
  for (var city in cityObject) {
    if (city){
      document.getElementById("city-dropdown").innerHTML += "<div class=\"city-item\">"+city
    }
  }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function changeCity() {
  document.getElementById("city-dropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    if (event.target.matches('.dropdown-content .city-item')) {
      var clickedCity = event.target.innerHTML;
      var cityObject = getCityList();
      getWeather(cityObject[clickedCity]);
    }
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// Constants

function getCityList () {
  return {
    "Paris": 6455259,
    "Montpellier": 6454034,
    "Lyon": 6454573,
    "Yaounde": 2220957,
    "Dakar": 2253354
  }
}

function iconMapping(code) {
  switch (code) {
    case "01d":
    return "wi-day-sunny";
    case "02d":
    return "wi-day-cloudy";
    case "03d":
    return "wi-cloud";
    case "04d":
    return "wi-cloudy";
    case "09d":
    return "wi-rain";
    case "10d":
    return "wi-day-rain";
    case "11d":
    return "wi-day-thunderstorm";
    case "13d":
    return "wi-day-snow";
    case "50d":
    return "wi-day-fog";
    case "01n":
    return "wi-night-clear";
    case "02n":
    return "wi-night-alt-cloudy";
    case "03n":
    return "wi-cloud";
    case "04n":
    return "wi-cloudy";
    case "09n":
    return "wi-rain";
    case "10n":
    return "wi-night-rain";
    case "11n":
    return "wi-night-thunderstorm";
    case "13n":
    return "wi-night-snow";
    case "50n":
    return "wi-night-fog";
    default:
    return "wi-alien";
  }
}
