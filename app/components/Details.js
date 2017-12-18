import React from 'react';
import ForecastItem from './ForecastItem';

export default class Details extends React.Component {
  render() {
    const props = this.props.location.state;
    const { city, weather, humidity, temp } = props;
    return (
      <div>
        <ForecastItem day={props} />
        <div className='details-container'>
          <p>{city}</p>
          <p>{weather[0].description}</p>
          <p>Humidity: {humidity}%</p>
          <p>Low Temperature: {Math.round(temp.min)}&deg;</p>
          <p>High Temperature: {Math.round(temp.max)}&deg;</p>
        </div>
      </div>
    );
  }
}
