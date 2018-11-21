import axios from 'axios';

export const FETCHING_TEAMS = 'FETCHING_TEAMS';
export const FETCHING_TEAMS_SUCCESS = 'FETCHING_TEAMS_SUCCESS';
export const FETCHING_TEAMS_FAILURE = 'FETCHING_TEAMS_FAILURE';

export const FETCHING_QUIZZES = 'FETCHING_QUIZZES';
export const FETCHING_QUIZZES_SUCCESS = 'FETCHING_QUIZZES_SUCCESS';
export const FETCHING_QUIZZES_FAILURE = 'FETCHING_QUIZZES_FAILURE';

export const FETCHING_QUIZ = 'FETCHING_QUIZ';
export const FETCHING_QUIZ_SUCCESS = 'FETCHING_QUIZ_SUCCESS';
export const FETCHING_QUIZ_FAILURE = 'FETCHING_QUIZ_FAILURE';

export const fetchTeams = () => dispatch => {
  dispatch({ type: FETCHING_TEAMS });
  axios
    .get('http://localhost:5000/api/teams')
    .then(res => {
      dispatch({ type: FETCHING_TEAMS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_TEAMS_FAILURE, payload: err });
    });
};

export const fetchQuizzes = () => dispatch => {
  dispatch({ type: FETCHING_QUIZZES });
  axios
    .get(`http://localhost:5000/api/quizzes/`)
    .then(res => {
      dispatch({ type: FETCHING_QUIZZES_SUCCESS, payload: res.data.length });
    })
    .catch(err => {
      dispatch({ type: FETCHING_QUIZZES_FAILURE, payload: err });
    });
};

export const fetchQuiz = id => dispatch => {
  dispatch({ type: FETCHING_QUIZ });
  axios
    .get(`http://localhost:5000/api/quizzes/${id}`)
    .then(res => {
      dispatch({ type: FETCHING_QUIZ_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_QUIZ_FAILURE, payload: err });
    });
};
