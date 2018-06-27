import React, { Component } from 'react';
import PROJECTS from './../../data/projects.json';

export default class Projects extends Component {
  render() {
    const formatStyle = imageUrl => ({
      background: `url(${imageUrl}) no-repeat center center`,
      backgroundSize: 'contain',
      height: '300px',
      width: '300px'
    });

    return (
      <div className="projects-container" data-aos="fade-up">
        <h3 className="projects-title">Projects</h3>
        <div className="projects-gallery">
          {PROJECTS.map(project => (
            <div className="card" key={project.title}>
              <div style={formatStyle(project.imageUrl)} href={project.url} target="_blank"/>
              <a href={project.url} target="_blank">
                <div className="title">{project.title}</div>
              </a>
              <div className="description">{project.description}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
