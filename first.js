document.getElementById('getWeatherBtn').addEventListener('click', getWeather);

async function getWeather() {
  const city = document.getElementById('city').value;
  if (!city) {
    alert('Please enter a city name');
    return;
  }

  const apiKey = '8260134bc0f83950dbf20f65cbc200e1';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.cod !== 200) {
      alert('City not found');
      return;
    }

    // Update the UI with weather data
    document.getElementById('cityName').textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById('description').textContent = `Weather: ${data.weather[0].description}`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById('windSpeed').textContent = `Wind Speed: ${data.wind.speed} m/s`;

    document.getElementById('weatherData').style.display = 'block';
  } catch (error) {
    alert('Error fetching weather data');
  }
}
