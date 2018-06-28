import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {


  render() {
    return (
      <div className="navbar" data-aos="slide-left">
        <ul className="nav-list">
          <li>
            <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
