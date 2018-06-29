import React, { Component } from 'react';
import Button from './../../components/globals/Button';
export default class ContactPage extends Component {
  handleClick() {
    window.open('mailto:ryansantos86@gmail.com?subject=Hey Ryan!');
  }

  render() {
    return (
      <div className="page contact">
        <h4>Drop Me a Line.</h4>
        <p>
          I enjoy building and creating things. Some are large and some are
          small. Some are serious and others not so much. If the project allows
          me to grow and experiment with new technologies then I'm with it!
        </p>
        <p>
          Want to collaborate on a Project? Have a question about my work? Don't
          hesitate!
        </p>
        <p>
          <i className="fas fa-phone" /> +1 310 872 6851
        </p>
        <Button
          content="send email"
          className="button primary"
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}
