import {
  FETCHING_QUIZZES,
  FETCHING_QUIZZES_SUCCESS,
  FETCHING_QUIZZES_FAILURE,
  FETCHING_QUIZ,
  FETCHING_QUIZ_SUCCESS,
  FETCHING_QUIZ_FAILURE
} from '../actions';

const initalState = {
  quizzes: [],
  quiz: null,
  isFetchingQuizzes: false,
  isFetchingQuiz: false,
  error: null
};

export const quizzesReducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCHING_QUIZZES:
      return { ...state, isFetchingQuizzes: true };
    case FETCHING_QUIZZES_SUCCESS:
      let loadedQuizzes = action.payload;
      let latestQuiz = loadedQuizzes[0];
      return {
        ...state,
        quizzes: [...loadedQuizzes],
        quiz: latestQuiz,
        isFetchingQuizzes: false
      };
    case FETCHING_QUIZZES_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetchingQuizzes: false
      };
    case FETCHING_QUIZ:
      return { ...state, isFetchingQuiz: true };
    case FETCHING_QUIZ_SUCCESS:
      return {
        ...state,
        quiz: { ...action.payload },
        isFetching: false
      };
    case FETCHING_QUIZ_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetchingQuiz: false
      };
    default:
      return state;
  }
};
