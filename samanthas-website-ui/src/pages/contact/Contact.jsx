import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import MobileContact from './MobileContact';
import './Contact.css';

class Contact extends Component {
  render () {
    return (
      <div className="Contact">
        <MediaQuery minWidth={769}>
        <div>Desktop</div>
        </MediaQuery>
        <MediaQuery maxWidth={768}>
          <MobileContact />
        </MediaQuery>
      </div>
    );
  }
}

export default Contact;
