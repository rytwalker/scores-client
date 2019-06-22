import React from 'react';
import { StyledQuizDateRow } from '../../styles/StyledQuizDateRow';

const QuizSelect = ({ onSelectChange, totalQuizzes }) => {
  return (
    <StyledQuizDateRow>
      <select name="quizzes" className="quiz-dates" onChange={onSelectChange}>
        {totalQuizzes.map(quiz => (
          <option value={quiz.id} key={quiz.id}>
            {quiz.scores[0].quiz}
          </option>
        ))}
      </select>
    </StyledQuizDateRow>
  );
};

export default QuizSelect;
