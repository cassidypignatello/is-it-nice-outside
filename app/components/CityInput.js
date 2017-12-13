import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import api from '../utils/api';
import { Link } from 'react-router-dom';

export default class CityInput extends React.Component {
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
  render() {
    return (
      <form
        style={{display: 'flex', flexDirection: this.props.flexDirection, alignItems: 'center'}}
        onSubmit={this.handleSubmit}>
        <input
          id='city'
          placeholder='New York'
          type='text'
          autoComplete='off'
          value={this.state.city}
          onChange={this.handleChange}
        />
        <Link
          to={{
            pathname: '/forecast',
            search: `?city=${this.state.city}`
          }}
          className='weather-btn'
          onClick={this.handleClick}>
          Get Weather
        </Link>
      </form>
    );
  }
}

CityInput.defaultProps = {
  flexDirection: 'column'
}

CityInput.propTypes = {
  flexDirection: PropTypes.string.isRequired
}
