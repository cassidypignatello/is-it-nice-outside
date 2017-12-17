import React from 'react';
import helpers from '../utils/helpers';

const ForecastItem = (props) => {
  const date = helpers.getDate(props.day.dt);
  const icon = props.day.weather[0].icon;
  return (
    <li onClick={props.onClick} className='forecast-item'>
      <ul className='space-list-items'>
        <li>
          <img className='weather-icon' src={`/app/images/weather-icons/${icon}.svg`}/>
        </li>
        <li className='forecast-date'>{date}</li>
      </ul>
    </li>
  );
}

export default ForecastItem;
