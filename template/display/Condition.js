function createIcon(weatherData) {
  const weatherConditionIcon = document.getElementById('weather-sky-icon');
  const iconElement = document.createElement('img');
  iconElement.src = weatherData.current.condition.icon;
  iconElement.alt = 'Weather Icon';

  weatherConditionIcon.appendChild(iconElement);
}

function updateIcon(weatherData) {
  const iconElement = document.querySelector('#weather-sky-icon img');
  iconElement.src = weatherData.current.condition.icon;
}

function getIcon(weatherData) {
  const iconElement = document.querySelector('#weather-sky-icon img');

  if (iconElement === null) {
    createIcon(weatherData);
  } else {
    updateIcon(weatherData);
  }
}

export default function getCondition(weatherData) {
  const weatherConditionText = document.getElementById('weather-sky-text');

  weatherConditionText.textContent = weatherData.current.condition.text;
  getIcon(weatherData);
}
