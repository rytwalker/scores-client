import React, { Component } from 'react';
import styled from 'styled-components';
import QuizRow from './QuizRow';
import QuizKey from './QuizKey';

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

class Quiz extends Component {
  render() {
    const { quiz, quizzes } = this.props;
    return (
      <div>
        <StyledList>
          <QuizKey />
          {quiz.results.map((team, index) => (
            <QuizRow team={team} key={team.teamId} rank={index + 1} />
          ))}
        </StyledList>
      </div>
    );
  }
}

export default Quiz;
