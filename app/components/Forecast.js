import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import api from '../utils/api';
import helpers from '../utils/helpers';
import queryString from 'query-string';
import Loading from './Loading';

const ForecastItem = (props) => {
  const date = helpers.getDate(props.day.dt);
  const icon = props.day.weather[0].icon;
  return (
    <li onClick={props.onClick} className='forecast-item'>
      <ul className='space-list-items'>
        <li>
          <img className='weather-icon' src={`/app/images/weather-icons/${icon}.svg`}/>
        </li>
        <li className='forecast-date'>{date}</li>
      </ul>
    </li>
  );
}

export default class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: null,
      error: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.makeRequest = this.makeRequest.bind(this);
  }
  componentDidMount() {
    this.city = queryString.parse(this.props.location.search).city;
    this.makeRequest(this.city);
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.city = queryString.parse(nextProps.location.search).city;
    this.makeRequest(this.city);
  }
  makeRequest(city) {
    this.setState({
      loading: true
    });
    api.getWeatherData(city)
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
  handleClick(day) {
    this.props.history.push({
      pathname: '/details/' + this.city,
      state: day
    })
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
        <div className='forecast-container'>
          <h1>5-Day Forecast</h1>
          <ul className='forecast-list'>
            {this.state.data.forecast.list.map((day) => {
              return <ForecastItem onClick={this.handleClick.bind(this, day)} key={day.dt} day={day} />
            }, this)}
          </ul>
        </div>
      </div>
    );
  }
}
