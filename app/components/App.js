import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/Header';
import HomeContainer from '../components/HomeContainer';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <HomeContainer />
      </div>
    );
  }
}
