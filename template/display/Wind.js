export default function getWind(weatherData) {
  const wind = document.getElementById('wind');
  wind.textContent = `Wind: ${weatherData.current.wind_kph} kph`;
}
