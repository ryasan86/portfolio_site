import React, { Component } from 'react';
import Welcome from './../../components/Welcome/Welcome';
import Externals from './../../components/Externals/Externals';
import Projects from './../../components/Projects/Projects';

export default class HomePage extends Component {
  render() {
    return (
      <div className="page home">
        <Welcome />
        <Externals />
        <Projects />
      </div>
    );
  }
}
