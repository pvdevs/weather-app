function getCity(weatherData) {
  const city = weatherData.location.name;
  return city;
}

function getRegion(weatherData) {
  const region = weatherData.location.region;
  return region;
}

export default function getLocation(weatherData) {
  const location = document.getElementById('city');
  location.textContent = `${getCity(weatherData)}, ${getRegion(weatherData)}`;
}
