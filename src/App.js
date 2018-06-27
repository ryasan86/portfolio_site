import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/Home/Home';
import ContactPage from './pages/Contact/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-wrap">
        <BrowserRouter>
          <Fragment>
            <Navbar />
            <div className="pages-container">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/contact" component={ContactPage} />
              </Switch>
            </div>
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
