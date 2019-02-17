import { SET_FILTER } from "../actions/types";

const initialState = "all";

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
};
