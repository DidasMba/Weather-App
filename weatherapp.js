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
    // For ex:
    const location = jsonData.location.name;
    const temperature = jsonData.current.temp_c; // Temperature in Celsius
    const weatherCondition = jsonData.current.condition.text;
    
    return { location, temperature, weatherCondition };
  }

  document.addEventListener('DOMContentLoaded', () => {
    const weatherForm = document.getElementById('weatherForm');
    const weatherDisplay = document.getElementById('weatherDisplay');
  
    weatherForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const locationInput = document.getElementById('locationInput').value;
  
      // Add loading component while waiting for the data
      weatherDisplay.innerHTML = 'Loading...';
  
      try {
        const jsonData = await fetchWeatherData(locationInput);
        const weatherData = extractWeatherData(jsonData);
  
        // Display the information on the webpage
        weatherDisplay.innerHTML = `
          <h2>Location: ${weatherData.location}</h2>
          <p>Temperature: ${weatherData.temperature}°C</p>
          <p>Weather Condition: ${weatherData.weatherCondition}</p>
        `;
      } catch (error) {
        weatherDisplay.innerHTML = 'Error fetching weather data. Please TRY again.';
        console.error(error);
      }
    });
  });
  
  

