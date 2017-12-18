import axios from 'axios';
const id = 'fdeb56ea588891439fd8f658fe75e6a7';
const baseURL = 'https://api.openweathermap.org/data/2.5/';
const handleError = (error) => {
  console.warn(error);
  return null;
}
const prepRouteParams = (queryStringData) => Object.keys(queryStringData)
.map((key) => key + '=' + encodeURIComponent(queryStringData[key])).join('&');

const prepURL = (type, queryStringData) => baseURL + type + '?' + prepRouteParams(queryStringData);
const getQueryStringData = (city) => ({
  q: city,
  units: 'imperial',
  type: 'accurate',
  APPID: id,
  cnt: 5
})
export function fetchCurrentWeather(city) {
  const queryStringData = getQueryStringData(city);
  const url = prepURL('weather', queryStringData);
  return axios.get(url).then(({ data }) => data);
}
export function fetchForecast(city) {
  const queryStringData = getQueryStringData(city);
  const url = prepURL('forecast/daily', queryStringData);
  return axios.get(url).then(({ data }) => data);
}
export function getWeatherData(city) {
  return Promise.all([
    fetchCurrentWeather(city),
    fetchForecast(city)
  ]).then(([ currentConditions, forecast ]) => ({
      currentConditions,
      forecast
    })).catch(handleError);
}
