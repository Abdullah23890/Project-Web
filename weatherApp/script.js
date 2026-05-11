async function getWeather() {
  const city = document.getElementById('cityInput').value;

  // Step 1: Convert city name to coordinates using Open-Meteo geocoding
  const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`);
  const geoData = await geoRes.json();

  if (!geoData.results || geoData.results.length === 0) {
    document.getElementById('weatherResult').innerHTML = "City not found.";
    return;
  }

  const { latitude, longitude, name, country } = geoData.results[0];

  // Step 2: Fetch weather using coordinates
  const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
  const weatherData = await weatherRes.json();

  const weather = weatherData.current_weather;

  document.getElementById('weatherResult').innerHTML = `
    <h2>${name}, ${country}</h2>
    <p><strong>Temperature:</strong> ${weather.temperature}°C</p>
    <p><strong>Wind Speed:</strong> ${weather.windspeed} km/h</p>
    <p><strong>Weather Code:</strong> ${weather.weathercode}</p>
  `;
}
