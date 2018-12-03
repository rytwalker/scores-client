import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuizzes, fetchQuiz } from '../actions';
import PropTypes from 'prop-types';
import Quiz from '../components/Quizzes/Quiz';
import { StyledQuizDateRow } from '../styles/StyledQuizDateRow';

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

QuizzesView.propTypes = {
  totalQuizzes: PropTypes.array.isRequired,
  quiz: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    totalTeams: PropTypes.string.isRequired,
    results: PropTypes.arrayOf(PropTypes.object).isRequired
  })
};

export default connect(
  mapStateToProps,
  { fetchQuizzes, fetchQuiz }
)(QuizzesView);
