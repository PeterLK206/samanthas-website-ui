import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import './Home.css';
import MobileHome from './MobileHome';
import DesktopHome from './DesktopHome';

class Home extends Component {
  render () {
    return (
      <div className="Home">
        <MediaQuery minWidth={769}>
          <DesktopHome />
        </MediaQuery>
        <MediaQuery maxWidth={768}>
          <MobileHome closeNav={this.props.closeNav} />
        </MediaQuery>
      </div>
    );
  }
}

export default Home;