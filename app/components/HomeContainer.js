import React from 'react';
import ReactDOM from 'react-dom';
import CityInput from './CityInput';
import api from '../utils/api';

export default class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e) {
    const value = e.target.value;
    this.setState({
      city: value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    api.fetchCurrentWeather(this.state.city);
  }
  handleClick(e) {
    if (this.state.city === '') {
      e.preventDefault();
    }
  }
  render () {
    return (
      <div className='home-container'>
        <h1 className='header-text'>Enter a City</h1>
        <CityInput
          city={this.state.city}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}
