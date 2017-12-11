import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import api from '../utils/api';

export default class CityInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        <button
          type='submit'
          className='weather-btn'
          disabled={!this.state.city}>
          Get Weather
        </button>
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
