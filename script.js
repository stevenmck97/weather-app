const weather_key = "fb816687cdd3a3eee52c07f94ccb480d";
const locationInput = document.querySelector("#locationSearch");
const searchBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener("click", getUserLocationInput);

async function getWeather(location) {
    try {
        const response = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${weather_key}`
        );
        const weatherData = await response.json();
        console.log(weatherData);
    } catch (error) {
        console.log(error);
    }
}

function getUserLocationInput() {
    let location = locationInput.value;
    getWeather(location);
}
