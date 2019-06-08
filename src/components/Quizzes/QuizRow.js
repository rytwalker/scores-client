import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from 'Utilities';

const StyledQuizRow = styled.li`
  display: grid;
  grid-template-columns: 1fr 4fr repeat(10, 1fr);
  align-items: end;
  padding: 2rem;
  font-size: 1.8rem;
  font-weight: 700;
  &:nth-child(even) {
    background: ${colors.primaryLight};
  }
`;

class QuizRow extends Component {
  render() {
    const { team, rank } = this.props;
    return (
      <StyledQuizRow>
        <span className="rank">{rank}.</span>
        <span className="team-name">{team.team}</span>
        <span className="total">{team.total_points_scored}</span>
        <span className="round">{team.r1_points_scored}</span>
        <span className="round joker">{team.r2_points_scored}</span>
        <span className="round">{team.r3_points_scored}</span>
        <span className="round">{team.r4_points_scored}</span>
        <span className="round">{team.r5_points_scored}</span>
        <span className="round">{team.r6_points_scored}</span>
        <span className="round">{team.r7_points_scored}</span>
        <span className="round">{team.r8_points_scored}</span>
        <span className="round">{team.round_jokered}</span>
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
