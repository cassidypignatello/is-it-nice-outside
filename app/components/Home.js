import React from 'react';
import ReactDOM from 'react-dom';
import HomeContainer from '../components/HomeContainer';

export default class Home extends React.Component {
  render() {
    return (
      <div className='container'>
        <HomeContainer />
      </div>
    );
  }
}