import axios from 'axios';

export const FETCHING_TEAMS = 'FETCHING_TEAMS';
export const FETCHING_TEAMS_SUCCESS = 'FETCHING_TEAMS_SUCCESS';
export const FETCHING_TEAMS_FAILURE = 'FETCHING_TEAMS_FAILURE';

export const FETCHING_LEADERBOARD_TEAMS = 'FETCHING_LEADERBOARD_TEAMS';
export const FETCHING_LEADERBOARD_TEAMS_SUCCESS =
  'FETCHING_LEADERBOARD_TEAMS_SUCCESS';
export const FETCHING_LEADERBOARD_TEAMS_FAILURE =
  'FETCHING_LEADERBOARD_TEAMS_FAILURE';

export const FETCHING_QUIZZES = 'FETCHING_QUIZZES';
export const FETCHING_QUIZZES_SUCCESS = 'FETCHING_QUIZZES_SUCCESS';
export const FETCHING_QUIZZES_FAILURE = 'FETCHING_QUIZZES_FAILURE';

export const FETCHING_QUIZ = 'FETCHING_QUIZ';
export const FETCHING_QUIZ_SUCCESS = 'FETCHING_QUIZ_SUCCESS';
export const FETCHING_QUIZ_FAILURE = 'FETCHING_QUIZ_FAILURE';

export const ADD_TEAM = 'ADD_TEAM';

export const UPDATE_TOTAL_SCORE = 'UPDATE_TOTAL_SCORE';

export const SORT_BY_AVERAGE_CORRECT = 'SORT_BY_AVERAGE_CORRECT';
export const SORT_BY_AVERAGE_SCORE = 'SORT_BY_AVERAGE_SCORE';
export const SORT_BY_MOST_WINS = 'SORT_BY_MOST_WINS';
export const SORT_BY_MOST_TOP_3 = 'SORT_BY_MOST_TOP_3';
export const SORT_BY_GAMES_PLAYED = 'SORT_BY_GAMES_PLAYED';

export const fetchTeams = () => dispatch => {
  dispatch({ type: FETCHING_TEAMS });
  axios
    .get('https://suzies-quiz-scores.herokuapp.com/api/teams/')
    .then(res => {
      dispatch({ type: FETCHING_TEAMS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_TEAMS_FAILURE, payload: err });
    });
};

export const fetchLeaderboardTeams = () => dispatch => {
  dispatch({ type: FETCHING_LEADERBOARD_TEAMS });
  axios
    .get('https://suzies-quiz-scores.herokuapp.com/api/leaderboard/')
    .then(res => {
      dispatch({ type: FETCHING_LEADERBOARD_TEAMS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_LEADERBOARD_TEAMS_FAILURE, payload: err });
    });
};

export const fetchQuizzes = () => dispatch => {
  dispatch({ type: FETCHING_QUIZZES });
  axios
    .get(`https://suzies-quiz-scores.herokuapp.com/api/quizzes/`)
    .then(res => {
      dispatch({ type: FETCHING_QUIZZES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_QUIZZES_FAILURE, payload: err });
    });
};

export const fetchQuiz = id => dispatch => {
  dispatch({ type: FETCHING_QUIZ });
  axios
    .get(`https://suzies-quiz-scores.herokuapp.com/api/quizzes/${id}`)
    .then(res => {
      dispatch({ type: FETCHING_QUIZ_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_QUIZ_FAILURE, payload: err });
    });
};

export const addingTeam = team => {
  return {
    type: ADD_TEAM,
    payload: team
  };
};

export const updatingTotalScore = team => {
  return {
    type: UPDATE_TOTAL_SCORE,
    payload: team
  };
};

export const sortByAverageCorrect = () => {
  return {
    type: SORT_BY_AVERAGE_CORRECT
  };
};

export const sortByAverageScore = () => {
  return {
    type: SORT_BY_AVERAGE_SCORE
  };
};

export const sortByMostWins = () => {
  return {
    type: SORT_BY_MOST_WINS
  };
};

export const sortByMostTop3 = () => {
  return {
    type: SORT_BY_MOST_TOP_3
  };
};

export const sortByGamesPlayed = () => {
  return {
    type: SORT_BY_GAMES_PLAYED
  };
};
