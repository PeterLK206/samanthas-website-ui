import React, { Component } from 'react';
import MobileHeader from './MobileHeader';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <MobileHeader />
      </div>
    );
  }
}

export default Header;