import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './MobileFooter.css';

class MobileFooter extends Component {
  render() {
    return (
      <div className="MobileFooter">
        <NavLink activeClassName="activeClass" exact to="/">Home</NavLink>
        <NavLink activeClassName="activeClass" to="/about">About Samantha</NavLink>
        <NavLink activeClassName="activeClass" to="/pictures">Pictures</NavLink>
        <NavLink activeClassName="activeClass" to="/contact">Contact</NavLink>
      </div>
    );
  }
}

export default MobileFooter;
