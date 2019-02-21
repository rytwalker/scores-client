import React, { Component } from 'react';
import Loader from '../components/Loader';

class AboutView extends Component {
  render() {
    return (
      <div className="View about">
        {/* <h2>ABOUT</h2>
        <p>Working on it...</p> */}
        <Loader />
      </div>
    );
  }
}

export default AboutView;
