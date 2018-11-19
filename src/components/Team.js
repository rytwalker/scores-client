import React, { Component } from 'react';
import styled from 'styled-components';

const StyledTeam = styled.li`
  /* display: flex;
  align-items: baseline; */
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
    return (
      <StyledTeam>
        <span className="rank"> 1.</span>
        <span className="team-name">The Mooninites</span>
        <span className="average-score num">77</span>
        <span className="games-played num">12</span>
        <span className="score-percent num">74%</span>
      </StyledTeam>
    );
  }
}

export default Team;
