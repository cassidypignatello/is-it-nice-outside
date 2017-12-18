import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  ReactRouter,
  Route,
  Switch } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Forecast from './Forecast';
import Details from './Details';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/forecast' component={Forecast} />
            <Route path='/details/:city' component={Details} />
            <Route render={() => <p>Not found!</p>} />
          </Switch>
        </div>
      </Router>
    );
  }
}
