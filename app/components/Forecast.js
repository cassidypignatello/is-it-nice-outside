import React from 'react';
import ReactDOM from 'react-dom';
import api from '../utils/api';
import queryString from 'query-string';

export default class Forecast extends React.Component {
  componentDidMount() {
    const query = queryString.parse(this.props.location.search);
    api.fetchCurrentWeather(query.city);
  }
  render() {
    return (
      <p>Forecast!</p>
    );
  }
}
