export default function getTemperature(weatherData) {
  const temperature = document.getElementById('temperature');
  temperature.textContent = weatherData.current.temp_c;
}
