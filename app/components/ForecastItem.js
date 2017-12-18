import React from 'react';
import { getDate } from '../utils/helpers';
import WeatherIcon from './WeatherIcon';

const ForecastItem = (props) => {
  const date = getDate(props.day.dt);
  const icon = props.day.weather[0].icon;
  return (
    <li onClick={props.onClick} className='forecast-item'>
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
