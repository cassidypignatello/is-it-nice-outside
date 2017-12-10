import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const CityInput = (props) => {
  return (
    <div style={{display: 'flex', flexDirection: props.flexDirection, alignItems: 'center'}}>
      <input placeholder='New York'></input>
      <button className='weather-btn'>Get Weather</button>
    </div>
  );
}

CityInput.defaultProps = {
  flexDirection: 'column'
}

CityInput.propTypes = {
  flexDirection: PropTypes.string.isRequired
}

export default CityInput;
