// API Keys
const apiKey = 'aef8ff579a371781a816a273903f8295'; //api key for the first call to get lat lon
const apiKey2 = '3e577ad9e250c4dd28d83578156049cc'; //api key for the second call to get weather

// Links to API
let CityQueryURL = "http://api.openweathermap.org/geo/1.0/direct?q=perth&limit=1&appid=" + apiKey;
let weatherData = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=" + apiKey2;


function getSearchedCities() {
    return JSON.parse(localStorage.getItem('cities')) || [];
}

$(function () {
    const lastCitySearched = getSearchedCities().slice(-1)[0];
    if (!lastCitySearched) {
        return;
    }
    showWeather(lastCitySearched);
})

function getWeatherApi(city) {

    // call the current API to get the lon and lat then call One Call API to get the rest of the info

    fetch(CityQueryURL)
        .then(function (response) {
            return response.json()
        })

        .then(function (result) {

            return {
                lon: result.coord.lon,
                lat: result.coord.lat,
            }
        })

        .then(function (result) {
            // call the oneCall API to get the info we need 
            return fetch(weatherData)
        })

        .then(function (result) {

            return result.json();
        });
}

function showWeather(city) {

    getWeatherApi(city)
        .then(function (result) {

            // show todays weather
            result.current

            // show forecast

        })
}


// by calling
showWeather();

// add the city to the history


