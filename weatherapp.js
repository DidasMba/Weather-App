
  // Function to fetch weather data for a given location
function getWeatherData(location) {
    const apiKey = '90dbc5716a4345448e0161824230208'; //  actualy API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Process the weather data
        const processedData = processWeatherData(data);
        // Log the processed data to the console
        console.log('Processed Weather Data for', location, ':', processedData);
  
        // Now you can use the processedData object in your Weather App
        // For example, you can display the data on the UI or perform further operations with it
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }
  
  // Function to process the weather data and return relevant information
  function processWeatherData(rawData) {
    // Extract the required data from the raw JSON
    const processedData = {
      temperature: rawData.main.temp,
      description: rawData.weather[0].description,
      humidity: rawData.main.humidity,
      windSpeed: rawData.wind.speed,
      // Add more data fields as needed based on your app requirements
    };
  
    return processedData;
  }
  
  // Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault();
    const locationInput = document.getElementById('location');
    const location = locationInput.value.trim();
    if (location !== '') {
      getWeatherData(location);
      locationInput.value = ''; // Clear the input field after submission
    }
  }
  
  // Add event listener to the form
  const weatherForm = document.getElementById('weatherForm');
  weatherForm.addEventListener('submit', handleFormSubmit);
  





