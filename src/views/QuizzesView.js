import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuizzes, fetchQuiz } from '../actions';
import Quiz from '../components/Quiz';

class QuizzesView extends Component {
  componentDidMount() {
    const { fetchQuizzes, totalQuizzes } = this.props;
    return !totalQuizzes ? fetchQuizzes() : null;
  }

  componentDidUpdate(prevProps) {
    const { totalQuizzes, fetchQuiz } = this.props;
    if (prevProps.totalQuizzes !== this.props.totalQuizzes) {
      fetchQuiz(totalQuizzes);
    }
  }

  render() {
    const { quiz } = this.props;
    return (
      <div className="View">
        <h2>LATEST QUIZ</h2>
        {!quiz ? <div>Loading Quiz...</div> : <Quiz quiz={quiz} />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    totalQuizzes: state.quizzes.quizzesLength,
    quiz: state.quizzes.quiz
  };
};

export default connect(
  mapStateToProps,
  { fetchQuizzes, fetchQuiz }
)(QuizzesView);
