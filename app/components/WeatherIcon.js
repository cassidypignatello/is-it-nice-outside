import React from 'react';
import PropTypes from 'prop-types';

const WeatherIcon = (props) => {
  const image = require(`../images/weather-icons/${props.iconId}.svg`);
  return (
    <img className='weather-icon' src={`${image}`}/>
  )
}

WeatherIcon.propTypes = {
  iconId: PropTypes.string.isRequired
}

export default WeatherIcon;
