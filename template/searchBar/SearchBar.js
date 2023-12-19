// const search = document.getElementById('search');

export default async function searchBar() {
  try {
    const response = await fetch(
      'http://api.weatherapi.com/v1/current.json?key=6b7783d238544b9c966173805231612&q=belem',
    );
    const weatherData = await response.json();
    console.log(weatherData);
  } catch (error) {
    console.error(error);
  }
}
