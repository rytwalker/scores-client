import { combineReducers } from 'redux';
import { quizzesReducer as quizzes } from './quizzesReducer';
import { scoresheetReducer as scoresheet } from './scoresheetReducer';
import { teamsReducer as teams } from './teamsReducer';

export default combineReducers({
  quizzes,
  scoresheet,
  teams
});
