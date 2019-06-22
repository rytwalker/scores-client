import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuizzes, fetchQuiz } from '../actions';
import PropTypes from 'prop-types';
import Loader from '../components/Loader/Loader';
import Quiz from '../components/Quizzes/Quiz';
import QuizSelect from '../components/Quizzes/QuizSelect';

class QuizzesView extends Component {
  componentDidMount() {
    const { fetchQuizzes, totalQuizzes } = this.props;
    return !totalQuizzes.length ? fetchQuizzes() : null;
  }

  onSelectChange = e => {
    const { fetchQuiz } = this.props;
    fetchQuiz(e.target.value);
  };

  render() {
    const { quiz, totalQuizzes } = this.props;
    return (
      <div className="View">
        {!totalQuizzes.length ? (
          <Loader />
        ) : (
          <>
            <h2>LATEST QUIZ</h2>
            <QuizSelect
              onSelectChange={this.onSelectChange}
              totalQuizzes={totalQuizzes}
            />
            {quiz && <Quiz quiz={quiz} quizzes={totalQuizzes} />}
          </>
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
    id: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    scores: PropTypes.arrayOf(PropTypes.object).isRequired
  })
};

export default connect(
  mapStateToProps,
  { fetchQuizzes, fetchQuiz }
)(QuizzesView);
