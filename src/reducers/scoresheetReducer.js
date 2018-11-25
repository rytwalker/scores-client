import { ADD_TEAM, UPDATE_TOTAL_SCORE } from '../actions';

const initalState = { teams: [] };

export const scoresheetReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_TEAM:
      return { ...state, teams: [...state.teams, action.payload] };
    case UPDATE_TOTAL_SCORE:
      return {
        ...state,
        teams: state.teams.map(team => {
          if (team.id === action.payload.id) {
            team = action.payload;
          }
          return team;
        })
      };
    default:
      return state;
  }
};
