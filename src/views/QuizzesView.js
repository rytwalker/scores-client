import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuizzes, fetchQuiz } from '../actions';
import { StyledQuizDateRow } from '../styles/StyledQuizDateRow';
import Quiz from '../components/Quizzes/Quiz';

class QuizzesView extends Component {
  componentDidMount() {
    const { fetchQuizzes, totalQuizzes } = this.props;
    return !totalQuizzes.length ? fetchQuizzes() : null;
  }

  componentDidUpdate(prevProps) {
    const { totalQuizzes, fetchQuiz } = this.props;
    let currentQuizId = parseInt(this.props.match.params.id);
    if (
      prevProps.totalQuizzes.length !== totalQuizzes.length ||
      prevProps.match.params.id !== this.props.match.params.id
    ) {
      fetchQuiz(currentQuizId);
    }
  }

  onSelectChange = e => {
    console.log('Working', e.target.value);
    this.props.history.push(`/quiz/${e.target.value}`);
  };

  render() {
    const { quiz, totalQuizzes } = this.props;
    return (
      <div className="View">
        <h2>LATEST QUIZ</h2>
        {!quiz ? (
          <div>Loading Quiz...</div>
        ) : (
          <div>
            <StyledQuizDateRow>
              <select
                name="quizzes"
                className="quiz-dates"
                onChange={this.onSelectChange}
              >
                {totalQuizzes.map(quiz => (
                  <option value={quiz.id} key={quiz.id}>
                    {quiz.date}
                  </option>
                ))}
              </select>
            </StyledQuizDateRow>
            <Quiz quiz={quiz} quizzes={totalQuizzes} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    totalQuizzes: state.quizzes.quizzes,
    quiz: state.quizzes.quiz
  };
};

export default connect(
  mapStateToProps,
  { fetchQuizzes, fetchQuiz }
)(QuizzesView);
