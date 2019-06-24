import {
  FETCHING_TEAMS,
  FETCHING_TEAMS_SUCCESS,
  FETCHING_TEAMS_FAILURE,
  FETCHING_LEADERBOARD_TEAMS,
  FETCHING_LEADERBOARD_TEAMS_FAILURE,
  FETCHING_LEADERBOARD_TEAMS_SUCCESS,
  SORT_BY_AVERAGE_CORRECT,
  SORT_BY_GAMES_PLAYED,
  SORT_BY_AVERAGE_SCORE,
  SORT_BY_MOST_WINS,
  SORT_BY_MOST_TOP_3
} from '../actions';

const initalState = {
  teams: [],
  leaderboard: [],
  isFetching: false,
  error: null,
  sortedTeams: [],
  sortedLeaderboard: [],
  currentFilter: 'AVERAGE_SCORE'
};

export const teamsReducer = (state = initalState, action) => {
  let sorted;
  switch (action.type) {
    case FETCHING_TEAMS:
    case FETCHING_LEADERBOARD_TEAMS:
      return { ...state, isFetching: true };
    case FETCHING_TEAMS_SUCCESS:
      return {
        ...state,
        teams: [...action.payload],
        sortedTeams: [...action.payload],
        isFetching: false
      };
    case FETCHING_LEADERBOARD_TEAMS_SUCCESS:
      return {
        ...state,
        leaderboard: [...action.payload],
        sortedLeaderboard: [...action.payload],
        isFetching: false
      };
    case FETCHING_TEAMS_FAILURE:
    case FETCHING_LEADERBOARD_TEAMS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    case SORT_BY_AVERAGE_SCORE:
      return {
        ...state,
        sortedLeaderboard: [...state.leaderboard],
        currentFilter: 'AVERAGE_SCORE'
      };
    case SORT_BY_AVERAGE_CORRECT:
      sorted = [...state.sortedLeaderboard];
      sorted
        .sort((a, b) => a.average_percent_correct - b.average_percent_correct)
        .reverse();
      return {
        ...state,
        sortedLeaderboard: sorted,
        currentFilter: 'AVERAGE_CORRECT'
      };
    case SORT_BY_GAMES_PLAYED:
      sorted = [...state.sortedLeaderboard];
      sorted.sort((a, b) => a.games_played - b.games_played).reverse();
      return {
        ...state,
        sortedLeaderboard: sorted,
        currentFilter: 'GAMES_PLAYED'
      };
    case SORT_BY_MOST_WINS:
      sorted = [...state.sortedLeaderboard];
      sorted.sort((a, b) => a.first_place - b.first_place).reverse();
      return {
        ...state,
        sortedLeaderboard: sorted,
        currentFilter: 'MOST_WINS'
      };
    case SORT_BY_MOST_TOP_3:
      sorted = [...state.sortedLeaderboard];
      sorted
        .sort(
          (a, b) =>
            a.first_place +
            a.second_place +
            a.third_place -
            (b.first_place + b.second_place + b.third_place)
        )
        .reverse();
      return {
        ...state,
        sortedLeaderboard: sorted,
        currentFilter: 'MOST_TOP3'
      };
    default:
      return state;
  }
};
