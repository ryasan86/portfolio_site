import React, { Component } from 'react';

const LINKS = [
  { url: 'https://github.com/ryasan86', icon: 'fab fa-github' },
  { url: 'https://codepen.io/ryasan86', icon: 'fab fa-codepen' },
  { url: 'https://www.linkedin.com/in/ryasan86', icon: 'fab fa-linkedin' }
];

export default class Externals extends Component {
  render() {
    return (
      <div className="external-links">
        {LINKS.map((link, i) => (
          <span key={i}>
            <a href={link.url} target="_blank">
              <i className={link.icon} />
            </a>
          </span>
        ))}
      </div>
    );
  }
}
