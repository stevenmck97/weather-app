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
        displayWeather(weatherData);
        console.log(weatherData);
    } catch (error) {
        console.log(error);
    }
}

function getUserLocationInput() {
    let location = locationInput.value;
    getWeather(location);
}

function displayWeather(weatherData) {
    const weatherDisplay = document.querySelector(".weatherDisplay");
    const weatherDescription = document.querySelector("#weatherDescription");
    const location = document.querySelector("#location");
    const temp = document.querySelector("#temp");
    const feelsLikeTemp = document.querySelector("#feelsLikeTemp");
    const wind = document.querySelector("#wind");
    const humidity = document.querySelector("#humidity");

    weatherDescription.textContent = weatherData.weather.description;
    location.textContent = weatherData.name;
    temp.textContent = weatherData.main.temp;
    feelsLikeTemp.textContent = weatherData.main.feels_like;
    wind.textContent = weatherData.wind.speed;
    humidity.textContent = weatherData.main.humidity;

    weatherDisplay.appendChild(weatherDescription);
    weatherDisplay.appendChild(location);
    weatherDisplay.appendChild(temp);
    weatherDisplay.appendChild(feelsLikeTemp);
    weatherDisplay.appendChild(wind);
    weatherDisplay.appendChild(humidity);
}
