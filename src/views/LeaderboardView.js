import React, { Component } from 'react';
import Teams from '../components/Teams';

class LeaderboardView extends Component {
  state = {};
  render() {
    return (
      <div className="View">
        <h2>LEADERBOARD</h2>
        <Teams />
      </div>
    );
  }
}

export default LeaderboardView;
