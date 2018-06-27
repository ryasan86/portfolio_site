import React, { Component } from 'react';

const projects = [
  {
    title: 'Project 1',
    imageUrl: 'http://via.placeholder.com/300x300'
  },
  {
    title: 'Project 2',
    imageUrl: 'http://via.placeholder.com/300x300'
  },
  {
    title: 'Project 3',
    imageUrl: 'http://via.placeholder.com/300x300'
  },
  {
    title: 'Project 4',
    imageUrl: 'http://via.placeholder.com/300x300'
  },
  {
    title: 'Project 5',
    imageUrl: 'http://via.placeholder.com/300x300'
  },
  {
    title: 'Project 6',
    imageUrl: 'http://via.placeholder.com/300x300'
  }
];

export default class Projects extends Component {
  render() {
    let style;
    return (
      <div className="project-gallery" data-aos="fade-up">
        {projects.map(project => {
          style = {
            background: `url(${project.imageUrl})`,
            height: '300px',
            width: '300px'
          };
          return (
            <div className="project-card" key={project.title}>
              <div style={style}>overlay goes here</div>
              <div>{project.title}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
