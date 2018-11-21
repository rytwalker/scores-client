import React, { Component } from 'react';
import styled from 'styled-components';
import QuizRow from './QuizRow';

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

class Quiz extends Component {
  state = {};
  render() {
    const { quiz } = this.props;
    console.log(quiz);
    return (
      <div>
        <h3>{quiz.date}</h3>
        <StyledList>
          {quiz.results.map((team, index) => (
            <QuizRow team={team} key={team.teamId} rank={index + 1} />
          ))}
        </StyledList>
      </div>
    );
  }
}

export default Quiz;
