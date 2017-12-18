import React from 'react';
import ReactDOM from 'react-dom';
import CityInput from './CityInput';

const HomeContainer = (props) => (
  <div className='home-container'>
    <h1 className='header-text'>Enter a City</h1>
    <CityInput />
  </div>
);

export default HomeContainer;
