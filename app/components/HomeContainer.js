import React from 'react';
import ReactDOM from 'react-dom';
import CityInput from './CityInput';

export default class HomeContainer extends React.Component {
  render () {
    return (
      <div className='home-container'>
        <h1 className='header-text'>Enter a City</h1>
        <CityInput />
      </div>
    );
  }
}
