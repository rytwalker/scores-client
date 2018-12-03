import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledQuizRow = styled.li`
  display: grid;
  grid-template-columns: 1fr 4fr repeat(10, 1fr);
  align-items: end;
  padding: 2rem;
  font-size: 1.8rem;
  font-weight: 700;
  &:nth-child(odd) {
    background: #dfe6e9;
  }
`;

class QuizRow extends Component {
  render() {
    const { team, rank } = this.props;
    return (
      <StyledQuizRow>
        <span className="rank">{rank}.</span>
        <span className="team-name">{team.teamName}</span>
        <span className="total">{team.total}</span>
        <span className="round">{team.r1}</span>
        <span className="round joker">{team.r2}</span>
        <span className="round">{team.r3}</span>
        <span className="round">{team.r4}</span>
        <span className="round">{team.r5}</span>
        <span className="round">{team.r6}</span>
        <span className="round">{team.r7}</span>
        <span className="round">{team.r8}</span>
        <span className="round">{team.j}</span>
      </StyledQuizRow>
    );
  }
}

QuizRow.propTypes = {
  team: PropTypes.shape({
    teamId: PropTypes.number.isRequired,
    teamName: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    r1: PropTypes.number.isRequired,
    r2: PropTypes.number.isRequired,
    r3: PropTypes.number.isRequired,
    r4: PropTypes.number.isRequired,
    r5: PropTypes.number.isRequired,
    r6: PropTypes.number.isRequired,
    r7: PropTypes.number.isRequired,
    r8: PropTypes.number.isRequired,
    j: PropTypes.string.isRequired
  }).isRequired
};

export default QuizRow;
