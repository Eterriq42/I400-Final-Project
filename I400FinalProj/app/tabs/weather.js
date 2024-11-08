import axios from "axios";
import resorts from "../resorts";

async function getWeather(lat, lon) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch`;

    try {
        const response = await axios.get(url);
        return response.data.current_weather.temperature;

    } catch (error) {
        console.error("Error fetching weather data: " + error);
        return null;
    }
}

async function getAllResortWeather() {
    const weatherData = {};

    for (const countryKey in resorts) {
        const countryResorts = resorts[countryKey].resorts;
        weatherData[countryKey] = [];

        for (const resort of countryResorts) {
            const coordinates = resorts[countryKey].coordinates[0]; 
            if (coordinates) {
                const temperature = await getWeather(coordinates.lat, coordinates.lon);
                weatherData[countryKey].push({
                    ...resort,
                    temperature,
                });
            }
        }
    }

    return weatherData;
}

export default getAllResortWeather;