import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import MobileHeader from './MobileHeader';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
      <MediaQuery minWidth={769}>
        {/* Desktop Code Goes Here! */}
      </MediaQuery>
      <MediaQuery maxWidth={768}>
        <MobileHeader isOpen={this.props.isOpen} toggleNav={this.props.toggleNav} />
      </MediaQuery>
    </div>
    );
  }
}

export default Header;
