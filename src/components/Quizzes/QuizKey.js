import React, { Component } from 'react';
import styled from 'styled-components';

const StyledKey = styled.li`
  display: grid;
  grid-template-columns: 1fr 4fr repeat(10, 1fr);
  padding: 0 2rem;
  font-size: 1.2rem;
  font-weight: 400;
`;

class QuizKey extends Component {
  state = {};
  render() {
    return (
      <StyledKey>
        <span className="rank"> Rank</span>
        <span className="team-name">Team Name</span>
        <span>Total</span>
        <span>R1</span>
        <span>R2</span>
        <span>R3</span>
        <span>R4</span>
        <span>R5</span>
        <span>R6</span>
        <span>R7</span>
        <span>R8</span>
        <span>Jokered</span>
      </StyledKey>
    );
  }
}

export default QuizKey;
