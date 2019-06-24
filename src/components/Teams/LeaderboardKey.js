import React, { Component } from 'react';
import styled from 'styled-components';

class LeaderboardKey extends Component {
  state = {};
  render() {
    return (
      <StyledKey>
        <span className="rank"> Rank</span>
        <span className="team-name">Team Name</span>
        <span className="average-score num">Average Score</span>
        <span className="games-played num hidden">Games Played</span>
        <span className="score-percent num hidden">Average % Correct</span>
      </StyledKey>
    );
  }
}

const StyledKey = styled.li`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 0 3rem;
  font-size: 1.2rem;
  font-weight: 400;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 3fr 1fr 1fr 1fr;
    width: 95%;
    margin: 0 auto;
  }
  @media (min-width: 1200px) {
    padding: 0 1.5rem;
  }
  .num {
    text-align: center;
  }
  .hidden {
    display: none;
    @media (min-width: 768px) {
      display: block;
    }
  }
`;

export default LeaderboardKey;
