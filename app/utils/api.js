import axios from 'axios';
const id = 'fdeb56ea588891439fd8f658fe75e6a7';
const baseURL = 'http://api.openweathermap.org/data/2.5/';

function handleError(error) {
  console.warn(error);
  return null;
}

function prepRouteParams(queryStringData) {
  return Object.keys(queryStringData)
    .map(function(key) {
      return key + '=' + encodeURIComponent(queryStringData[key]);
    }).join('&')
}

function prepURL(type, queryStringData) {
  return baseURL + type + '?' + prepRouteParams(queryStringData);
}

function getQueryStringData (city) {
  return {
    q: city,
    units: 'imperial',
    type: 'accurate',
    APPID: id,
    cnt: 5
  }
}

module.exports = {
  fetchCurrentWeather: function(city) {
    const queryStringData = getQueryStringData(city);
    const url = prepURL('weather', queryStringData);
    return axios.get(url).then((response) => response.data);
  },
  fetchForecast: function(city) {
    const queryStringData = getQueryStringData(city);
    const url = prepURL('forecast/daily', queryStringData);
    return axios.get(url).then((response) => response.data);
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
