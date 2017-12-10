import React from 'react';
import ReactDOM from 'react-dom';
import CityInput from './CityInput';

const Header = (props) => {
  return (
    <div className='navbar'>
      <h1>Is It Nice Outside?</h1>
      <CityInput flexDirection='row' />
    </div>
  );
}

export default Header;
