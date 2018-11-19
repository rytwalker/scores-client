import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTeams } from '../actions';
import Teams from '../components/Teams';

class LeaderboardView extends Component {
  state = {};

  componentDidMount() {
    const { fetchTeams } = this.props;
    fetchTeams();
  }

  render() {
    const { teams } = this.props;
    return (
      <div className="View">
        <h2>LEADERBOARD</h2>
        {!teams.length ? (
          <div>Loading Leaderboard...</div>
        ) : (
          <Teams teams={teams} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    teams: state.teams,
    error: state.error,
    isFetching: state.isFetching
  };
};

export default connect(
  mapStateToProps,
  { fetchTeams }
)(LeaderboardView);
