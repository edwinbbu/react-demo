import { ADD_NOTE, GET_NOTES } from "../actions/types";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.payload];

    case GET_NOTES:
      return state;
    default:
      return state;
  }
};
