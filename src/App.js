import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrap">
        <BrowserRouter>
          <Fragment>
            <Navbar />
            <Switch>
              <Route exact path="/home" component={HomePage} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
