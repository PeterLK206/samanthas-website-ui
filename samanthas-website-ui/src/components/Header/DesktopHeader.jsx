import React, { Component } from 'react';
import './DesktopHeader.css';
import DesktopNavigation from '../Navigation/DesktopNavigation';

class DesktopHeader extends Component {
  render () {
    return (
      <div className="DesktopHeader">
        <div className="header-container">
          <div className="logo-messaging">
            <h1 className="heading-title">Samantha's Care</h1>
            <div className="heading-text">Home Childcare in West Seattle</div>
          </div>


          <DesktopNavigation />

          <span className="location-contact">
            <div>8139 14th Ave SW</div>
            <div>Seattle, WA</div>
            <div className="phone">(206) 436 9615</div>
          </span>
        </div>

        <hr className="heading-hr" />
      </div>
    );
  }
}

export default DesktopHeader;