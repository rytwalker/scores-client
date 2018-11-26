import React, { Component } from 'react';
import styled from 'styled-components';
import Team from './Team';
import LeaderboardKey from './LeaderboardKey';

const StyledTeamList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

class Teams extends Component {
  handleDuplicateRankings = (teams, team, index) => {
    if (index === 0) {
      return index + 1;
    } else if (
      Math.round(teams[index - 1].averageScore) ===
      Math.round(team.averageScore)
    ) {
      return index;
    } else {
      return index + 1;
    }
  };

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
            Math.round(teams[index - 1].averageScore) ===
            Math.round(team.averageScore)
          ) {
            rank = rank;
          } else {
            rank = index + 1;
          }

          return <Team team={team} rank={rank} key={team.id} />;
        })}
      </StyledTeamList>
    );
  }
}

export default Teams;
