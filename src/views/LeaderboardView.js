import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  fetchLeaderboardTeams,
  sortByAverageCorrect,
  sortByAverageScore,
  sortByGamesPlayed,
  sortByMostWins,
  sortByMostTop3
} from '../actions';
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
    const {
      currentFilter,
      teams,
      sortByAverageCorrect,
      sortByAverageScore,
      sortByGamesPlayed,
      sortByMostWins,
      sortByMostTop3
    } = this.props;
    return (
      <div className="View">
        {!teams.length ? (
          <Loader />
        ) : (
          <>
            <h2>LEADERBOARD</h2>
            <Container>
              <Teams teams={teams} />
              <SortBar
                currentFilter={currentFilter}
                location={this.props.location.pathname}
                sorts={{
                  sortByAverageCorrect,
                  sortByAverageScore,
                  sortByGamesPlayed,
                  sortByMostWins,
                  sortByMostTop3
                }}
              />
            </Container>
          </>
        )}
      </div>
    );
  }
}

const Container = styled.div`
  display: grid;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  grid-gap: 2rem;
  @media (min-width: 1090px) {
    grid-template-columns: 3fr 1fr;
  }
`;

const mapStateToProps = state => {
  return {
    teams: state.teams.sortedLeaderboard,
    error: state.teams.error,
    isFetching: state.teams.isFetching,
    currentFilter: state.teams.currentFilter
  };
};

LeaderboardView.propTypes = {
  teams: PropTypes.array.isRequired,
  error: PropTypes.any,
  isFetching: PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  {
    fetchLeaderboardTeams,
    sortByAverageCorrect,
    sortByAverageScore,
    sortByGamesPlayed,
    sortByMostWins,
    sortByMostTop3
  }
)(LeaderboardView);
