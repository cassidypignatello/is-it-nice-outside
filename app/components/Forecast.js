import React from 'react';
import ReactDOM from 'react-dom';
import api from '../utils/api';
import queryString from 'query-string';
import Loading from './Loading';

export default class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: null
    };
  }
  componentDidMount() {
    const query = queryString.parse(this.props.location.search);
    api.fetchCurrentWeather(query.city)
      .then((data) => {
        this.setState({
          loading: false,
          data: data
        });
      });
  }
  render() {
    if (this.state.loading) {
      return (
        <Loading />
      );
    }

    return (
      <div className='container'>
        <div className='current-conditions'>
          <h1>The current weather for {this.state.data.name} is {this.state.data.weather[0].description}.</h1>
          <p>Current Temperature: {Math.round(this.state.data.main.temp)}&deg;</p>
          <p>Humidity: {this.state.data.main.humidity}%</p>
          <p>Today's Low: {Math.round(this.state.data.main.temp_min)}&deg;</p>
          <p>Today's High: {Math.round(this.state.data.main.temp_max)}&deg;</p>
        </div>
      </div>
    );
  }
}
