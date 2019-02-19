import { SET_FILTER } from "../actions/types";

export const setFilter = type => dispatch => {
  dispatch({
    type: SET_FILTER,
    filter: type
  });
};
