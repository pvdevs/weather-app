// const search = document.getElementById('search');

import getCondition from '../display/Condition';
import getLocation from '../display/Location';
import getTemperature from '../display/Temperature';
import getFeelsLike from '../display/FeelsLike';
import getHumidity from '../display/Humidity';
import getWind from '../display/Wind';

export default async function searchBar(city) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=6b7783d238544b9c966173805231612&q=${city}`,
    );
    const weatherData = await response.json();
    console.log(weatherData);

    getCondition(weatherData);
    getLocation(weatherData);
    getTemperature(weatherData);
    getFeelsLike(weatherData);
    getHumidity(weatherData);
    getWind(weatherData);
  } catch (error) {
    console.error(error);
  }
}
