import React, { Component } from 'react';
import styled from 'styled-components';

const StyledKey = styled.li`
  display: grid;
  ${'' /* grid-template-columns: 1fr 3fr 1fr 1fr 1fr; */}
  grid-template-columns: 1fr 3fr 1fr;
  padding: 0 3rem;
  font-size: 1.2rem;
  font-weight: 400;
  .num {
    text-align: center;
  }
`;

class LeaderboardKey extends Component {
  state = {};
  render() {
    return (
      <StyledKey>
        <span className="rank"> Rank</span>
        <span className="team-name">Team Name</span>
        <span className="average-score num">Average Score</span>
        {/* <span className="games-played num">Games Played</span>
        <span className="score-percent num">Average % Correct</span> */}
      </StyledKey>
    );
  }
}

export default LeaderboardKey;
