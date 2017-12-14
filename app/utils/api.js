import axios from 'axios';

const id = 'fdeb56ea588891439fd8f658fe75e6a7';

module.exports = {
  fetchCurrentWeather: function(city) {
    const encodedURI = window.encodeURI(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&type=accurate&APPID=${id}`);
    return axios.get(encodedURI);
  },
  fetchForecast: function(city) {
    const encodedURI = window.encodeURI(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=imperial&type=accurate&APPID=${id}&cnt=5`)
    return axios.get(encodedURI)
      .then((response) => {
        console.log(response);
      })
  }
}
