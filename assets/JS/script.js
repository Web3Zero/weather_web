

const apiKey = 'byoapikey';

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

    fetch('https://api.openweathermap.org/data/2.5/weather?q=${city]&appid=${apiKey}')
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
            return fetch('https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}')
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


// one call API: https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

// by calling
showWeather();

// if the city is valid
// add the city to the history


// add the city to the sidebar list

