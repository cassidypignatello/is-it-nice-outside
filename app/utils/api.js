import axios from 'axios';
const id = 'fdeb56ea588891439fd8f658fe75e6a7';

function handleError(error) {
  console.warn(error);
  return null;
}

module.exports = {
  fetchCurrentWeather: function(city) {
    const encodedURI = window.encodeURI(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&type=accurate&APPID=${id}`);
    return axios.get(encodedURI).then((response) => response.data);
  },
  fetchForecast: function(city) {
    const encodedURI = window.encodeURI(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=imperial&type=accurate&APPID=${id}&cnt=5`)
    return axios.get(encodedURI).then((response) => response.data);
  },
  getWeatherData: function(city) {
    return axios.all([
      this.fetchCurrentWeather(city),
      this.fetchForecast(city)
    ]).then((response) => {
      const currentConditions = response[0];
      const forecast = response[1];
      return {
        currentConditions: currentConditions,
        forecast: forecast
      }
    }).catch(handleError);
  }
}
