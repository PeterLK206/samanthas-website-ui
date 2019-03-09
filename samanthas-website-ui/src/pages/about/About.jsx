import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import './About.css';
import MobileAbout from './MobileAbout';

class About extends Component {
  render () {
    return (
      <div className="About">
        <MediaQuery minWidth={769}>
        <div>Desktop</div>
        </MediaQuery>
        <MediaQuery maxWidth={768}>
          <MobileAbout />
        </MediaQuery>
      </div>
    );
  }
}

export default About;
