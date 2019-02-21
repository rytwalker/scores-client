import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTeams } from '../actions';
import PropTypes from 'prop-types';
import Loader from '../components/Loader';
import Teams from '../components/Teams/Teams';

class LeaderboardView extends Component {
  componentDidMount() {
    const { fetchTeams, teams } = this.props;
    return !teams.length ? fetchTeams() : null;
  }

  render() {
    const { teams } = this.props;
    return (
      <div className="View">
        {!teams.length ? (
          <Loader />
        ) : (
          <React.Fragment>
            <h2>LEADERBOARD</h2>
            <Teams teams={teams} />
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    teams: state.teams.teams,
    error: state.teams.error,
    isFetching: state.teams.isFetching
  };
};

LeaderboardView.propTypes = {
  teams: PropTypes.array.isRequired,
  error: PropTypes.any,
  isFetching: PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  { fetchTeams }
)(LeaderboardView);
