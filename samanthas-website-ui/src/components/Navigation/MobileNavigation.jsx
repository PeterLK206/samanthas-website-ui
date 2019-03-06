import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './MobileNavigation.css';

class MobileNavigation extends Component {
  render() {
    return (
      (this.props.isOpen) ? 
        <div className="MobileNavigation">
          <NavLink onClick={this.props.toggleNav} activeClassName="activeNav" exact className="nav-link-item" to="/">Home</NavLink>
          <NavLink onClick={this.props.toggleNav} activeClassName="activeNav" className="nav-link-item" to="/about">About Samantha</NavLink>
          <NavLink onClick={this.props.toggleNav} activeClassName="activeNav" className="nav-link-item" to="/pictures">Pictures</NavLink>
          <NavLink onClick={this.props.toggleNav} activeClassName="activeNav" className="nav-link-item" to="/contact">Contact</NavLink>
        </div>
      : null 
    );
  }
}

export default MobileNavigation;
