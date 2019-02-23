import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LeaderboardKey from './LeaderboardKey';
import Team from './Team';

class Teams extends Component {
  render() {
    const { teams } = this.props;
    let rank;
    return (
      <StyledTeamList>
        <LeaderboardKey />
        {teams.map((team, index) => {
          // const rank = this.handleDuplicateRankings(teams, team, index);
          if (index === 0) {
            rank = index + 1;
          } else if (
            Math.ceil(teams[index - 1].averageScore) ===
            Math.ceil(team.averageScore)
          ) {
            // eslint-disable-next-line
            rank = rank;
          } else {
            rank = index + 1;
          }
          return <Team team={team} rank={rank} key={team.teamId} />;
        })}
      </StyledTeamList>
    );
  }
}

const StyledTeamList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

Teams.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Teams;
