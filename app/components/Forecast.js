import React from 'react';
import { Link } from 'react-router-dom';
import { getWeatherData } from '../utils/api';
import queryString from 'query-string';
import Loading from './Loading';
import ForecastItem from './ForecastItem';
import WeatherIcon from './WeatherIcon';

export default class Forecast extends React.Component {
  state = {
    loading: true,
    data: null,
    error: null
  };
  componentDidMount = () => {
    this.city = queryString.parse(this.props.location.search).city;
    this.makeRequest(this.city);
  }
  componentWillReceiveProps = (nextProps) => {
    this.city = queryString.parse(nextProps.location.search).city;
    this.makeRequest(this.city);
  }
  makeRequest(city) {
    this.setState({
      loading: true
    });
    getWeatherData(city)
      .then((data) => {
        if (data === null) {
          return this.setState({
            loading: false,
            error: "Sorry, I can't seem to find that city. Can you check the spelling and try again?"
          });
        }
        this.setState({
          loading: false,
          data: data,
          error: null
        });
      });
  }
  handleClick(day) {
    day.city = this.city;
    this.props.history.push({
      pathname: '/details/' + this.city,
      state: day
    })
  }
  render() {
    const { loading, error, data } = this.state;
    return loading ?
      <Loading /> :
      error ?
      <div>
        <p>{error}</p>
        <Link style={{color: 'black'}} to='/'>Reset</Link>
      </div> :
      <div className='container'>
        <div className='current-conditions'>
          <h1>The current weather for {data.currentConditions.name} is {data.currentConditions.weather[0].description}.</h1>
          <WeatherIcon iconId={data.currentConditions.weather[0].icon} />
          <p>Current Temperature: {Math.round(data.currentConditions.main.temp)}&deg;</p>
          <p>Humidity: {data.currentConditions.main.humidity}%</p>
          <p>Today's Low Temperature: {Math.round(data.currentConditions.main.temp_min)}&deg;</p>
          <p>Today's High Temperature: {Math.round(data.currentConditions.main.temp_max)}&deg;</p>
        </div>
        <hr />
        <div className='forecast-container'>
          <h1>5-Day Forecast</h1>
          <ul className='forecast-list'>
            {data.forecast.list.map((day) => <ForecastItem onClick={() => this.handleClick(day)} key={day.dt} day={day} />)}
          </ul>
        </div>
      </div>
  }
}
