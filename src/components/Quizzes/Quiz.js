import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import QuizRow from './QuizRow';
import QuizKey from './QuizKey';

class Quiz extends Component {
  render() {
    const { quiz } = this.props;
    return (
      <div>
        <StyledList>
          <QuizKey />
          {quiz.scores.map((team, index) => (
            <QuizRow team={team} key={team.id} rank={index + 1} />
          ))}
        </StyledList>
      </div>
    );
  }
}

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

Quiz.propTypes = {
  quiz: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    totalTeams: PropTypes.string.isRequired,
    results: PropTypes.arrayOf(PropTypes.object).isRequired
  }).isRequired
};

export default Quiz;
