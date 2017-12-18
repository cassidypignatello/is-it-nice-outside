import React from 'react';
import { getDate } from '../utils/helpers';
import WeatherIcon from './WeatherIcon';

const ForecastItem = ({ day, onClick }) => {
  const date = getDate(day.dt);
  const icon = day.weather[0].icon;
  return (
    <li onClick={onClick} className='forecast-item'>
      <ul className='space-list-items'>
        <li>
          <WeatherIcon iconId={icon} />
        </li>
        <li className='forecast-date'>{date}</li>
      </ul>
    </li>
  );
}

export default ForecastItem;
