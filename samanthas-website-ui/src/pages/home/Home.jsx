import React, { Component } from 'react';
import './Home.css';
import MobileHome from './MobileHome';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <MobileHome />
      </div>
    );
  }
}

export default Home;
