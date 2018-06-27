import React, { Component } from 'react';
import Welcome from './../../components/Welcome/Welcome';
import Projects from './../../components/Projects/Projects';

export default class HomePage extends Component {
  render() {
    return (
      <div className="page home">
        <Welcome />
        <Projects />
      </div>
    );
  }
}
