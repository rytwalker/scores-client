import axios from 'axios';

export const FETCHING_TEAMS = 'FETCHING_TEAMS';
export const FETCHING_TEAMS_SUCCESS = 'FETCHING_TEAMS_SUCCESS';
export const FETCHING_TEAMS_FAILURE = 'FETCHING_TEAMS_FAILURE';

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
