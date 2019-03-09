import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import './Footer.css';
import MobileFooter from './MobileFooter';

class Footer extends Component {
  render () {
    return (
      <div className="Footer">

        <MediaQuery minWidth={769}>
        <MobileFooter closeNav={this.props.closeNav} />
        </MediaQuery>
        <MediaQuery maxWidth={768}>
          <MobileFooter closeNav={this.props.closeNav} />
        </MediaQuery>
      </div>
    );
  }
}

export default Footer;
