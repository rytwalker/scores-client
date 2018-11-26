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
  render() {
    const { teams } = this.props;
    return (
      <StyledTeamList>
        <LeaderboardKey />
        {teams.map((team, index) => (
          <Team team={team} rank={index + 1} key={team.id} />
        ))}
      </StyledTeamList>
    );
  }
}

export default Teams;
