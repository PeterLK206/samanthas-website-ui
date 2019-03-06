import React, { Component } from 'react';
import './Footer.css';
import MobileFooter from './MobileFooter';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <MobileFooter />
      </div>
    );
  }
}

export default Footer;
