import React from 'react';
import { Link } from 'react-router-dom';
import CityInput from './CityInput';

const Header = (props) => (
  <div className='navbar'>
    <Link to='/'>
      <h1>Is It Nice Outside?</h1>
    </Link>
    <CityInput flexDirection='row' />
  </div>
);

export default Header;
