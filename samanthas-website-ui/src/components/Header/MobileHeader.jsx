import React, { Component } from 'react';
import './MobileHeader.css';
import MobileNavigation from '../Navigation/MobileNavigation';

class MobileHeader extends Component {    
  render() {
    return (
      <div className="MobileHeader">
        <MobileNavigation isOpen={this.props.isOpen} toggleNav={this.props.toggleNav} />
        <div className="row align-items-center">
          <h1 className="heading-title col-9">Samantha's Care</h1>
          <div className="col-3">
            <i onClick={this.props.toggleNav} className="float-right fas fa-3x fa-bars clickable"></i>
          </div>
        </div>
 
        <div className="heading-text">Home Childcare in West Seattle</div>
      </div>
    );
  }
}

export default MobileHeader;