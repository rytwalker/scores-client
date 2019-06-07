import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTeams } from '../actions';
import PropTypes from 'prop-types';
import Loader from '../components/Loader/Loader';
import Teams from '../components/Teams/Teams';

class TeamsView extends Component {
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
          <>
            <h2>All Teams</h2>
            <Teams teams={teams} />
          </>
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

TeamsView.propTypes = {
  teams: PropTypes.array.isRequired,
  error: PropTypes.any,
  isFetching: PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  { fetchTeams }
)(TeamsView);