import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './MobileFooter.css';

class MobileFooter extends Component {
  render() {
    return (
      <div className="MobileFooter pt-2">
        <NavLink onClick={this.props.closeNav} activeClassName="activeClass" exact to="/">Home</NavLink>
        <NavLink onClick={this.props.closeNav} activeClassName="activeClass" to="/about">About Samantha</NavLink>
        <NavLink onClick={this.props.closeNav} activeClassName="activeClass" to="/pictures">Pictures</NavLink>
        <NavLink onClick={this.props.closeNav} activeClassName="activeClass" to="/contact">Contact</NavLink>
      </div>
    );
  }
}

export default MobileFooter;
