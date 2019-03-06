import React, { Component } from 'react';
import './About.css';
import MobileAbout from './MobileAbout';

class About extends Component {
  render() {
    return (
      <div className="About">
        <MobileAbout />
      </div>
    );
  }
}

export default About;
