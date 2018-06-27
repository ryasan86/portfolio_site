import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar" data-aos="slide-left">
        <ul className="nav-list">
          <li>
            <NavLink className="nav-link" to="/home" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
