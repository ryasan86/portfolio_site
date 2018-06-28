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
        Want to collaborate on a Project? Have a question about my work? Don't
        hesitate!
        <br />
        <br />
        <Button content="send email" className="button primary" onClick={this.handleClick} />
      </div>
    );
  }
}
