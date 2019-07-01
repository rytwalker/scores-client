import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  fetchTeams,
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

class TeamsView extends Component {
  componentDidMount() {
    const { fetchTeams, teams } = this.props;
    console.log(this.props);
    return !teams.length ? fetchTeams() : null;
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
            <h2>All Teams</h2>
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
  grid-template-columns: 3fr 1fr;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  grid-gap: 2rem;
`;

const mapStateToProps = state => {
  return {
    teams: state.teams.sortedTeams,
    error: state.teams.error,
    isFetching: state.teams.isFetching,
    currentFilter: state.teams.currentFilter
  };
};

TeamsView.propTypes = {
  teams: PropTypes.array.isRequired,
  error: PropTypes.any,
  isFetching: PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  {
    fetchTeams,
    sortByAverageCorrect,
    sortByAverageScore,
    sortByGamesPlayed,
    sortByMostWins,
    sortByMostTop3
  }
)(TeamsView);
