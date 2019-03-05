import React, { Component } from 'react';
import './MobileHeader.css';

class MobileHeader extends Component {
  render() {
    return (
      <div className="MobileHeader">
        <div className="row align-items-center">
          <h1 className="heading-title col-9">Samantha's Care</h1>
          <div className="col-3">
            <i className="float-right fas fa-3x fa-bars"></i>
          </div>
        </div>
 
        <div className="heading-text">Home Childcare in West Seattle</div>
      </div>
    );
  }
}

export default MobileHeader;