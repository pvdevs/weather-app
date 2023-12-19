export default function getFeelsLike(weatherData) {
  const feelsLike = document.getElementById('feels-like');
  feelsLike.textContent = `Feels like: ${weatherData.current.feelslike_c}°C`;
}
