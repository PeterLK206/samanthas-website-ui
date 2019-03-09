import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import MobilePictures from './MobilePictures';
import './Pictures.css';

class Pictures extends Component {
  render () {
    return (
      <div className="Pictures">
        <MediaQuery minWidth={769}>
        <div>Desktop</div>
        </MediaQuery>
        <MediaQuery maxWidth={768}>
          <MobilePictures />
        </MediaQuery>
      </div>
    );
  }
}

export default Pictures;
