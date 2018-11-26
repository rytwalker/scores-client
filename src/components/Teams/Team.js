import React, { Component } from 'react';
import styled from 'styled-components';
// import { teamsReducer } from '../../reducers';

const StyledTeam = styled.li`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr 1fr;
  align-items: end;
  padding: 3rem;
  font-size: 3.2rem;
  font-weight: 700;
  &:nth-child(even) {
    background: #dfe6e9;
  }
  .num {
    font-size: 4rem;
    text-align: center;
  }
  .average-score {
    color: #74b9ff;
  }
`;

class Team extends Component {
  state = {};
  render() {
    const { team, rank } = this.props;
    return (
      <StyledTeam>
        <span className="rank">{rank}</span>
        <span className="team-name">{team.teamName}</span>
        <span className="average-score num">
          {Math.round(team.averageScore)}
        </span>
        <span className="games-played num">{team.gamesPlayed}</span>
        <span className="score-percent num">
          {Math.round(team.averagePercentCorrect)}%
        </span>
      </StyledTeam>
    );
  }
}

export default Team;
