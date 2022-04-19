let weather_key = "fb816687cdd3a3eee52c07f94ccb480d";

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

getWeather("london");
