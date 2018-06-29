import React, { Component } from 'react';
import Overlay from './../../components/globals/Overlay';

export default class ProjectItem extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.setState({ active: true });
  }

  handleMouseLeave() {
    this.setState({ active: false });
  }

  render() {
    const { project } = this.props;
    const LINK = (
      <a href={project.url} target="_blank">
        <div className="title">{project.title}</div>
      </a>
    );
    const formatStyle = imageUrl => ({
      background: `url(${imageUrl}) no-repeat center center`,
      backgroundSize: 'contain',
      height: '250px',
      width: '250px'
    });

    return (
      <div className="card" key={project.title}>
        <div
          className="image-wrapper"
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <div
            style={formatStyle(project.imageUrl)}
            href={project.url}
            target="_blank"
          />
          {this.state.active ? <Overlay content={LINK} /> : <div />}
        </div>
        {LINK}
        <div className="description">{project.description}</div>
      </div>
    );
  }
}
