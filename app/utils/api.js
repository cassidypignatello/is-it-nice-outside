import axios from 'axios';

const id = 'fdeb56ea588891439fd8f658fe75e6a7';

module.exports = {
  fetchCurrentWeather: function(city) {
    const encodedURI = window.encodeURI(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&type=accurate&APPID=${id}`);
    return axios.get(encodedURI)
      .then((response) => {
        console.log(response.data.name);
        console.log(response.data.weather[0].description);
        console.log('The temperature is currently ' + response.data.main.temp);
        console.log('Humidity: ' + response.data.main.humidity);
        console.log('Low ' + response.data.main.temp_min);
        console.log('High ' + response.data.main.temp_max);
      });
  }
}
