import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchLeaderboardTeams } from '../actions';
import PropTypes from 'prop-types';
import Loader from '../components/Loader/Loader';
import Teams from '../components/Teams/Teams';
import SortBar from '../components/SortBar/SortBar';

class LeaderboardView extends Component {
  componentDidMount() {
    const { fetchLeaderboardTeams, teams } = this.props;
    return !teams.length ? fetchLeaderboardTeams() : null;
  }

  render() {
    const { teams } = this.props;
    return (
      <div className="View">
        {!teams.length ? (
          <Loader />
        ) : (
          <>
            <h2>LEADERBOARD</h2>
            <Container>
              <SortBar />
              <Teams teams={teams} />
            </Container>
          </>
        )}
      </div>
    );
  }
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  grid-gap: 2rem;
`;

const mapStateToProps = state => {
  return {
    teams: state.teams.leaderboard,
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
  { fetchLeaderboardTeams }
)(LeaderboardView);
