import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import api from '../utils/api';
import helpers from '../utils/helpers';
import queryString from 'query-string';
import Loading from './Loading';

const ForecastGrid = (props) => (
  <div className='forecast-container'>
    <h1>5-Day Forecast</h1>
    <ul className='forecast-list'>
      {props.forecast.list.map((day) => {
        const date = helpers.getDate(day.dt);
        return (
          <li key={day.dt} className='forecast-item'>
            <ul className='space-list-items'>
              <li>
                <img className='weather-icon' src={`/app/images/weather-icons/${day.weather[0].icon}.svg`}/>
              </li>
              <li className='forecast-date'>{date}</li>
            </ul>
          </li>
        );
      })}
    </ul>
  </div>
);

export default class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: null,
      error: null
    };
  }
  componentDidMount() {
    const query = queryString.parse(this.props.location.search);
    api.getWeatherData(query.city)
      .then((data) => {
        console.log(data);
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
  render() {
    if (this.state.loading) {
      return (
        <Loading />
      );
    }
    if (this.state.error) {
      return (
        <div>
          <p>{this.state.error}</p>
          <Link style={{color: 'black'}} to='/'>Reset</Link>
        </div>
      );
    }
    return (
      <div className='container'>
        <div className='current-conditions'>
          <h1>The current weather for {this.state.data.currentConditions.name} is {this.state.data.currentConditions.weather[0].description}.</h1>
          <img className='weather-icon' src={`/app/images/weather-icons/${this.state.data.currentConditions.weather[0].icon}.svg`}/>
          <p>Current Temperature: {Math.round(this.state.data.currentConditions.main.temp)}&deg;</p>
          <p>Humidity: {this.state.data.currentConditions.main.humidity}%</p>
          <p>Today's Low: {Math.round(this.state.data.currentConditions.main.temp_min)}&deg;</p>
          <p>Today's High: {Math.round(this.state.data.currentConditions.main.temp_max)}&deg;</p>
        </div>
        <hr />
        <ForecastGrid forecast={this.state.data.forecast} />
      </div>
    );
  }
}
