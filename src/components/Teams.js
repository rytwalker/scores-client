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
    return (
      <StyledTeamList>
        <LeaderboardKey />
        <Team />
        <Team />
        <Team />
        <Team />
        <Team />
      </StyledTeamList>
    );
  }
}

export default Teams;
