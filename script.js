const weather_key = "fb816687cdd3a3eee52c07f94ccb480d";
const locationInput = document.querySelector("#locationSearch");
const searchBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener("click", getUserLocationInput);

async function getWeather(location) {
    try {
        const response = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${weather_key}`
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

    weatherDescription.textContent = `${weatherData.weather[0].description}`;
    location.textContent = `${weatherData.name}`;
    temp.textContent = `Temperature: ${weatherData.main.temp}°C`;
    feelsLikeTemp.textContent = `Feels like: ${weatherData.main.feels_like}°C`;
    wind.textContent = `Wind: ${weatherData.wind.speed} km/h`;
    humidity.textContent = `Humidity: ${weatherData.main.humidity}%`;

    weatherDisplay.appendChild(weatherDescription);
    weatherDisplay.appendChild(location);
    weatherDisplay.appendChild(temp);
    weatherDisplay.appendChild(feelsLikeTemp);
    weatherDisplay.appendChild(wind);
    weatherDisplay.appendChild(humidity);
}
