import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class CityInput extends React.Component {
  state = {
    city: ''
  };
  static defaultProps = {
    flexDirection: 'column'
  }
  static propTypes = {
    flexDirection: PropTypes.string.isRequired
  }
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      city: value
    });
  }
  handleSubmit = (e) => e.preventDefault();
  handleClick = (e) => {
    if (this.state.city === '') {
      e.preventDefault();
    }
  }
  render() {
    const { city } = this.state;
    return (
      <form
        style={{display: 'flex', flexDirection: this.props.flexDirection, alignItems: 'center'}}
        onSubmit={this.handleSubmit}>
        <input
          id='city'
          placeholder='New York'
          type='text'
          autoComplete='off'
          value={city}
          onChange={this.handleChange}
        />
        <Link
          to={{
            pathname: '/forecast',
            search: `?city=${city}`
          }}
          className='weather-btn'
          onClick={this.handleClick}>
          Get Weather
        </Link>
      </form>
    );
  }
}
