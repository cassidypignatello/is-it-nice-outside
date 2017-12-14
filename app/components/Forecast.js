import React from 'react';
import ReactDOM from 'react-dom';
import api from '../utils/api';
import queryString from 'query-string';
import Loading from './Loading';

export default class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    const query = queryString.parse(this.props.location.search);
    api.fetchCurrentWeather(query.city)
      .then((response) => {
        console.log(response.data.name);
        console.log(response.data.weather[0].description);
        console.log('The temperature is currently ' + response.data.main.temp);
        console.log('Humidity: ' + response.data.main.humidity);
        console.log('Low ' + response.data.main.temp_min);
        console.log('High ' + response.data.main.temp_max);
        this.setState({
          loading: false
        })
      });
  }
  render() {
    if (this.state.loading) {
      return (
        <Loading />
      );
    }

    return (
      <p>Forecast!</p>
    );
  }
}
