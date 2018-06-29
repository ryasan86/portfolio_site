import React, { Component } from 'react';
import ProjectItem from './ProjectsItem';
import PROJECTS from './../../data/projects.json';
export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
  }

  render() {
    return (
      <div className="projects" data-aos="fade-up">
        <h3 className="projects-title">Projects</h3>
        <div className="projects-gallery">
          {PROJECTS.map(project => (
            <ProjectItem key={project.title} project={project} />
          ))}
        </div>
      </div>
    );
  }
}
