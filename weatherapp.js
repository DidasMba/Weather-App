

// WeatherAPI URL and your API key
const apiKey = '90dbc5716a4345448e0161824230208';
const apiUrl = 'https://api.weatherapi.com/v1/forecast.json';

// Function to fetch weather data
async function fetchWeatherData(location) {
  try {
    const response = await fetch(`${apiUrl}?key=${apiKey}&q=${location}&days=3`);
    if (!response.ok) {
      throw new Error('Weather data not available.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

function extractWeatherData(jsonData) {
    // Process the JSON data and return an object with required data
    // For example:
    const location = jsonData.location.name;
    const temperature = jsonData.current.temp_c; // Temperature in Celsius
    const weatherCondition = jsonData.current.condition.text;
    
    return { location, temperature, weatherCondition };
  }
  

