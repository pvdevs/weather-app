export default function getHumidity(weatherData) {
  const humidity = document.getElementById('humidity');
  humidity.textContent = `Humidity: ${weatherData.current.humidity}`;
}
