import React from 'react';
import ForecastItem from './ForecastItem';

export default class Details extends React.Component {
  render() {
    const props = this.props.location.state;
    console.log(props);
    return (
      <div>
        <ForecastItem day={props} />
        <div className='details-container'>
          <p>{props.city}</p>
          <p>{props.weather[0].description}</p>
          <p>Humidity: {props.humidity}%</p>
          <p>Low Temperature: {Math.round(props.temp.min)}&deg;</p>
          <p>High Temperature: {Math.round(props.temp.max)}&deg;</p>
        </div>
      </div>
    );
  }
}
