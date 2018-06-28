import React, { Component, Fragment } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/Home/Home';
import ContactPage from './pages/Contact/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-wrap">
        <HashRouter>
          <Fragment>
            <Navbar />
            <div className="pages">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/contact" component={ContactPage} />
              </Switch>
            </div>
          </Fragment>
        </HashRouter>
      </div>
    );
  }
}

export default App;
