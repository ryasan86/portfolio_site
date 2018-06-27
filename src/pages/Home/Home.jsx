import React, { Component } from 'react';
import Welcome from './../../components/Welcome/Welcome';
export default class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <Welcome />
      </div>
    );
  }
}
