import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CityInput = (props) => (
  <form
    style={{display: 'flex', flexDirection: props.flexDirection, alignItems: 'center'}}
    onSubmit={props.handleSubmit}>
    <input
      id='city'
      placeholder='New York'
      type='text'
      autoComplete='off'
      value={props.city}
      onChange={props.handleChange}
    />
    <Link
      to='/forecast'
      className='weather-btn'
      onClick={props.handleClick}>
      Get Weather
    </Link>
  </form>
);

CityInput.defaultProps = {
  flexDirection: 'column'
}

CityInput.propTypes = {
  flexDirection: PropTypes.string.isRequired
}
export default CityInput;
