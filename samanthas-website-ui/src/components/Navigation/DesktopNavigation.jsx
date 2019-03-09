import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './DesktopNavigation.css';

class DesktopNavigation extends Component {
  render() {
    return (
        <div className="DesktopNavigation">
          <NavLink onClick={this.props.toggleNav} activeClassName="activeNav" exact className="nav-link-item" to="/">Home</NavLink>
          <NavLink onClick={this.props.toggleNav} activeClassName="activeNav" className="nav-link-item" to="/about">About Samantha</NavLink>
          <NavLink onClick={this.props.toggleNav} activeClassName="activeNav" className="nav-link-item" to="/pictures">Pictures</NavLink>
          <NavLink onClick={this.props.toggleNav} activeClassName="activeNav" className="nav-link-item" to="/contact">Contact</NavLink>
        </div>
    );
  }
}

export default DesktopNavigation;
