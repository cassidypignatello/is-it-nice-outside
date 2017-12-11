import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class CityInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const value = event.target.value;
    this.setState(function() {
      return {
        city: value
      }
    })
  }
  render() {
    return (
      <form style={{display: 'flex', flexDirection: this.props.flexDirection, alignItems: 'center'}}>
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
