// get the last item in the history and display weather data


// when user enters a city
// display the city weather data

// function showWeather(city){

// }

function getSearchedCities(){
    return JSON.parse(localStorage.getItem('cities')) || [];
}

$(function(){
    const lastCitySearched = getSearchedCities().slice(-1);
})

// by calling
showWeather();

// if the city is valid
// add the city to the history


// add the city to the sidebar list

